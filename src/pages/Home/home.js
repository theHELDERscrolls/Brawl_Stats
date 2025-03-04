import "./home.css";
import pageCleaner from "../../utils/pageCleaner";

export const Home = () => {
  const main = document.querySelector("main");
  pageCleaner(main);
  main.innerHTML = `
    <section id="hero">
      <video src="/assets/videos/BS_Banner.mp4" muted autoplay loop></video>
      <h2>Master the arena with your stats!</h2>  
      <h3>Track, compare, and improve your gameplay in every match.</h3>      
    </section>`;
};
