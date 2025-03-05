import "./header.css";
import { logo } from "../Logo/logo";
import { navbarWeb } from "../Navbar_web/navbarWeb";
import { anchorDefault } from "../Anchors/anchorDefault";

export const header = () => {
  const header = document.querySelector("header");
  header.innerHTML = `
  ${logo("/assets/images/BS_logo.png", "Brawl Stats logo", "Braw Stats")}
  ${navbarWeb()}
  ${anchorDefault(
    "suggest_btn",
    "mailto:manuhelderrui@gmail.com?subject=Website suggest",
    "Suggest"
  )}
`;
};