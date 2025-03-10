import { CategoryArticle } from "../../components/Brawler_category/brawlerCategory.js";
import { clickFilter } from "../../components/Filter/clickFilter.js";
import { characterDetailGenerator } from "../../utils/characterDetails.js";
import { pageCleaner } from "../../utils/cleanPage.js";
import {
  createCardsByName,
  getArtillery,
  getAssassins,
  getController,
  getDamageDealer,
  getEpic,
  getLegendary,
  getMarksman,
  getMythic,
  getRareCommon,
  getSuperRare,
  getSupport,
  getTanks,
  getUnknown,
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
      ${CategoryArticle(
        "rarity",
        "",
        "",
        "legendary",
        "Legendary",
        getLegendary(brawlerData)
      )}
      
      ${CategoryArticle(
        "rarity",
        "",
        "",
        "mythic",
        "Mythic",
        getMythic(brawlerData)
      )}
      
      ${CategoryArticle("rarity", "", "", "epic", "Epic", getEpic(brawlerData))}
      
      ${CategoryArticle(
        "rarity",
        "",
        "",
        "superrare",
        "Super Rare",
        getSuperRare(brawlerData)
      )}
      
      ${CategoryArticle(
        "rarity",
        "",
        "",
        "rare",
        "Rare",
        getRareCommon(brawlerData)
      )}`;
      break;

    case "Class":
      section.classList.add("by_class");

      /* Check if there is any unknown brawler class on the array */
      const isUnknown = getUnknown(brawlerData);

      /* If there is any unknown, create the artcile. Of there is any
      unknown, dont create nothing. */
      const unknownArticle =
        isUnknown.length > 0
          ? CategoryArticle(
              "class",
              "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9DWDRCcTJoUUVuR3JXd3F4aG9ySy5wbmcifQ:supercell:CiGKIj-yn0rPsAENIFv5GP7mYM8ZkVuvwpzw9XBiaOQ?width=800",
              "unknown icon",
              "unknown",
              "UNKNOWN",
              isUnknown
            )
          : "";

      section.innerHTML = `
      ${CategoryArticle(
        "class",
        "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC90a3U4WmpBNkF0eWJzSHNhUGI1dC5wbmcifQ:supercell:g-g7RKJOsHSXGUiTzXTAP7TVg2y8zicuolB7GtUDna0?width=800",
        "tank icon",
        "tanks",
        "TANKS",
        getTanks(brawlerData)
      )}
      
      ${CategoryArticle(
        "class",
        "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9xNjhWM1lNV0VpekE5cGZyVEdTUy5wbmcifQ:supercell:TcPhAmo5yGhDllKqYstSkcKmA-SjwZoNXBmH1KyTjbU?width=800",
        "assasin icon",
        "assasins",
        "ASSASSINS",
        getAssassins(brawlerData)
      )}
      
      ${CategoryArticle(
        "class",
        "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC85WWhFRkpjVHF4bmdxTXRueVNISi5wbmcifQ:supercell:FpvcMDEoG04Vz0d8Vm816ocy1KvYNHT0uEwexwmEpNY?width=800",
        "support icon",
        "support",
        "SUPPORT",
        getSupport(brawlerData)
      )}
      
      ${CategoryArticle(
        "class",
        "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9XampwWWYzb29LNTNBd1ZvNGZ1Ui5wbmcifQ:supercell:rrJeMoDxVeV3gXbZD4oZZG1pTmaVaTTkOAqaAoz-BjU?width=800",
        "controller icon",
        "controller",
        "CONTROLLERS",
        getController(brawlerData)
      )}
      
      ${CategoryArticle(
        "class",
        "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9nTFZUVjllS0sxOTlnd0U3UkpNWS5wbmcifQ:supercell:R66omPFYCTO6RsrEDHafw5qJVvr_biyTYjhSA04Mt9M?width=800",
        "damagedealer icon",
        "damagedealer",
        "DAMAGE DEALERS",
        getDamageDealer(brawlerData)
      )}
      
      ${CategoryArticle(
        "class",
        "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC84NE52REQzMlZVMmFRdHRZaUhnQy5wbmcifQ:supercell:SxJpmNXzU-0ljSC502SRql4RgpbS2gTLHdeQzPcpHOg?width=800",
        "marksman icon",
        "marksman",
        "MARKSMEN",
        getMarksman(brawlerData)
      )}
      
      ${CategoryArticle(
        "class",
        "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC83bmlocWVyUEJOVHhjQW80dnhaVy5wbmcifQ:supercell:-wKn55U7klvxDCkCcCA1yH6D4z4FboGpysysyp7P6Hk?width=800",
        "artillery icon",
        "artillery",
        "ARTILLERY",
        getArtillery(brawlerData)
      )}
      
      ${unknownArticle}`;
      break;
  }

  /* Character details generator */
  const characterCards = document.querySelectorAll(".character_card");
  characterDetailGenerator(characterCards);
};
