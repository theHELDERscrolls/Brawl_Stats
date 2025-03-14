import { pageCleaner } from "../../utils/cleanPage";
import "./maps.css";

export const Maps = () => {
  const main = document.querySelector("main");
  pageCleaner(main);

  main.innerHTML = `<p>Booof, no veas la nueva web bro</p>`;
};
