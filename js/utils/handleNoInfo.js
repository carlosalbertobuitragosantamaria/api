import { inboundTable, outboundTable } from "../constants/constants.js";
import { clearTable } from "./clearTable.js";

export const handleNoInfo = (direction) => {
  console.log("No departures for " + direction + " at this time");

  const currentTable = direction === "inbound" ? inboundTable : outboundTable;

  // remove thead and tbody
  const tableHead = currentTable.querySelector("thead");
  const tableBody = currentTable.querySelector("tbody");
  tableHead.remove();
  clearTable(tableBody);

  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.textContent = "No departure info at this time";
  row.appendChild(cell);
  console.log(tableBody)
  tableBody.appendChild(row);
  return;
}
