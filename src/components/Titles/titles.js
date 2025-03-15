import "./titles.css";

export const createImageTitle = (text, srcImg) => {
  return `
    <div class="img_title">
      <img src="${srcImg}" alt="${text} icon">
      <h2>${text}</h2>
    </div>`;
};
