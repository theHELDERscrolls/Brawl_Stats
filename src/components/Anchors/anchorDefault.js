import "./anchorDefault.css"

export const anchorDefault = (id, href, text, target = "", rel = "") => {
  const targetAttr = target ? `target="${target}"` : "";
  const reltAttr = target ? `rel="${rel}"` : "";

  return `<a id=${id} href=${href} ${targetAttr} ${reltAttr}>${text}</a>`;
};
