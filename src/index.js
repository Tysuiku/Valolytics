import { displayAgentInfo } from "./scripts/agentDataFetch.js";

const search = document.querySelector("#search");
const agentInput = document.querySelector("#agentSearch");
const agentPortrait = document.querySelector("#agentBox");
const agentRole = document.querySelector("#agentRoleBox");
const agentAbility = document.querySelector("#agentAbilityBox");

search.addEventListener("click", function (e) {
  const agentName = agentInput.value;
  e.preventDefault();
  displayAgentInfo(agentName);
});
