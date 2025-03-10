export const characterDetailGenerator = (array) => {
  array.forEach((e) => {
    e.addEventListener("click", () => {
      console.log("Clicaste en:", e);
    });
  });
};
