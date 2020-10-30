// import { Page } from "/core/page.js";
// import { loadStyles } from "/core/utils/load-styles.js";

export default function IndexPage() {
  const template = `
    <h1>Hello, world!</h1>
    <p>How are you?</p>
    <a href="/about">About us</a>
  `;

  return {
    template,
    css: ["/src/pages/index/mod.css"],
  };
}
