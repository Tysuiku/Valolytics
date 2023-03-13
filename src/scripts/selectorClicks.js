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

  weaponSelector.addEventListener("change", function () {
    const selectedValue = weaponSelector.value;

    console.log(selectedValue);
    console.log(weapon.displayName);
    if (selectedValue === weapon.displayName) {
      weapon.displayName = selectedValue;
      document.querySelector("#weaponImg").src = weapon.displayIcon;
    }
  });
}
