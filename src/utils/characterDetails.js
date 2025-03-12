export const characterDetailGenerator = (array) => {
  array.forEach((e) => {
    e.addEventListener("click", () => {
      /*Comprobar si funciona el evento */
      console.log("Este elemento tiene la id: ", e.dataset.id);

      // Almacenamos el id en una variable.
      const id = e.dataset.id;

      // Cambiamos el display de la tarjeta de detalles de ese personaje.
      const detailCard = document.querySelector(
        `.detailed_card_overlay[data-id="${id}"]`
      );

      /* Cambiar le display de "detailed_card_overlay" de ese mismo
      elemento para comprobar los parámetros */
      detailCard.style.display = "flex";
    });
  });
};
