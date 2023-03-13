/*gets basic weapon info */
export function allWeaponQueries(weaponData, weaponName) {
  let weapon = null;
  for (let i = 0; i < weaponData.data.length; i++) {
    if (
      weaponData.data[i].displayName.toLowerCase() === weaponName.toLowerCase()
    ) {
      weapon = weaponData.data[i];
      break;
    }
  }

  if (weapon) {
    document.querySelector("#weaponImg").src = weapon.displayIcon;
  }
}
