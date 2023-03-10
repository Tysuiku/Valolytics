import { displayAgentInfo } from "./scripts/agentDataFetch.js";

document.addEventListener("DOMContentLoaded", () => {
  let agentName = "Jett";
  const search = document.querySelector("#search");
  const agentInput = document.querySelector("#agentSearch");
  const agentPortrait = document.querySelector("#agentBox");
  const agentRole = document.querySelector("#agentRoleBox");

  search.addEventListener("click", function (e) {
    const agentName = agentInput.value;
    e.preventDefault();
    displayAgentInfo(agentName);
  });
});
