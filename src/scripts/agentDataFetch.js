import { allAgentQueries } from "./agentQueries";
import { buttonClicks } from "./buttonClicks";
import { allAgentIcon } from "./agentQueries";

export function displayAgentInfo(agentName) {
  fetch(`https://valorant-api.com/v1/agents/`)
    .then((response) => response.json())
    .then((data) => {
      let agentData = data;
      try {
        allAgentQueries(agentData, agentName);
        buttonClicks(agentData, agentName);
      } catch (error) {
        console.log("Agent not found", error);
      }
    });
}

export function displayAgentIcon(agentName) {
  fetch(`https://valorant-api.com/v1/agents/`)
    .then((response) => response.json())
    .then((data) => {
      let agentData = data;
      try {
        allAgentIcon(agentData, agentName);
      } catch (error) {
        console.log("Agent not found", error);
      }
    });
}
