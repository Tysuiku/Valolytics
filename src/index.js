import { displayAgentInfo } from "./scripts/agentDataFetch.js";
import { displayAgentIcon } from "./scripts/agentDataFetch.js";
import { valoAg, valoOrd } from "./scripts/agentObjects.js";
import {
  astraIcon,
  breachIcon,
  brimstoneIcon,
  chamberIcon,
  cypherIcon,
  fadeIcon,
  gekkoIcon,
  harborIcon,
  jettIcon,
  kayoIcon,
  killjoyIcon,
  neonIcon,
  omenIcon,
  phoenixIcon,
  razeIcon,
  reynaIcon,
  sageIcon,
  skyeIcon,
  sovaIcon,
  viperIcon,
  yoruIcon,
} from "./scripts/agentVars.js";

/* useful variables for functions */
const search = document.querySelector("#search");
const agentInput = document.querySelector("#agentSearch");
/* */

/*Default Load */
const defaultSource = document.querySelector("#abilityVideo");
const defaultVid = document.querySelector("#abVidSource");
const defaultAbName = document.querySelector("#abilityName");
const defaultAbDes = document.querySelector("#abilityDescription");

defaultAbName.append("Blade Storm");
defaultAbDes.append(
  "EQUIP a set of highly accurate throwing knives. FIRE to throw a single knife and recharge knives on a kill. ALTERNATE FIRE to throw all remaining daggers but does not recharge on a kill."
);
defaultVid.src = `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4`;
defaultSource.load();
let agentName = "Jett";
displayAgentInfo(agentName);
/* */

/*searchbox */
search.addEventListener("click", function (e) {
  agentName = agentInput.value;
  e.preventDefault();
  displayAgentInfo(agentName);
});
/* */

/*agent icon buttons */
displayAgentIcon("Jett");
displayAgentIcon("Astra");
displayAgentIcon("Breach");
displayAgentIcon("Brimstone");
displayAgentIcon("Chamber");
displayAgentIcon("Cypher");
displayAgentIcon("Fade");
displayAgentIcon("Gekko");
displayAgentIcon("Harbor");
displayAgentIcon("Jett");
// displayAgentIcon("KAY/O");
// displayAgentIcon(`${encodeURI("KAY/O")}`);
displayAgentIcon("Killjoy");
displayAgentIcon("Neon");
displayAgentIcon("Omen");
displayAgentIcon("Phoenix");
displayAgentIcon("Raze");
displayAgentIcon("Reyna");
displayAgentIcon("Sage");
displayAgentIcon("Skye");
displayAgentIcon("Sova");
displayAgentIcon("Viper");
displayAgentIcon("Yoru");
/* */

/* eventListeners for agent icon click func*/
jettIcon.addEventListener("click", function (e) {
  agentName = "Jett";
  e.preventDefault();
  displayAgentInfo(agentName);
  document.querySelector("#abilityName").innerText =
    agent.abilities[0].displayName;

  document.querySelector("#abilityDescription").innerText =
    agent.abilities[0].description;
  source.src = `https://assets.contentstack.io/v3/assets/${
    valoAg[`${agent.displayName}1`]
  }/${valoOrd[`${agent.displayName}1`]}`;
  videoSource.load();
});

astraIcon.addEventListener("click", function (e) {
  agentName = "Astra";
  e.preventDefault();
  displayAgentInfo(agentName);
  document.querySelector("#abilityName").innerText =
    agent.abilities[0].displayName;

  document.querySelector("#abilityDescription").innerText =
    agent.abilities[0].description;
  source.src = `https://assets.contentstack.io/v3/assets/${
    valoAg[`${agent.displayName}1`]
  }/${valoOrd[`${agent.displayName}1`]}`;
  videoSource.load();
});

breachIcon.addEventListener("click", function (e) {
  agentName = "Breach";
  e.preventDefault();
  displayAgentInfo(agentName);
});

brimstoneIcon.addEventListener("click", function (e) {
  agentName = "Brimstone";
  e.preventDefault();
  displayAgentInfo(agentName);
});

chamberIcon.addEventListener("click", function (e) {
  agentName = "Chamber";
  e.preventDefault();
  displayAgentInfo(agentName);
});

cypherIcon.addEventListener("click", function (e) {
  agentName = "Cypher";
  e.preventDefault();
  displayAgentInfo(agentName);
});

fadeIcon.addEventListener("click", function (e) {
  agentName = "Fade";
  e.preventDefault();
  displayAgentInfo(agentName);
});

gekkoIcon.addEventListener("click", function (e) {
  agentName = "Gekko";
  e.preventDefault();
  displayAgentInfo(agentName);
});

harborIcon.addEventListener("click", function (e) {
  agentName = "Harbor";
  e.preventDefault();
  displayAgentInfo(agentName);
});

kayoIcon.addEventListener("click", function (e) {
  agentName = "KAY/O";
  e.preventDefault();
  displayAgentInfo(agentName);
});

killjoyIcon.addEventListener("click", function (e) {
  agentName = "Killjoy";
  e.preventDefault();
  displayAgentInfo(agentName);
});

neonIcon.addEventListener("click", function (e) {
  agentName = "Neon";
  e.preventDefault();
  displayAgentInfo(agentName);
});

omenIcon.addEventListener("click", function (e) {
  agentName = "Omen";
  e.preventDefault();
  displayAgentInfo(agentName);
});

phoenixIcon.addEventListener("click", function (e) {
  agentName = "Phoenix";
  e.preventDefault();
  displayAgentInfo(agentName);
});

razeIcon.addEventListener("click", function (e) {
  agentName = "Raze";
  e.preventDefault();
  displayAgentInfo(agentName);
});

reynaIcon.addEventListener("click", function (e) {
  agentName = "Reyna";
  e.preventDefault();
  displayAgentInfo(agentName);
});

sageIcon.addEventListener("click", function (e) {
  agentName = "Sage";
  e.preventDefault();
  displayAgentInfo(agentName);
});

skyeIcon.addEventListener("click", function (e) {
  agentName = "Skye";
  e.preventDefault();
  displayAgentInfo(agentName);
});

sovaIcon.addEventListener("click", function (e) {
  agentName = "Sova";
  e.preventDefault();
  displayAgentInfo(agentName);
});

viperIcon.addEventListener("click", function (e) {
  agentName = "Viper";
  e.preventDefault();
  displayAgentInfo(agentName);
});

yoruIcon.addEventListener("click", function (e) {
  agentName = "Yoru";
  e.preventDefault();
  displayAgentInfo(agentName);
});
/* ending of icon button func*/
