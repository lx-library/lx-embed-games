// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { downloadBlob } from "./downloadBlob.js";

/**
 * Renders a data table from an array of items.
 *
 * @param {Object[]} [items=[{}]] - The array of items to render in the table.
 *   Default is `[{}]`
 * @returns {HTMLTableElement} The generated table element.
 */
export const renderDataTable = (items = [{}]) => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  table.appendChild(thead);
  table.appendChild(tbody);

  if (items.length > 0) {
    const allColumns = new Set([]);

    // Scan through all data to find all possible columns
    items.forEach((item) =>
      Object.keys(item).forEach((key) => {
        allColumns.add(key);
      }),
    );

    // Render the headers
    allColumns.forEach((column) => {
      const th = document.createElement("th");
      th.innerText = column.charAt(0).toUpperCase() + column.slice(1);
      thead.appendChild(th);
    });

    // Render the rows
    items.forEach((data) => {
      const row = tbody.insertRow();

      allColumns.forEach((column) => {
        const value = data[column];
        const cell = row.insertCell();
        if (value instanceof Blob) {
          const mime = value.type || "application/bin";
          const button = document.createElement("button");
          button.innerText = `${value.type} (${(value.size / 1024).toFixed(2)} KB)`;
          button.onclick = () =>
            downloadBlob(value, column + "." + (mime.split("/")[1] ?? "bin"));
          cell.appendChild(button);
        } else if (value instanceof Date) {
          cell.innerText = value?.toLocaleString() ?? "";
        } else {
          cell.innerText = value?.toString() ?? "";
        }
      });
    });
  }

  return table;
};
