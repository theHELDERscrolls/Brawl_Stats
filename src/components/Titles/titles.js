import "./titles.css";

export const createImageTitle = (text, bgColor, srcImg) => {
  return `
    <div class="img_title" style="background-color: ${bgColor}">
      <img src="${srcImg}" alt="${text} icon">
      <h2>${text}</h2>
    </div>`;
};
