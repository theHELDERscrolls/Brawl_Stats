import { pageCleaner } from "../../utils/cleanPage";
import { fetchStatsInfo } from "../../utils/getStats";
import "./stats.css";

export const Stats = async (mapId) => {
  const main = document.querySelector("main");
  pageCleaner(main);

  let stats = [];
  stats = await fetchStatsInfo(mapId);

  console.log(stats);
  
};
