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
  <summary>Past Scores</summary>
  <div>
    <table>
      <thead>
        <tr>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
</details>
`;

class ScoreTable extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));

    this.scoreData = {};
    this.fetchScores();
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {}

  attributeChangedCallback(name, oldValue, newValue) {}

  render() {
    const scores = this.scoreData.scores || [];
    const thead = this.shadowRoot.querySelector("thead tr");
    const tbody = this.shadowRoot.querySelector("tbody");
    thead.innerHTML = "";
    tbody.innerHTML = "";

    if (scores.length > 0) {
      const allColumns = new Set(["date"]);

      // Scan through all data to find all possible columns
      scores.forEach((score) => {
        const data = this.safeJsonParse(score.data || "{}");
        Object.keys(data).forEach((key) => {
          allColumns.add(key);
        });
      });

      // Render the headers
      allColumns.forEach((column) => {
        const th = document.createElement("th");
        th.innerText = column.charAt(0).toUpperCase() + column.slice(1);
        thead.appendChild(th);
      });

      // Render the rows
      scores.forEach((score) => {
        const row = tbody.insertRow();
        const data = this.safeJsonParse(score.data || "{}");
        data.date = new Date(score.createdAt).toLocaleString();

        allColumns.forEach((column) => {
          const cell = row.insertCell();
          cell.innerText = data[column]?.toString() ?? "";
        });
      });
    }
  }

  safeJsonParse(data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error("safeJsonParseE1: JSON parse error:", error, data);
      return {};
    }
  }

  async fetchScores() {
    const scores = await fetchScores();
    this.scoreData = scores;
    this.render();
  }

  async submitScore(data = {}, pass = true) {
    await submitScore(data, pass);
    await this.fetchScores();
  }

  show() {
    const details = this.shadowRoot.querySelector("details");
    details.style.display = "flex";
  }

  hide() {
    const details = this.shadowRoot.querySelector("details");
    details.style.display = "none";
  }
}

customElements.define("score-table", ScoreTable);
