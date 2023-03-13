import { allWeaponQueries } from "./weaponQueries";
import { selectorChange } from "./selectorClicks";

export function displayWeaponInfo(weaponName) {
  fetch(`https://valorant-api.com/v1/weapons`)
    .then((response) => response.json())
    .then((data) => {
      let weaponData = data;
      try {
        allWeaponQueries(weaponData, weaponName);
        selectorChange(weaponData, weaponName);
      } catch (error) {
        console.log("Weapon not found", error);
      }
    });
}
