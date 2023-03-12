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
}

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
  if (agent.displayName === "KAY/O") {
    document.querySelector(`#KAYOIcon1`).src = agent.displayIcon;
  }
}
