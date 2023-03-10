import { valoAg, valoOrd } from "./agentObjects";

/*gets basic agent info */
export function allAgentQueries(agentData, agentName) {
  let agent = null;
  for (let i = 0; i < agentData.data.length; i++) {
    if (
      agentData.data[i].displayName.toLowerCase() === agentName.toLowerCase() &&
      agentData.data[i]["isPlayableCharacter"]
    ) {
      agent = agentData.data[i];
      break;
    }
  }
  if (agent) {
    document.querySelector("#agentTitle").innerText = agent.displayName;
    document.querySelector("#agentDescription").innerText = agent.description;
    document.querySelector("#valoFullPortrait").src = agent.fullPortraitV2;
    document.querySelector("#agentRole").innerText = agent.role.displayName;
    document.querySelector("#valoRoleIcon").src = agent.role.displayIcon;

    document.querySelector("#A1").src = agent.abilities[0].displayIcon;
    document.querySelector("#A2").src = agent.abilities[1].displayIcon;
    document.querySelector("#A3").src = agent.abilities[2].displayIcon;
    document.querySelector("#Ult1").src = agent.abilities[3].displayIcon;
  }

  document.querySelector("#abilityName").innerText =
    agent.abilities[0].displayName;

  document.querySelector("#abilityDescription").innerText =
    agent.abilities[0].description;

  const videoSource = document.querySelector("#abilityVideo");
  const source = document.querySelector("#abVidSource");
  source.src = `https://assets.contentstack.io/v3/assets/${
    valoAg[`${agent.displayName}1`]
  }/${valoOrd[`${agent.displayName}1`]}`;
  videoSource.load();
}
/* */

/*gets basic icon display */
export function allAgentIcon(agentData, agentName) {
  let agent = null;
  for (let i = 0; i < agentData.data.length; i++) {
    if (
      agentData.data[i].displayName.toLowerCase() === agentName.toLowerCase() &&
      agentData.data[i]["isPlayableCharacter"]
    ) {
      agent = agentData.data[i];
      break;
    }
  }
  if (agent) {
    document.querySelector(`#${agent.displayName}Icon1`).src =
      agent.displayIcon;
  }
}
