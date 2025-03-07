import { characterCard } from "../components/Brawler_card/brawlerCard";

export const createCardsByName = (array) => {
  return array
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    .map((e) => {
      return characterCard(
        e.portrait,
        e.name,
        e.description,
        e.rarityName.toLowerCase().replace(/\s+/g, "")
      );
    })
    .join("");
};

//RARITY FILTERS

export const getLegendary = (array) => {
  return array
    .filter((e) => e.rarityName.toLowerCase().trim() === "legendary")
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    .map((e) => {
      return characterCard(
        e.portrait,
        e.name,
        e.description,
        e.rarityName.toLowerCase().replace(/\s+/g, "")
      );
    })
    .join("");
};

export const getMythic = (array) => {
  return array
    .filter((e) => e.rarityName.toLowerCase().trim() === "mythic")
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    .map((e) => {
      return characterCard(
        e.portrait,
        e.name,
        e.description,
        e.rarityName.toLowerCase().replace(/\s+/g, "")
      );
    })
    .join("");
};
export const getEpic = (array) => {
  return array
    .filter((e) => e.rarityName.toLowerCase().trim() === "epic")
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    .map((e) => {
      return characterCard(
        e.portrait,
        e.name,
        e.description,
        e.rarityName.toLowerCase().replace(/\s+/g, "")
      );
    })
    .join("");
};
export const getSuperRare = (array) => {
  return array
    .filter((e) => e.rarityName.toLowerCase().trim().replace(/\s+/g, "") === "superrare")
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    .map((e) => {
      return characterCard(
        e.portrait,
        e.name,
        e.description,
        e.rarityName.toLowerCase().replace(/\s+/g, "")
      );
    })
    .join("");
};
export const getRareCommon = (array) => {
  return array
    .filter(
      (e) =>
        e.rarityName.toLowerCase().trim() === "rare" ||
        e.rarityName.toLowerCase().trim() === "common"
    )
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    .map((e) => {
      return characterCard(
        e.portrait,
        e.name,
        e.description,
        e.rarityName.toLowerCase().replace(/\s+/g, "")
      );
    })
    .join("");
};
