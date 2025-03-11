import { characterCard } from "../components/Brawler_card/brawlerCard";

export const createCardsByName = (array) => {
  return array
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    .map((e) => {
      return characterCard(
        e.portrait,
        e.name,
        e.description,
        e.rarityName.toLowerCase().replace(/\s+/g, ""),
        e.id,
        e.model,
        e.first_StarPower || "",
        e.first_StarPowerImage || "",
        e.first_StarPowerDescription || "",
        e.second_StarPower || "",
        e.second_StarPowerImage || "",
        e.second_StarPowerDescription || "",
        e.first_Gadget || "",
        e.first_GadgetImage || "",
        e.first_GadgetDescription || "",
        e.second_Gadget || "",
        e.second_GadgetImage || "",
        e.second_GadgetDescription || ""
      );
    })
    .join("");
};

const filterByProperty = (array, property, value) => {
  return array
    .filter((e) => e[property]?.toLowerCase().trim() === value)
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    .map((e) =>
      characterCard(
        e.portrait,
        e.name,
        e.description,
        e.rarityName.toLowerCase().replace(/\s+/g, ""),
        e.id,
        e.model,
        e.first_StarPower || "",
        e.first_StarPowerImage || "",
        e.first_StarPowerDescription || "",
        e.second_StarPower || "",
        e.second_StarPowerImage || "",
        e.second_StarPowerDescription || "",
        e.first_Gadget || "",
        e.first_GadgetImage || "",
        e.first_GadgetDescription || "",
        e.second_Gadget || "",
        e.second_GadgetImage || "",
        e.second_GadgetDescription || ""
      )
    )
    .join("");
};

export const getLegendary = (array) =>
  filterByProperty(array, "rarityName", "legendary");
export const getMythic = (array) =>
  filterByProperty(array, "rarityName", "mythic");
export const getEpic = (array) => filterByProperty(array, "rarityName", "epic");
export const getSuperRare = (array) =>
  filterByProperty(array, "rarityName", "super rare");
export const getRareCommon = (array) =>
  array
    .filter(
      (e) =>
        e.rarityName.toLowerCase().trim() === "rare" ||
        e.rarityName.toLowerCase().trim() === "common"
    )
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    .map((e) =>
      characterCard(
        e.portrait,
        e.name,
        e.description,
        e.rarityName.toLowerCase().replace(/\s+/g, ""),
        e.id,
        e.model,
        e.first_StarPower || "",
        e.first_StarPowerImage || "",
        e.first_StarPowerDescription || "",
        e.second_StarPower || "",
        e.second_StarPowerImage || "",
        e.second_StarPowerDescription || "",
        e.first_Gadget || "",
        e.first_GadgetImage || "",
        e.first_GadgetDescription || "",
        e.second_Gadget || "",
        e.second_GadgetImage || "",
        e.second_GadgetDescription || ""
      )
    )
    .join("");

export const getTanks = (array) => filterByProperty(array, "class", "tank");
export const getAssassins = (array) =>
  filterByProperty(array, "class", "assassin");
export const getSupport = (array) =>
  filterByProperty(array, "class", "support");
export const getController = (array) =>
  filterByProperty(array, "class", "controller");
export const getDamageDealer = (array) =>
  filterByProperty(array, "class", "damage dealer");
export const getMarksman = (array) =>
  filterByProperty(array, "class", "marksman");
export const getArtillery = (array) =>
  filterByProperty(array, "class", "artillery");
export const getUnknown = (array) =>
  filterByProperty(array, "class", "unknown");
