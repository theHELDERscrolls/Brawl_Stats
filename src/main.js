import { header } from "./components/Header/header";
import { Home } from "./pages/Home/home";
import "./style.css";
import { linkPage } from "./utils/linkPage";

const init = () => {
  header();
  Home();
  linkPage("home_link", Home);
};

init();
