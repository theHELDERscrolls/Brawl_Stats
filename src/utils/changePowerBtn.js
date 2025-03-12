export const changePowerBtn = (arg) => {
  // Get actual cards elements
  const powerName = arg.querySelector(".power_name");
  const powerDesc = arg.querySelector(".power_desc");
  const abilityIcons = arg.querySelectorAll(".ability_icon");

  abilityIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      abilityIcons.forEach((icon) => {
        icon.classList.remove("select_power");
      });
      icon.classList.add("select_power");
      powerName.textContent = icon.dataset.name;
      powerDesc.textContent = icon.dataset.desc;
    });
  });
};
