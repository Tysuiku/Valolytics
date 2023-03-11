import { valoAg, valoOrd } from "./agentObjects";

export function buttonClicks(agentData, agentName) {
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

  const videoSource = document.querySelector("#abilityVideo");
  const source = document.querySelector("#abVidSource");
  const ability1 = document.querySelector("#A1");
  const ability2 = document.querySelector("#A2");
  const ability3 = document.querySelector("#A3");
  const abilityUlt = document.querySelector("#Ult1");

  ability1.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#abilityName").innerText =
      agent.abilities[0].displayName;

    document.querySelector("#abilityDescription").innerText =
      agent.abilities[0].description;
    source.src = `https://assets.contentstack.io/v3/assets/${
      valoAg[`${agent.displayName}1`]
    }/${valoOrd[`${agent.displayName}1`]}`;
    console.log(valoAg[agent.displayName]);
    console.log(valoOrd[agent.displayName]);
    videoSource.load();
  });

  ability2.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#abilityName").innerText =
      agent.abilities[1].displayName;

    document.querySelector("#abilityDescription").innerText =
      agent.abilities[1].description;

    source.src = `https://assets.contentstack.io/v3/assets/${
      valoAg[`${agent.displayName}2`]
    }/${valoOrd[`${agent.displayName}2`]}`;

    videoSource.load();
  });

  ability3.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#abilityName").innerText =
      agent.abilities[2].displayName;

    document.querySelector("#abilityDescription").innerText =
      agent.abilities[2].description;
    source.src = `https://assets.contentstack.io/v3/assets/${
      valoAg[`${agent.displayName}3`]
    }/${valoOrd[`${agent.displayName}3`]}`;
    videoSource.load();
  });

  abilityUlt.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#abilityName").innerText =
      agent.abilities[3].displayName;

    document.querySelector("#abilityDescription").innerText =
      agent.abilities[3].description;
    source.src = `https://assets.contentstack.io/v3/assets/${
      valoAg[`${agent.displayName}4`]
    }/${valoOrd[`${agent.displayName}4`]}`;
    videoSource.load();
  });
}
