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
    console.log(agent);
    document.querySelector("#agentTitle").innerText = agent.displayName;
    document.querySelector("#agentDescription").innerText = agent.description;
    document.querySelector("#valoFullPortrait").src = agent.fullPortraitV2;
    document.querySelector("#agentRole").innerText = agent.role.displayName;
    document.querySelector("#valoRoleIcon").src = agent.role.displayIcon;
  }
}
