// import IndexPage from "./src/pages/mod.js";

export const routes = {
  // this route will be loaded when the user needs it
  "/": () => import("./src/mod/mod.js"), // the () => import() is a function that returns the import
  "/about": () => import("./src/about.js"),
};
