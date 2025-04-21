class DOMHelper {
  private elementCache: Map<string, HTMLElement>;
  private root: HTMLElement | null = null;

  constructor() {
    this.elementCache = new Map();
  }

  getRoot() {
    if (!this.root) throw new Error('[DOMHelper]: Root is not initialized');
    return this.root;
  }

  // Create a new element and optionally append it to a parent
  createElement(
    tagName: string,
    options?: { id?: string; className?: string; parent?: HTMLElement; root?: boolean },
  ): HTMLElement {
    const element = document.createElement(tagName);
    if (options?.root) {
      this.root = element;
    }
    if (options?.id) {
      element.id = options.id;
      this.elementCache.set(options.id, element); // Cache new elements with IDs
    }
    if (options?.className) {
      element.className = options.className;
    }
    if (options?.parent) {
      options.parent.prepend(element);
    }
    return element;
  }
}

export const domHelper = new DOMHelper();
