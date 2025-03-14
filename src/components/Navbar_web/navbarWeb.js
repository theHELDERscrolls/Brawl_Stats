import "./navbarWeb.css";
import { anchorDefault } from "../Anchors/anchorDefault";

export const navbarWeb = () => {
  return `
    <nav id="navbar_web">
      <ul>
        <li>
            ${anchorDefault("home_link", "#home", "Home")}
        </li>
        <li>
            ${anchorDefault("brawlers_link", "#brawlers", "Brawlers")}
        </li>
        <li>
            ${anchorDefault("maps_link", "#maps", "Maps")}
        </li>
      </ul>
    </nav>`;
};
