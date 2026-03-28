import "./style.css";
import { createLandingPage } from "./app.js";

const mountNode = document.querySelector("#app");

if (mountNode) {
  createLandingPage({ mountNode });
}
