import "./brawlerCard.css"

export const characterCard = (portrait, name, description, rarityName) => {
  return `
  <div class="character_card ${rarityName}">
    <div class="character_portrait">
        <img src=${portrait} alt=${name} portrait>
        <p>${name}</p>
    </div>
    <p class="character_description">${description}</p>
  </div>`;
};
