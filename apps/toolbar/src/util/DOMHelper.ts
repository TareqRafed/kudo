class DOMHelper {
  private elementCache: Map<string, HTMLElement>;
  private root: HTMLElement | null = null;

  constructor() {
    this.elementCache = new Map();
  }

  getRoot(): HTMLElement | null {
    return this.root;
  }

  getElementById(id: string): HTMLElement {
    if (this.elementCache.has(id)) {
      return this.elementCache.get(id)!;
    }

    const element = document.getElementById(id);
    if (!element) {
      throw new Error(`Element with ID "${id}" not found.`);
    }

    this.elementCache.set(id, element);
    return element;
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
