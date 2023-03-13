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

    document.querySelector("#fireRate").innerText = `Firerate: ${JSON.stringify(
      weapon.weaponStats.fireRate
    )} bps`;
    document.querySelector(
      "#magazineSize"
    ).innerText = `Magsize: ${JSON.stringify(
      weapon.weaponStats.magazineSize
    )} bullets`;
    document.querySelector(
      "#runSpeedMultiplier"
    ).innerText = `Runspeedmultiplier: ${JSON.stringify(
      weapon.weaponStats.runSpeedMultiplier
    )}x`;
    document.querySelector(
      "#equipTimeSeconds"
    ).innerText = `Equiptime: ${JSON.stringify(
      weapon.weaponStats.equipTimeSeconds
    )} seconds`;
    document.querySelector(
      "#reloadTimeSeconds"
    ).innerText = `Reloadtime: ${JSON.stringify(
      weapon.weaponStats.reloadTimeSeconds
    )} seconds`;
    document.querySelector(
      "#firstBulletAccuracy"
    ).innerText = `First bullet acc: ${JSON.stringify(
      weapon.weaponStats.firstBulletAccuracy
    )}`;
  }
}
