import { displayAgentInfo } from "./scripts/agentDataFetch.js";
import { displayAgentIcon } from "./scripts/agentDataFetch.js";
import { displayMapInfo } from "./scripts/mapDataFetch.js";
import { displayMapIcon } from "./scripts/mapDataFetch.js";
import { displayWeaponInfo } from "./scripts/weaponDataFetch.js";
import {
  AscentIcon,
  SplitIcon,
  FractureIcon,
  BindIcon,
  BreezeIcon,
  LotusIcon,
  PearlIcon,
  IceboxIcon,
  HavenIcon,
} from "./scripts/mapVars.js";
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

/*Default Load */
let weaponName = "Vandal";
displayWeaponInfo(weaponName);

let agentName = "Jett";
displayAgentInfo(agentName);

let mapName = "Ascent";
displayMapInfo(mapName);
/* */

/* useful variables for functions */
const searchForm = document.querySelector("#search-form");
const agentInput = document.querySelector("#agentSearch");
/* */

/* searchbox */
searchForm.addEventListener("submit", function (e) {
  agentName = agentInput.value;
  e.preventDefault();
  displayAgentInfo(agentName);
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    agentName = agentInput.value;
    e.preventDefault();
    displayAgentInfo(agentName);
  }
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

/*map icon buttons */
displayMapIcon("Ascent");
displayMapIcon("Split");
displayMapIcon("Fracture");
displayMapIcon("Bind");
displayMapIcon("Breeze");
displayMapIcon("Lotus");
displayMapIcon("Pearl");
displayMapIcon("Icebox");
displayMapIcon("Haven");
/* */

/* eventListeners for agent icon click func*/
AscentIcon.addEventListener("click", function (e) {
  mapName = "Ascent";
  e.preventDefault();
  displayMapInfo(mapName);
});

SplitIcon.addEventListener("click", function (e) {
  mapName = "Split";
  e.preventDefault();
  displayMapInfo(mapName);
});

FractureIcon.addEventListener("click", function (e) {
  mapName = "Fracture";
  e.preventDefault();
  displayMapInfo(mapName);
});

BindIcon.addEventListener("click", function (e) {
  mapName = "Bind";
  e.preventDefault();
  displayMapInfo(mapName);
});

BreezeIcon.addEventListener("click", function (e) {
  mapName = "Breeze";
  e.preventDefault();
  displayMapInfo(mapName);
});

LotusIcon.addEventListener("click", function (e) {
  mapName = "Lotus";
  e.preventDefault();
  displayMapInfo(mapName);
});

PearlIcon.addEventListener("click", function (e) {
  mapName = "Pearl";
  e.preventDefault();
  displayMapInfo(mapName);
});

IceboxIcon.addEventListener("click", function (e) {
  mapName = "Icebox";
  e.preventDefault();
  displayMapInfo(mapName);
});

HavenIcon.addEventListener("click", function (e) {
  mapName = "Haven";
  e.preventDefault();
  displayMapInfo(mapName);
});
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
