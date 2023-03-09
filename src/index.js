import { getAgent } from "./scripts/display_agent";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#search").addEventListener("click", getAgent);
});
