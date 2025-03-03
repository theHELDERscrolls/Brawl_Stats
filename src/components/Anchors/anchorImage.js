import "./anchorImage.css";

export const anchorImage = (aClass, aHref, imgClass, srcImg, altImg) => {
  return `
  <a class="${aClass}" href="${aHref}" target="_blank" rel="noopener noreferrer">
    <img class="${imgClass}" src="${srcImg}" alt="${altImg}">
  </a>`;
};
