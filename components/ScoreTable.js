// Modified for LX

// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { renderDataTable } from "./renderDataTable.js";
import { fetchScores, submitScore } from "./utils/scoreApi.js";

const template = document.createElement("template");
template.innerHTML = `
<style>
  details {
    display: flex;
    flex: auto;
    flex-direction: column;
  }
  details div {
    display: flex;
    overflow: auto;
    max-height: 30em;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
</style>
<details>
  <summary>Submissions</summary>
    <div id="score-table-container"></div>
</details>
`;

/**
 * A custom HTML element that displays a score table.
 *
 * @class
 * @extends HTMLElement
 */
class ScoreTable extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));

    this.scores = [];
    this.fetchScores();
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {}

  attributeChangedCallback(name, oldValue, newValue) {}

  /** Renders the score table. */
  render() {
    const scores = this.scores ?? [];
    const scoresData = scores.map((score) => ({
      createdAt: score.createdAt,
      ...score.data,
    }));
    const table = renderDataTable(scoresData);
    const container = this.shadowRoot.querySelector("#score-table-container");
    container.innerHTML = "";
    container.appendChild(table);
  }

  /** Fetches scores from the API and updates the table. */
  async fetchScores() {
    this.scores = await fetchScores();
    this.render();
  }

  /**
   * Submits a score.
   *
   * @param {Object} data - The score data to submit. Can be any normal JSON
   *   object, including root keys with binary file Blob types.
   * @param {boolean} [pass=true] - Indicates whether the score is a pass.
   *   Default is `true`
   */
  async submitScore(data = {}, pass = true) {
    await submitScore(data, pass);
    await this.fetchScores();
  }

  /** Shows the score table. */
  show() {
    const details = this.shadowRoot.querySelector("details");
    details.style.display = "flex";
  }

  /** Hides the score table. */
  hide() {
    const details = this.shadowRoot.querySelector("details");
    details.style.display = "none";
  }
}

customElements.define("score-table", ScoreTable);
