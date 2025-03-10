import "./rarity_divider.css";
import "./class_divider.css"

export const CreateDivider = (classType, imgSrc, imgAlt, h2Href, h2Content) => {
  const imgSrcAttr =
    imgSrc && imgAlt ? `<img src="${imgSrc}" alt="${imgAlt}"/>` : "";
  return `
  <div class="${classType}_divider">
    ${imgSrcAttr}
    <a href="#${h2Href}">${h2Content}</a>
    <div></div>
  </div>`;
};
