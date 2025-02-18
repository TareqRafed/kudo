export const getCssSelector = (el: Element) => {
  const path = [];
  let parent: ParentNode | null;
  while ((parent = el.parentNode)) {
    path.unshift(`${el.tagName}:nth-child(${[].indexOf.call(parent.children, el) + 1})`);
    el = parent;
  }
  return `${path.join(' > ')}`.toLowerCase();
};
