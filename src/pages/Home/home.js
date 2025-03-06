import "./home.css";
import { pageCleaner } from "../../utils/cleanPage";
import { navbarSocial } from "../../components/Navbar_social/navbarSocial";
import { secTempA } from "../../components/Section/Sec_temp_A/secTempA";
import { secTempB } from "../../components/Section/Sec_template_B/secTempB";
import { logo } from "../../components/Logo/logo";

export const Home = () => {
  const main = document.querySelector("main");
  pageCleaner(main);

  main.innerHTML = `
    <section id="hero">
      ${logo("/assets/images/BS_logo.png", "Brawl Stats logo", "Brawl Stats")}
      <video src="/assets/videos/BS_Banner.mp4" muted autoplay loop></video>
      <h2>Master the arena with your stats!</h2>  
      <h3>Track, compare, and improve your gameplay in every match.</h3>
      ${navbarSocial()}      
    </section>
    
    ${secTempA(
      "brawlers_info",
      "Know all the brawlers",
      "Explore all available brawlers and discover their abilities, stats, and unique traits. Each profile includes a detailed description and a strategic guide to help you master their playstyle and make the most of their potential in battle.",
      "/assets/videos/BS_Banner.mp4"
    )}
    
    ${secTempB(
      "/assets/videos/BS_Banner.mp4",
      "players_info",
      "Check your stats and compare",
      "Check your stats by entering your player code and compare them with other users. Analyze your performance, victories, and improvements in each match to keep progressing and become a better brawler."
    )}`;
};
