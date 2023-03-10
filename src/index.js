import { displayAgentInfo } from "./scripts/agentDataFetch.js";

document.addEventListener("DOMContentLoaded", () => {
  const search = document.querySelector("#search");
  const agentInput = document.querySelector("#agentSearch");
  const agentPortrait = document.querySelector("#agentBox");

  search.addEventListener("click", function (e) {
    const agentName = agentInput.value;
    e.preventDefault();
    displayAgentInfo(agentName);
  });
});
