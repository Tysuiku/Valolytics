import { displayAgentInfo } from "./scripts/agentDataFetch.js";
import { displayAgentIcon } from "./scripts/agentDataFetch.js";
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
import { displayWeaponInfo } from "./scripts/weaponDataFetch.js";

/* useful variables for functions */
const search = document.querySelector("#search");
const agentInput = document.querySelector("#agentSearch");
/* */

/*Default Load */
let weaponName = "Operator";
displayWeaponInfo(weaponName);
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
});

astraIcon.addEventListener("click", function (e) {
  agentName = "Astra";
  e.preventDefault();
  displayAgentInfo(agentName);
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
