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

//RARITY FILTERS ---------------------------------

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
    .filter(
      (e) =>
        e.rarityName.toLowerCase().trim().replace(/\s+/g, "") === "superrare"
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

//CLASS FILTERS ---------------------------------

export const getTanks = (array) => {
  return array
    .filter((e) => e.class.toLowerCase().trim() === "tank")
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

export const getAssassins = (array) => {
  return array
    .filter((e) => e.class.toLowerCase().trim() === "assassin")
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

export const getSupport = (array) => {
  return array
    .filter((e) => e.class.toLowerCase().trim() === "support")
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

export const getController = (array) => {
  return array
    .filter((e) => e.class.toLowerCase().trim() === "controller")
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

export const getDamageDealer = (array) => {
  return array
    .filter((e) => e.class.toLowerCase().trim() === "damage dealer")
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

export const getMarksman = (array) => {
  return array
    .filter((e) => e.class.toLowerCase().trim() === "marksman")
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

export const getArtillery = (array) => {
  return array
    .filter((e) => e.class.toLowerCase().trim() === "artillery")
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

export const getUnknown = (array) => {
  return array
    .filter((e) => e.class.toLowerCase().trim() === "unknown")
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
