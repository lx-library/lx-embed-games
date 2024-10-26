// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

/**
 * Downloads a Blob object as a file.
 *
 * @param {Blob} [value=new Blob([])] - The Blob object to download. Default is
 *   `new Blob([])`
 * @param {string} [name="file"] - The name of the file to be downloaded.
 *   Default is `"file"`
 */
export const downloadBlob = (value = new Blob([]), name = "file") => {
  const url = URL.createObjectURL(value);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
