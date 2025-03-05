import { brawlerModel } from "../../Brawler_model/brawlerModel";
import "../sectionTemplate.css";

export const secTempA = (sectionId, title, text, videoSrc) => {
  return `
    <section id=${sectionId}>
        ${brawlerModel("16000010")}
        <div class="home_container">
            <div class="section_info">
                <h2>${title}</h2>
                <p>${text}</p>
            </div>
            <video src=${videoSrc} muted autoplay loop></video>
        </div>
    </section>`;
};
