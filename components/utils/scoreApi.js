// Modified for LX

// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

const baseURL = `https://lxlibrary.online/api/`;

/**
 * Retrieves parameters from the URL.
 *
 * @param {URLSearchParams} sp - The URLSearchParams object to extract
 *   parameters from. Defaults to the current window's URL parameters.
 * @returns {{
 *   studentId: string | undefined;
 *   userId: string | undefined;
 *   slideId: string | undefined;
 *   token: string | undefined;
 * }}
 *   The extracted parameters.
 */
const getParams = (sp = new URLSearchParams(window.location.search)) => ({
  studentId: sp.get("studentId") || undefined,
  userId: sp.get("userId") || undefined,
  slideId: sp.get("slideId") || undefined,
  token: sp.get("token") || undefined,
});

/**
 * Submits a score for a specific student and slide.
 *
 * @param {Object} data - The score JSON data to submit.
 * @param {boolean} pass - Indicates whether the score is a passing score.
 * @param {Object} params - The parameters for the API request. Parsed from URL
 *   automatically, so you don't need to provide it.
 * @returns {Promise<{
 *   id: string;
 *   StudentId: string;
 *   UserId: string;
 *   SlideId: string;
 *   createdAt: string;
 *   data: string;
 *   score?: number;
 *   level?: number;
 *   pass: boolean;
 * }>}
 *   The response from the API as a JSON object.
 * @throws {Error} If slideId or token is not available.
 */
export async function submitScore(
  data = {},
  pass = true,
  params = getParams(),
) {
  if (!params.slideId)
    throw new Error(
      "submitScoreE1: No slideId available. Please embed this in a slide.",
    );
  if (!params.token)
    throw new Error(
      "submitScoreE2: No token available. Please enable token for this slide.",
    );

  // Scan for Blob types and replace them
  const blobs = {};
  const submitData = {};
  for (const key in data) {
    if (data[key] instanceof Blob) {
      submitData[key] = {
        size: data[key].size,
        mime: data[key].type,
      };
      blobs[key] = data[key];
    } else {
      submitData[key] = data[key];
    }
  }

  const scoreData = {
    StudentId: params.studentId,
    UserId: params.userId,
    SlideId: params.slideId,
    data: JSON.stringify(submitData),
    pass,
  };

  const response = await fetch(baseURL + `score`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: params.token,
    },
    body: JSON.stringify(scoreData),
  });

  const scoreResponse = await response.json();
  const scoreId = scoreResponse.id;

  // Post each Blob
  for (const key in blobs) {
    await postFile(scoreId, key, blobs[key], params);
  }

  // Return the score object with original data
  return {
    ...scoreResponse,
    data,
  };
}

/**
 * Fetches and parses score data.
 *
 * @param {{
 *   id: string;
 *   StudentId: string;
 *   UserId: string;
 *   SlideId: string;
 *   createdAt: string;
 *   data: string;
 *   score?: number;
 *   level?: number;
 *   pass: boolean;
 * }} score
 *   The score object.
 * @param {Object} params - The parameters for the API request. Parsed from URL
 *   automatically, so you don't need to provide it.
 * @returns {Promise<{
 *   id: string;
 *   StudentId: string;
 *   UserId: string;
 *   SlideId: string;
 *   createdAt: string;
 *   data: Object;
 *   score?: number;
 *   level?: number;
 *   pass: boolean;
 * }>}
 *   The score data.
 * @throws {Error} If slideId or token is not available.
 */
export async function fetchScore(
  score = { id: "", data: "" },
  params = getParams(),
) {
  if (!score) return null;
  if (!params.slideId)
    throw new Error(
      "fetchScoreE1: No slideId available. Please embed this in a slide.",
    );
  if (!params.token)
    throw new Error(
      "fetchScoreE2: No token available. Please enable token for this slide.",
    );

  const parsedData = safeJsonParse(score.data || "{}");

  for (const key in parsedData) {
    if (
      parsedData[key] &&
      typeof parsedData[key] === "object" &&
      parsedData[key].size != null &&
      parsedData[key].mime != null
    ) {
      const blob = await fetchFile(score.id, key, params);
      if (blob instanceof Blob) {
        if (blob.size !== parsedData[key].size)
          throw new Error(
            `fetchScoreE3: Mismatched file size fetched from server: ${blob.size}!=${parsedData[key].size}`,
          );
        // if (blob.type !== parsedData[key].mime)
        //   throw new Error(
        //     `fetchScoreE4: Mismatched file type fetched from server: ${blob.type}!=${parsedData[key].mime}`,
        //   );
        parsedData[key] = new Blob([blob], { type: parsedData[key].mime });
      } else parsedData[key] = null;
    }
  }

  return {
    ...score,
    data: parsedData,
  };
}

/**
 * Safely parses JSON data.
 *
 * @param {string} data - The JSON string to parse.
 * @returns {Object} The parsed JSON object or an empty object if parsing fails.
 */
const safeJsonParse = (data) => {
  try {
    return JSON.parse(data);
  } catch (error) {
    console.error("safeJsonParseE1: JSON parse error:", error, data);
    return {};
  }
};

/**
 * Fetches scores for a specific student and slide.
 *
 * @param {Object} params - The parameters for the API request. Parsed from URL
 *   automatically, so you don't need to provide it.
 * @returns {Promise<
 *   {
 *     id: string;
 *     StudentId: string;
 *     UserId: string;
 *     SlideId: string;
 *     createdAt: string;
 *     data: string;
 *     score?: number;
 *     level?: number;
 *     pass: boolean;
 *   }[]
 * >}
 *   The scores array for the given slideId.
 * @throws {Error} If slideId or token is not available.
 */
export async function fetchScores(params = getParams()) {
  if (!params.slideId)
    throw new Error(
      "fetchScoresE1: No slideId available. Please embed this in a slide.",
    );
  if (!params.token)
    throw new Error(
      "fetchScoresE2: No token available. Please enable token for this slide.",
    );

  const response = await fetch(
    baseURL + `v2/student/scores/${params.slideId}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: params.token,
      },
    },
  );
  const responseBody = await response.json();
  const scores = responseBody.scores ?? [];
  return await Promise.all(scores.map((s) => fetchScore(s)));
}

/**
 * Posts a file to the server.
 *
 * @param {string} fileGroupId - The ID of the file group.
 * @param {string} fileId - The ID of the file.
 * @param {Blob} file - The file to upload.
 * @param {Object} params - The parameters for the API request. Parsed from URL
 *   automatically, so you don't need to provide it.
 * @returns {Promise<string>} The response from the API as a JSON object.
 * @throws {Error} If token is not available or if the upload fails.
 */
async function postFile(fileGroupId, fileId, file, params = getParams()) {
  if (!params.token)
    throw new Error(
      "postFileE1: No token available. Please enable token for this slide.",
    );

  const formData = new FormData();
  formData.append(fileId, file);

  const response = await fetch(baseURL + `file/${fileGroupId}`, {
    method: "PUT",
    headers: {
      Authorization: params.token,
    },
    body: formData,
  });
  const responseBody = await response.text();

  if (!response.ok)
    throw new Error(
      `postFileE2: Failed to upload file: ${response.statusText}: ${responseBody || "Error"}`,
    );

  return responseBody;
}

/**
 * Fetches a file from the server.
 *
 * @param {string} fileGroupId - The ID of the file group.
 * @param {string} fileId - The ID of the file.
 * @param {Object} params - The parameters for the API request. Parsed from URL
 *   automatically, so you don't need to provide it.
 * @returns {Promise<Blob | null>} The file as a Blob or null if not found.
 * @throws {Error} If token is not available or if the fetch fails.
 */
async function fetchFile(fileGroupId, fileId, params = getParams()) {
  if (!params.token)
    throw new Error(
      "fetchFileE1: No token available. Please enable token for this slide.",
    );

  const response = await fetch(baseURL + `file/${fileGroupId}/${fileId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: params.token,
    },
  });

  if (!response.ok) {
    if (response.status === 404) return null;
    const responseBody = await response.text();
    throw new Error(
      `fetchFileE2: Failed to fetch file: ${response.statusText}: ${responseBody || "Error"}`,
    );
  }
  return await response.blob();
}
