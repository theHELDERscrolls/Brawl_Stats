import { createImageTitle } from "../../components/Titles/titles";
import { pageCleaner } from "../../utils/cleanPage";
import { fetchMapsInfo } from "../../utils/getMapsInfo";
import "./maps.css";

export const Maps = async () => {
  const main = document.querySelector("main");
  pageCleaner(main);

  let enabledMaps = [];
  enabledMaps = await fetchMapsInfo();

  //todo => console.log(enabledMaps);

  /* Debemos de clasificar los mapas por modos de juego. Para ello vamos
  a usar le método reduce(). */
  enabledMaps = enabledMaps.reduce((acc, map) => {
    const formattedName = map.nameGameMode.toLowerCase().replace(/\s+/g, "");

    if (!acc[formattedName]) { // Si el Game Mode no existe...
      acc[formattedName] = []; // ... lo creamos
    }
    acc[formattedName].push(map); // añadimos el Game Mode

    return acc;
  }, {});

  //todo => console.log(enabledMaps);

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
  * "https://cdn.brawlify.com/game-modes/regular/${map.scIdGameMode}.png" */
};
