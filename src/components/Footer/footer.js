import { pageCleaner } from "../../utils/cleanPage";
import { anchorImage } from "../Anchors/anchorImage";
import { logo } from "../Logo/logo";
import "./footer.css";

export const Footer = () => {
  const footer = document.querySelector("footer");
  footer.innerHTML = `
  <section class="created_by">
    ${logo("/assets/images/BS_logo.png", "Brawl Stats logo", "Brawl Stats")}
    <p>Powered by <a href="https://github.com/theHELDERscrolls" target="_blank" rel="noopener noreferrer">@theHELDERscrolls</a> &copy; ${new Date().getFullYear()}</p>
    <div class="my_work">
        ${anchorImage(
          "my_work_anchor",
          "https://www.linkedin.com/in/heldermvr/",
          "my_work_icon",
          "/assets/icons/brand-linkedin.svg",
          "linkedIn icon"
        )}

        ${anchorImage(
          "my_work_anchor",
          "https://github.com/theHELDERscrolls",
          "my_work_icon",
          "/assets/icons/brand-github.svg",
          "linkedIn icon"
        )}
    </div>
  </section>
  
  <section class="thanks_to">
    <h3>Special Thanks</h3>
    <p>All game data is sourced from <a href="https://brawlapi.com/#/" target="_blank" rel="noopener noreferrer">BrawlAPI</a>, created by the awesome team at <a href="https://brawlify.com/" target="_blank" rel="noopener noreferrer">Brawlify</a>.</p>
  </section>`;
};
