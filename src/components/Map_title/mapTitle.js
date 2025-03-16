import "./mapTitle.css";

export const createMap = (id, name, image) => {
  const div = document.createElement("div");
  div.dataset.idMap = id;
  div.classList.add("map");
  div.innerHTML = `
      <h3>${name}</h3>
      <img src="${image}" alt="${name} map">
    `;

  /* Necesitamos que devuelva un node, no un string. Así podremos
  usarlo como mapsContainer.appendChild(mapElement); en maps.js */
  return div;
};
