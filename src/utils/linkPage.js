export const linkPage = (id, page) => {
  const link = document.getElementById(id);
  link.addEventListener("click", () => {
    page();
    window.scrollTo(0, 0);
  });
};
