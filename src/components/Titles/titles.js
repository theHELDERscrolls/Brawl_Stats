import "./titles.css";

export const createImageTitle = (text, srcImg) => {
  return `
    <div class="img_title">
        <h2>${text}<h2>
        <img src="${srcImg}" alt="${text} icon">
    </div>`;
};
