import { pageCleaner } from "../../utils/cleanPage";
import { fetchStatsInfo } from "../../utils/getStats";
import "./stats.css";

export const Stats = async (mapId) => {
  const main = document.querySelector("main");
  pageCleaner(main);

  let mapData = [];
  mapData = await fetchStatsInfo(mapId);

  //todo=> console.log(mapData);

  main.innerHTML = `
  <button>
    <img src="/assets/icons/chevron-left.svg" alt="back icon">
    <p>Maps</p>
  </button>
  <h3>${mapData.name}</h3>
  <img src="${mapData.image}" alt="map image">
  `;
};
