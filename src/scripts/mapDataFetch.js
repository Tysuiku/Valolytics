import { allMapQueries } from "./mapQueries";
import { allMapIcons } from "./mapQueries";

export function displayMapInfo(mapName) {
  fetch(`https://valorant-api.com/v1/maps/`)
    .then((response) => response.json())
    .then((data) => {
      let mapData = data;
      try {
        allMapQueries(mapData, mapName);
      } catch (error) {
        console.log("Map not found", error);
      }
    });
}

export function displayMapIcon(mapName) {
  fetch(`https://valorant-api.com/v1/maps/`)
    .then((response) => response.json())
    .then((data) => {
      let mapData = data;
      try {
        allMapIcons(mapData, mapName);
      } catch (error) {
        console.log("Map not found", error);
      }
    });
}
