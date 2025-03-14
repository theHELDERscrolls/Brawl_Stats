import { pageCleaner } from "../../utils/cleanPage";
import { fetchMapsInfo } from "../../utils/getMapsInfo";
import "./maps.css";

export const Maps = async () => {
  const main = document.querySelector("main");
  pageCleaner(main);

  let classifiedMaps = [];
  classifiedMaps = await fetchMapsInfo();

  //! Cuando terminemos la estructura vamos a meterla en una función a parte.
  /* Necesitamos clasificar los mapas según estén o no habilitados. */
  classifiedMaps = classifiedMaps.reduce(
    (acc, actualMap) => {
      if (actualMap.isDisabled) {
        acc.disabled.push(actualMap);
      } else {
        acc.enabled.push(actualMap);
      }

      return acc;
    },
    { enabled: [], disabled: [] }
  );

  console.log(classifiedMaps); // Comprobamos que todo se filtró bien.s
  //! -----------------------------------------------------------------------

  main.innerHTML = `
  <section class="enabled_maps">
    <h2>Enabled Maps</h2>
  </section>
  <section class="disabled_maps">
    <h2>Disabled Maps</h2>
  </section>`;
};
