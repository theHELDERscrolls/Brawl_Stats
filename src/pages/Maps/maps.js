import { createImageTitle } from "../../components/Titles/titles";
import { createMap } from "../../components/Map_title/mapTitle";
import { fetchMapsInfo } from "../../utils/getMapsInfo";
import { pageCleaner } from "../../utils/cleanPage";
import { Stats } from "../Stats/stats";
import "./maps.css";

export const Maps = async () => {
  const main = document.querySelector("main");
  pageCleaner(main);
  window.scrollTo(0, 0);

  let enabledMaps = [];
  enabledMaps = await fetchMapsInfo();

  /* Debemos de clasificar los mapas por modos de juego. Para ello vamos
  a usar le método reduce(). */
  enabledMaps = enabledMaps.reduce((acc, map) => {
    const formattedName = map.nameGameMode.toLowerCase().replace(/\s+/g, "");

    if (!acc[formattedName]) {
      // Si el Game Mode no existe...
      acc[formattedName] = []; // ... lo creamos
    }
    acc[formattedName].push(map); // añadimos el Game Mode

    return acc;
  }, {});

  /* Objetct.entries() => Lo usamos para recorrer objetos, tanto sus claves (keys)
  como sus valores (values), devolviendo un array de arrays donde cada elemento es
  un par [clave, valor].
  
  En nuestro caso, el valor va a devolver:

    {
      bounty: [ {mapa1}, {mapa2}, ... ],
      gemgrab: [ {mapa3}, {mapa4}, ... ],
      showdown: [ {mapa5}, {mapa6}, ... ]
    } 
      
  Nos econtramos con el siguiente problema: si queremos usar el nombre del array como
  nombre del título del section (usando el componente createImageTitle()) este está
  previamente formateado a .toLowerCase().replace(/\s+/g, "").
  
  ? Solución:
  Como cada objeto (gameMode: [ {mapa1}, {mapa2}, ... ]) siempre va a tener como mínimo
  un elemento (el de la posición 0), usaremos el map.nameGameMode para definir el título
  del componente (ya que este no está formateado) y map.scIdGameMode para buscar el icono
  mediante la API a través de
  * "https://cdn.brawlify.com/game-modes/regular/${maps[0].scIdGameMode}.png" */

  Object.entries(enabledMaps).forEach(([gameMode, maps]) => {
    // Creamos un section por cada modo de juego.
    const section = document.createElement("section");
    section.classList.add("game_mode_section");

    // Rescatamos el primer elemento del array para el título y el icono.
    const gameModeTitle = maps[0].nameGameMode;
    const gameModeBg = maps[0].bgColorGameMode;
    const iconGameMode = `https://cdn.brawlify.com/game-modes/regular/${maps[0].scIdGameMode}.png`;

    // Creamos el elemento haciendo uso del componente.
    const titleSection = createImageTitle(
      gameModeTitle,
      gameModeBg,
      iconGameMode
    );
    section.innerHTML = titleSection;

    // Obtenemos cada mapa y lo añadimos a su section correspondiente.
    const mapsContainer = document.createElement("div");
    mapsContainer.classList.add("maps_container");

    maps.forEach((map) => {
      const mapElement = createMap(map.id, map.name, map.image);
      mapsContainer.appendChild(mapElement);

      //! ACUÍ añadimos un eventListener que tenga la función de sacar las estadísticas de cada map
      // Recuerda que tenemos que rescatar el dataset.idMap (data-idmap) y pasarlo al fetch
      mapElement.addEventListener("click", () => {
        Stats(map.id);
      });
    });

    // Lo añadimos al main.
    section.appendChild(mapsContainer);
    main.appendChild(section);
  });
};
