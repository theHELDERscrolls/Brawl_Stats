import "../sectionTemplate.css";

export const secTempB = (videoSrc, sectionId, title, text) => {
  return `
    <section id=${sectionId}>
        <div class="home_container">
            <video src=${videoSrc} muted autoplay loop></video>
            <div class="section_info">
                <h2>${title}</h2>
                <p>${text}</p>
            </div>
        </div>
    </section>`;
};
