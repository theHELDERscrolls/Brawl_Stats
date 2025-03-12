export const characterDetailGenerator = (array) => {
  array.forEach((e) => {
    e.addEventListener("click", () => {
      document.body.style.overflow = "hidden";

      document.querySelector("#ppal_header").style.zIndex = -1;

      document
        .querySelectorAll(".rarity_divider, .class_divider")
        .forEach((divider) => {
          divider.style.zIndex = -2;
        });

      document.querySelectorAll(".article_container").forEach((article) => {
        article.style.zIndex = -5;
      });

      const id = e.dataset.id;
      const detailCard = document.querySelector(
        `.detailed_card_overlay[data-id="${id}"]`
      );
      detailCard.style.display = "flex";

      const closeBtn = detailCard.querySelector(".close_btn");

      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          detailCard.style.display = "none";

          document.body.style.overflow = "auto";

          document.querySelector("#ppal_header").style.zIndex = 5;

          document
            .querySelectorAll(".rarity_divider, .class_divider")
            .forEach((divider) => {
              divider.style.zIndex = 0;
            });

          document.querySelectorAll(".article_container").forEach((article) => {
            article.style.zIndex = 0;
          });
        });
      }
    });
  });
};
