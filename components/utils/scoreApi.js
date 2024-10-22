const baseURL = `https://lxlibrary.online/api/`;

export async function submitScore(data = {}, pass = true) {
  const params = new URLSearchParams(window.location.search);
  const scoreData = {
    StudentId: params.get("studentId") || undefined,
    UserId: params.get("userId") || undefined,
    SlideId: params.get("slideId") || undefined,
    data: JSON.stringify(data),
    pass,
  };
  return fetch(baseURL + `score`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: params.get("token"),
    },
    body: JSON.stringify(scoreData),
  });
}

export async function fetchScores() {
  const params = new URLSearchParams(window.location.search);
  const response = await fetch(
    baseURL + `v2/student/scores/${params.get("slideId")}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: params.get("token"),
      },
    }
  );
  return await response.json();
}
