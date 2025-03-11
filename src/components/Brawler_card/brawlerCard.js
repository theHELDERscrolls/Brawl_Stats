import "./brawlerCard.css";
import "./brawlerDetailsCard.css";

export const characterCard = (
  portrait,
  name,
  description,
  rarityName,
  brawlerId,
  model,
  firstStarPowerName,
  firstStarPowerImg,
  firstStarPowerDesc,
  secondStarPowerName,
  secondStarPowerImg,
  secondStarPowerDesc,
  firstGadgetName,
  firstGadgetImg,
  firstGadgetDesc,
  secondGadgetName,
  secondGadgetImg,
  secondGadgetDesc
) => {
  return `
  <div class="character_card ${rarityName}" data-id=${brawlerId}>
    <div class="character_portrait">
        <img src=${portrait} alt=${name} portrait>
        <p>${name}</p>
    </div>
    <p class="character_description">${description}</p>
  </div>
  
  <div class="detailed_card_overlay" data-id=${brawlerId} style="display: none;">
    <div class="detailed_card">  
      <img class="close_btn" src="/assets/icons/x.svg" alt="close button">
      <header>
        <h2>${name}</h2>
        <img class="model_img" src="${model}" alt="${name} model">
      </header>
      <section>
        <h3 class="power_name">NOMBRE DEL PODER</h3>
        <div class="power_icons">
          ${
            firstStarPowerName
              ? `<img src="${firstStarPowerImg}" alt="${firstStarPowerName}" class="ability-icon" data-name="${firstStarPowerName}" data-desc="${firstStarPowerDesc}">`
              : ""
          }
          ${
            secondStarPowerName
              ? `<img src="${secondStarPowerImg}" alt="${secondStarPowerName}" class="ability-icon" data-name="${secondStarPowerName}" data-desc="${secondStarPowerDesc}">`
              : ""
          }
          ${
            firstGadgetName
              ? `<img src="${firstGadgetImg}" alt="${firstGadgetName}" class="ability-icon" data-name="${firstGadgetName}" data-desc="${firstGadgetDesc}">`
              : ""
          }
          ${
            secondGadgetName
              ? `<img src="${secondGadgetImg}" alt="${secondGadgetName}" class="ability-icon" data-name="${secondGadgetName}" data-desc="${secondGadgetDesc}">`
              : ""
          }
        </div>
        <p class="power_desc">Aquí metería un lorem ipsum de esos, pero es que no puedo porque lo estoy metiendo por DOM entonces me toca inventar alguna cosa para rellenar espacio y simular que es algún tipo de texto.</p>
      </section>
    </div>
  </div>`;
};
