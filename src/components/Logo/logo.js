import "./logo.css";

export const logo = (img_src, img_alt, h1_text) => {
  return `
    <div id=logo>
      <img src=${img_src} alt=${img_alt}>
      <h1>${h1_text}</h1>
    </div>`;
};
