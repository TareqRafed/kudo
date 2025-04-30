export const getCssSelector = (el: Element): string => {
  const path: string[] = [];
  let elm = el;

  while (elm.parentElement) {
    const parent = elm.parentElement;
    const index = Array.from(parent.children).indexOf(elm) + 1;
    path.unshift(`${elm.tagName}:nth-child(${index})`);
    elm = parent;
  }

  return path.join(' > ').toLowerCase();
};
