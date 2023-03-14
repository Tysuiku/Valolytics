import { displayWeaponInfo } from "./weaponDataFetch";

export function selectorChange(weaponData, weaponName) {
  let weapon = null;
  for (let i = 0; i < weaponData.data.length; i++) {
    if (
      weaponData.data[i].displayName.toLowerCase() === weaponName.toLowerCase()
    ) {
      weapon = weaponData.data[i];
      break;
    }
  }

  const weaponSelector = document.querySelector("#weaponSelector");

  weaponSelector.addEventListener("change", (event) => {
    weaponName = event.target.value;
    displayWeaponInfo(weaponName);
  });
}
