import { CreateDivider } from "../Divider/divider";

export const CategoryArticle = (
  divClass,
  imgDiv,
  altDiv,
  hrefDiv,
  divText,
  content
) => {
  return `
  <article>
    ${CreateDivider(divClass, imgDiv, altDiv, hrefDiv, divText)}
    <div class="article_container">
        ${content}
    </div>
  </article>`;
};
