import { brawlerModel } from "../../Brawler_model/brawlerModel";
import "../sectionTemplate.css";

export const secTempB = (videoSrc, sectionId, title, text) => {
  return `
    <section id=${sectionId}>
        ${brawlerModel("16000006")}
        <div class="home_container">
            <video src=${videoSrc} muted autoplay loop></video>
            <div class="section_info">
                <h2>${title}</h2>
                <p>${text}</p>
            </div>
        </div>
        ${brawlerModel("16000012")}
    </section>`;
};
