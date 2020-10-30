import { Taino } from "./core/taino.js";
import { routes } from "./router.js";

const head = {
  title: "My Amazing Taino App",
};

const taino = new Taino({ head, routes });

document.addEventListener("DOMContentLoaded", taino.injectPage());
