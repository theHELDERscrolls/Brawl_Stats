import "./home.css";
import { pageCleaner } from "../../utils/cleanPage";
import { navbarSocial } from "../../components/Navbar_social/navbarSocial";

export const Home = () => {
  const main = document.querySelector("main");
  pageCleaner(main);
  main.innerHTML = `
    <section id="hero">
      <video src="/assets/videos/BS_Banner.mp4" muted autoplay loop></video>
      <h2>Master the arena with your stats!</h2>  
      <h3>Track, compare, and improve your gameplay in every match.</h3>
      ${navbarSocial()}      
    </section>

    <section id="brawlers_info">
      <div class="home_container">
        <div class="section_info">
          <h2>Know all the brawlers</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate doloribus id quas nisi, in
            tenetur, dolore accusamus autem quam repellendus iste veritatis aliquid, quo nesciunt cum? Voluptatum,
            laborum
            perspiciatis.</p>
        </div>
        <video src="/assets/videos/BS_Banner.mp4" muted autoplay loop></video>
      </div>
    </section>

    <section id="players_info">
      <div class="home_container">
        <video src="/assets/videos/BS_Banner.mp4" muted autoplay loop></video>
        <div class="section_info">
          <h2>Know all the brawlers</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate doloribus id quas nisi, in
            tenetur, dolore accusamus autem quam repellendus iste veritatis aliquid, quo nesciunt cum? Voluptatum,
            laborum
            perspiciatis.</p>
        </div>
      </div>
    </section>`;
};
