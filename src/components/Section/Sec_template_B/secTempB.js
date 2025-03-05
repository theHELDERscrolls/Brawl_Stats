import { brawlerModel } from "../../Brawler_model/brawlerModel";
import { createSprayIcon } from "../../Images/images";
import "../sectionTemplate.css";

export const secTempB = (videoSrc, sectionId, title, text) => {
  return `
    <section id=${sectionId}>
        ${brawlerModel("16000006")}
        ${createSprayIcon(
          "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9XQnFCc2VNdkhKTFFhQ3FGbkdqRi5wbmcifQ:supercell:-r6IowCi4sHKWKGxuazixqnKoW76D-a2d1dnMXRtWKc?width=800"
        )}
        <div class="home_container">
            <video src=${videoSrc} muted autoplay loop></video>
            <div class="section_info">
                <h2>${title}</h2>
                <p>${text}</p>
            </div>
        </div>
        ${brawlerModel("16000012")}
        ${createSprayIcon(
          "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9ZdWNQWEVLNUJIS3l0UHprWVFENi5wbmcifQ:supercell:jv55UBy6l3flxg46HbXvrXpEdQuxXmDROVi3syqC6eY?width=800"
        )}
    </section>`;
};
