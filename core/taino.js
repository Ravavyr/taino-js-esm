import { parseComponent } from "./utils/parse-component.js";
// import { loadStyles } from "./utils/load-styles.js";

export class Taino {
  #options = {};

  constructor(options = {}) {
    this.#options = {
      appEl: "#taino-app",
      ...options,
    };

    window.onpopstate = () => {
      this.injectPage();
    };
  }

  getOptions() {
    return this.#options;
  }

  getPath() {
    return window.location.pathname;
  }

  getCurrentPage(route) {
    return this.#options.routes[route ?? this.getPath()];
  }

  updateTitle() {
    const title = this.#options.head.title;
    if (title) {
      document.title = title;
    }
  }

  setupLocalLinks() {
    const links = document.querySelectorAll("#taino-app a");
    for (const link of links) {
      const url = new URL(link);
      if (url.host === window.location.host) {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          window.history.pushState({}, url.pathname, url.pathname);
          this.injectPage();
        });
      }
    }
  }

  // LIFECYCLE
  // load page -> update title -> inject template -> setup links

  async injectPage(route) {
    // `PageData` should be a function
    const PageData = this.getCurrentPage(route);
    const page = await parseComponent(PageData);

    this.updateTitle();

    document.querySelector(this.#options.appEl).innerHTML = page.template;

    this.setupLocalLinks();
  }
}
