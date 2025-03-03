import "./home.css";
import pageCleaner from "../../utils/pageCleaner";

export const Home = () => {
    const main = document.querySelector("main");
    pageCleaner(main);
    main.innerHTML = `
    <section id="hero">
      <video src="/assets/videos/BS_Banner.mp4" muted autoplay loop></video>
      <h1>Dominate the Arena, Know Your Brawlers</h1>
      <h2>Discover stats, game modes, and secrets to improve in every match.</h2>
    </section>`;
};
