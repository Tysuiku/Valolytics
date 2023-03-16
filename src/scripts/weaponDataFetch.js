import { allWeaponQueries } from "./weaponQueries";

let weaponData = null;
const weaponSelector = document.querySelector("#weaponSelector");

fetch(`https://valorant-api.com/v1/weapons`)
  .then((response) => response.json())
  .then((data) => {
    weaponData = data;
    weaponSelector.addEventListener("change", (event) => {
      const weaponName = event.target.value;
      displayWeaponInfo(weaponName);
    });
    const defaultWeaponName = "Vandal";
    displayWeaponInfo(defaultWeaponName);
  })
  .catch((error) => console.error(error));

export function displayWeaponInfo(weaponName) {
  if (!weaponData) {
    // console.log("Weapon data not yet loaded.");
    return;
  }

  try {
    allWeaponQueries(weaponData, weaponName);
  } catch (error) {
    console.log("Weapon not found", error);
  }
}
