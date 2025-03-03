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
            ${anchorDefault("players_link", "#players", "Players")}
        </li>
      </ul>
    </nav>`;
};
