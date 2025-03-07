import { characterCard } from "../../components/Brawler_card/brawlerCard.js";
import { clickFilter } from "../../components/Filter/clickFilter.js";
import { pageCleaner } from "../../utils/cleanPage.js";
import { fetchBrawlersInfo } from "../../utils/getBrawlerInfo.js";
import "./brawlers.css";

let brawlerData = [];

export const Brawlers = async () => {
  const main = document.querySelector("main");
  pageCleaner(main);
  brawlerData = await fetchBrawlersInfo();

  console.log(brawlerData);

  /*NOTA: Tenemos que hacer un condicional y dependiendo del contenido del
  filter diseñar la web de una forma u otra. */
  main.innerHTML = `
  <section id="sort_by_name">
    ${createCards()}
  </section>
  `;
  // ${clickFilter()}
  // changeFilter();
};

const createCards = () => {
  // const editBrawler = brawlerData[89];
  // return characterCard(
  //   editBrawler.portrait,
  //   editBrawler.name,
  //   editBrawler.description,
  //   editBrawler.rarityName.toLowerCase().replace(/\s+/g, "")
  // );
  return brawlerData
    .map((brawler) => {
      return characterCard(
        brawler.portrait,
        brawler.name,
        brawler.description,
        brawler.rarityName.toLowerCase().replace(/\s+/g, "")
      );
    })
    .join("");
};

const changeFilter = () => {
  const sortBy = document.querySelector("#sort_by");
  sortBy.addEventListener("click", () => {
    if (sortBy.textContent === "Name") {
      sortBy.textContent = "Rarity";
    } else if (sortBy.textContent === "Rarity") {
      sortBy.textContent = "Class";
    } else if (sortBy.textContent === "Class") {
      sortBy.textContent = "Name";
    }
  });
};
