export const characterCard = (portrait, name, description) => {
  return `
  <div class="character_card">
    <div class="character_portrait">
        <img src=${portrait} alt=${name} portrait>
        <p class"character_name">${name}</p>
    </div>
    <p class="character_description">${description}</p>
  </div>`;
};
