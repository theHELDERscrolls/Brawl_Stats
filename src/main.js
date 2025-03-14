import "./style.css";

import { Brawlers } from "./pages/Brawlers/brawlers";
import { header } from "./components/Header/header";
import { Home } from "./pages/Home/home";
import { linkPage } from "./utils/linkPage";
import { Players } from "./pages/Players/players";

const init = () => {
  header();
  Home();
  linkPage("home_link", Home);
  linkPage("brawlers_link", Brawlers);
  linkPage("players_link", Players);
};

init();
