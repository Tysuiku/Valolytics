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

  //   const weaponSelector = document.querySelector("#weaponSelector");

  //   weaponSelector.addEventListener("change", function () {
  //     const selectedValue = weaponSelector.value;
  //     weaponName = selectedValue;
  //     console.log(selectedValue);
  //     console.log(weaponName);
  //     console.log(weapon);
  //     console.log(weapon.displayIcon);
  //   });
  const weaponSelector = document.querySelector("#weaponSelector");

  weaponSelector.addEventListener("change", (event) => {
    weaponName = event.target.value;
    // weapon.displayName = event.target.value;
    // document.querySelector("#weaponImg").src = weapon.displayIcon;
    // console.log(selectedValue);

    console.log(weaponName);
    console.log(weapon);
    console.log(weapon.displayIcon);
  });
}
