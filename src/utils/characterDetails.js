import { changePowerBtn } from "./changePowerBtn";

export const characterDetailGenerator = (array) => {
  array.forEach((e) => {
    e.addEventListener("click", () => {
      // Get id
      const id = e.dataset.id;
      const detailCard = document.querySelector(
        `.detailed_card_overlay[data-id="${id}"]`
      );

      detailCard.style.display = "flex";

      //Power and gadgets buttons
      changePowerBtn(detailCard);

      document.body.style.overflow = "hidden";

      document.querySelector("#ppal_header").style.zIndex = 0;

      document
        .querySelectorAll(".rarity_divider, .class_divider")
        .forEach((divider) => {
          divider.style.zIndex = -2;
        });

      /* Para solucionar los problemas del index de los artículos, necesitamos
      cambiar el de todos los demás articles MENOS EL DEL ARTICLE EN EL QUE ESTAMOS
      (para que a detail card no se vaya al fondo, si no queda todo igual). */
      const parentArticle = detailCard.closest(".article_container");
      document.querySelectorAll(".article_container").forEach((article) => {
        if (article !== parentArticle) {
          article.style.zIndex = -5;
        }
      });

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
