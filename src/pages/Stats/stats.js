import { createMap } from "../../components/Map_title/mapTitle";
import { fetchBrawlersInfo } from "../../utils/getBrawlerInfo";
import { fetchStatsInfo } from "../../utils/getStats";
import { Maps } from "../Maps/maps";
import { pageCleaner } from "../../utils/cleanPage";
import "./stats.css";

export const Stats = async (mapId) => {
  const main = document.querySelector("main");
  pageCleaner(main);
  window.scrollTo(0, 0);

  const mapData = await fetchStatsInfo(mapId);
  const brawlersData = await fetchBrawlersInfo();

  const mapElement = createMap(mapData.id, mapData.name, mapData.image);

  main.innerHTML = `
    <button class="back_btn">
      <img src="/assets/icons/chevron-left.svg" alt="back icon">
      <p>Maps</p>
    </button>
    <p class="explain">The statistics displayed below are based on the <span>SOLO</span> mode, excluding team data.</p>
    <section class="stats_table">
      <article class="stats_headers">
        <h4>Brawler</h4>
        <h4>Win Rate</h4>
        <h4>Use Rate</h4>
      </article>
    </section>
  `;

  const statsTable = document.querySelector(".stats_table");
  main.insertBefore(mapElement, statsTable);

  const backBtn = document.querySelector(".back_btn");
  backBtn.addEventListener("click", () => {
    pageCleaner(main);
    Maps();
  });

  mapData.stats
    .sort((a, b) => b.useRate - a.useRate)
    .forEach((stat) => {
      const brawler = brawlersData.find((b) => b.id === stat.brawler);
      const rarityClass = brawler
        ? brawler.rarityName.replace(/\s+/g, "").toLowerCase()
        : "";

      const brawlerRow = document.createElement("article");
      brawlerRow.classList.add("brawler_row");

      const brawlerImgContainer = document.createElement("div");
      const brawlerImg = document.createElement("img");
      brawlerImg.src = `https://cdn.brawlify.com/brawlers/borders/${stat.brawler}.png`;
      brawlerImg.alt = `Brawler frame`;
      brawlerImg.classList.add("brawler_frame");
      brawlerImgContainer.appendChild(brawlerImg);

      const winRate = document.createElement("p");
      winRate.textContent = `${stat.winRate}%`;

      const useRate = document.createElement("p");
      useRate.textContent = `${stat.useRate}%`;

      if (rarityClass) {
        brawlerImgContainer.classList.add(rarityClass);
      }

      brawlerRow.appendChild(brawlerImgContainer);
      brawlerRow.appendChild(winRate);
      brawlerRow.appendChild(useRate);

      statsTable.appendChild(brawlerRow);
    });
};
