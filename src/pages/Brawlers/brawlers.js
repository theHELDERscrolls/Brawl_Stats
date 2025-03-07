import { pageCleaner } from "../../utils/cleanPage.js";
import { fetchBrawlersInfo } from "../../utils/getBrawlerInfo.js";
// import "./brawlers.css";

let brawlerData = [];

export const Brawlers = async () => {
  const main = document.querySelector("main");
  pageCleaner(main);
  brawlerData = await fetchBrawlersInfo();

  console.log(brawlerData);

  main.innerHTML = `<h1>Vamoh a probah cozah loco</h1>`;
};
