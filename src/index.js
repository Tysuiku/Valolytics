import { displayAgentInfo } from "./scripts/agentDataFetch.js";
import { displayAgentIcon } from "./scripts/agentDataFetch.js";

const search = document.querySelector("#search");
const agentInput = document.querySelector("#agentSearch");
const agentPortrait = document.querySelector("#agentBox");
const agentRole = document.querySelector("#agentRoleBox");
const agentAbility = document.querySelector("#agentAbilityBox");
let agentName = "Jett";
displayAgentInfo(agentName);

search.addEventListener("click", function (e) {
  agentName = agentInput.value;
  e.preventDefault();
  displayAgentInfo(agentName);
});

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
displayAgentIcon("KAY/O");
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

const astraIcon = document.querySelector("#AstraIcon1");
const breachIcon = document.querySelector("#BreachIcon1");
const brimstoneIcon = document.querySelector("#BrimstoneIcon1");
const chamberIcon = document.querySelector("#ChamberIcon1");
const cypherIcon = document.querySelector("#CypherIcon1");
const fadeIcon = document.querySelector("#FadeIcon1");
const gekkoIcon = document.querySelector("#GekkoIcon1");
const harborIcon = document.querySelector("#HarborIcon1");
const jettIcon = document.querySelector("#JettIcon1");
// const kayoIcon = document.querySelector("KAY/OIcon1");
const killjoyIcon = document.querySelector("#KilljoyIcon1");
const neonIcon = document.querySelector("#NeonIcon1");
const omenIcon = document.querySelector("#OmenIcon1");
const phoenixIcon = document.querySelector("#PhoenixIcon1");
const razeIcon = document.querySelector("#RazeIcon1");
const reynaIcon = document.querySelector("#ReynaIcon1");
const sageIcon = document.querySelector("#SageIcon1");
const skyeIcon = document.querySelector("#SkyeIcon1");
const sovaIcon = document.querySelector("#SovaIcon1");
const viperIcon = document.querySelector("#ViperIcon1");
const yoruIcon = document.querySelector("#YoruIcon1");

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

// kayoIcon.addEventListener("click", function (e) {
//   agentName = "KAY/O";
//   e.preventDefault();
//   displayAgentInfo(agentName);
// });

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
  agentName = "Jett";
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
