import "./style.css";

import { Brawlers } from "./pages/Brawlers/brawlers";
import { header } from "./components/Header/header";
import { Home } from "./pages/Home/home";
import { linkPage } from "./utils/linkPage";
import { Maps } from "./pages/Maps/maps";

const init = () => {
  header();
  Home();
  linkPage("home_link", Home);
  linkPage("brawlers_link", Brawlers);
  linkPage("maps_link", Maps);
};

init();
