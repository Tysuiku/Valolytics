export function allMapQueries(mapData, mapName) {
  let map = null;
  for (let i = 0; i < mapData.data.length; i++) {
    if (mapData.data[i].displayName.toLowerCase() === mapName.toLowerCase()) {
      map = mapData.data[i];
      break;
    }
  }

  if (map) {
    document.querySelector("#mapOverV").src = map.displayIcon;
    document.querySelector("#mapName").innerText = map.displayName;
  }
}

export function allMapIcons(mapData, mapName) {
  let map = null;
  for (let i = 0; i < mapData.data.length; i++) {
    if (mapData.data[i].displayName.toLowerCase() === mapName.toLowerCase()) {
      map = mapData.data[i];
      break;
    }
  }

  if (map) {
    document.querySelector(`#${map.displayName}Icon1`).src = map.listViewIcon;
  }
}
