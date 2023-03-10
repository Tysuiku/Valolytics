export function allAgentQueries(agentData, agentName) {
  const agent = agentData.data.find(
    (agent) => agent.displayName.toLowerCase() === agentName.toLowerCase()
  );

  if (agent) {
    document.querySelector("#agentTitle").innerText = agent.displayName;
    document.querySelector("#agentDescription").innerText = agent.description;
  }
}
