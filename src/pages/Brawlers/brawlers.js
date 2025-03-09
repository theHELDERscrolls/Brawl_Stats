import { createDivider } from "../../components/Divider/divider.js";
import { clickFilter } from "../../components/Filter/clickFilter.js";
import { pageCleaner } from "../../utils/cleanPage.js";
import {
  createCardsByName,
  getEpic,
  getLegendary,
  getMythic,
  getRareCommon,
  getSuperRare,
} from "../../utils/filterCardsBy.js";
import { fetchBrawlersInfo } from "../../utils/getBrawlerInfo.js";
import "./brawlers.css";

let brawlerData = [];

export const Brawlers = async () => {
  const main = document.querySelector("main");
  pageCleaner(main);
  brawlerData = await fetchBrawlersInfo();

  console.log(brawlerData);

  main.innerHTML = `
    ${clickFilter()}
    <section id="sort_by_section" class="by_name"></section>
  `;

  const sectionToChange = document.querySelector("#sort_by_section");
  const sortByFilter = document.querySelector("#sort_by");

  updateUI(sortByFilter.textContent, sectionToChange);

  sortByFilter.addEventListener("click", () => {
    if (sortByFilter.textContent === "Name") {
      sortByFilter.textContent = "Rarity";
    } else if (sortByFilter.textContent === "Rarity") {
      sortByFilter.textContent = "Class";
    } else if (sortByFilter.textContent === "Class") {
      sortByFilter.textContent = "Name";
    }

    updateUI(sortByFilter.textContent, sectionToChange);
  });
};

const updateUI = (filter, section) => {
  section.classList.remove("by_name", "by_rarity", "by_class");

  switch (filter) {
    case "Name":
      section.classList.add("by_name");
      section.innerHTML = `${createCardsByName(brawlerData)}`;
      break;
    case "Rarity":
      section.classList.add("by_rarity");
      section.innerHTML = `
      <article>
        ${createDivider("rarity", "", "", "legendary", "Legendary")}
        <div class="article_container">
          ${getLegendary(brawlerData)}
        </div>
      </article>

      <article>
        ${createDivider("rarity", "", "", "mythic", "Mythic")}
        <div class="article_container">
          ${getMythic(brawlerData)}
        </div>
      </article>
      
      <article>
        ${createDivider("rarity", "", "", "epic", "Epic")}
        <div class="article_container">
          ${getEpic(brawlerData)}
        </div>
      </article>
      
      <article>
        ${createDivider("rarity", "", "", "superrare", "Super Rare")}
        <div class="article_container">
          ${getSuperRare(brawlerData)}
        </div>
      </article>
      
      <article>
        ${createDivider("rarity", "", "", "rare", "Rare")}
        <div class="article_container">
          ${getRareCommon(brawlerData)}
        </div>
      </article>`;
      break;
    case "Class":
      section.classList.add("by_class");
      section.innerHTML = ``;
      break;
  }
};

/*      sectionToChange.innerHTML=`
      <article>
        <h2 href="#tanks">TANKS</h2>
        <div class="article_container"></div>
      </article>

      <article>
        <h2 href="#assassins">ASSASSINS</h2>
        <div class="article_container"></div>
      </article>
      
      <article>
        <h2 href="#support">SUPPORT</h2>
        <div class="article_container"></div>
      </article>
      
      <article>
        <h2 href="#ontrollers">CONTROLLERS</h2>
        <div class="article_container"></div>
      </article>
      
      <article>
        <h2 href="#damage_dealer">DAMAGE DEALERS</h2>
        <div class="article_container"></div>
      </article>
      
      <article>
        <h2 href="#marksmen">MARKSMEN</h2>
        <div class="article_container"></div>
      </article>
      
      <article>
        <h2 href="#artillery">ARTILLERY</h2>
        <div class="article_container"></div>
      </article>
      
      <article>
        <h2 href="#unknown">UNKNOWN</h2>
        <div class="article_container"></div>
      </article>`; */
