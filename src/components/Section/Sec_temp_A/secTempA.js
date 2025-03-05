import { brawlerModel } from "../../Brawler_model/brawlerModel";
import { createSprayIcon } from "../../Images/images";
import "../sectionTemplate.css";

export const secTempA = (sectionId, title, text, videoSrc) => {
  return `
    <section id=${sectionId}>
        ${brawlerModel("16000010")}
        ${createSprayIcon(
          "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9pUDZ2eFloNlN0VnRmclBOVlNYbS5wbmcifQ:supercell:PIhxFGHQQvwkbX6LNs50h5o-HJwhxvzXlrDwE6-qHcA?width=800"
        )}
        <div class="home_container">
            <div class="section_info">
                <h2>${title}</h2>
                <p>${text}</p>
            </div>
            <video src=${videoSrc} muted autoplay loop></video>
        </div>
    </section>`;
};
