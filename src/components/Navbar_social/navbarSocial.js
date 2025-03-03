import "./navbarSocial.css";
import { anchorImage } from "../Anchors/anchorImage";

export const navbarSocial = () => {
  return `
  <nav id="navbar_social">
    <ul>
        <li>
            ${anchorImage(
              "social_link",
              "https://supercell.com/en/games/brawlstars/",
              "social_img",
              "https://img.icons8.com/?size=100&id=120061&format=png&color=121212",
              "Supercell logo"
            )}
        </li>
        <li>
            ${anchorImage(
              "social_link display_flex_center",
              "https://apps.apple.com/us/app/brawl-stars/id1229016807",
              "social_img",
              "https://img.icons8.com/?size=100&id=30659&format=png&color=121212",
              "Apple logo"
            )}
        </li>
        <li>
            ${anchorImage(
              "social_link display_flex_center",
              "https://play.google.com/store/apps/details?id=com.supercell.brawlstars&hl=en",
              "social_img",
              "https://img.icons8.com/?size=100&id=22980&format=png&color=121212",
              "Apple logo"
            )}
        </li>
    </ul>
  </nav>`;
};
