import { allAgentQueries } from "./agentQueries";
import { buttonClicks } from "./buttonClicks";

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
