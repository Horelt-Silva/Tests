import { router } from "./router/index.routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.esm";
import "popper.js"
import "./sass/main.scss";
import { Card } from './Components/card_component'
// const init = () => {
//   router(window.location.hash);

//   window.addEventListener("hashchange", () => {
//     router(window.location.hash);
//   });
// };

// window.addEventListener("load", init);

const card = new Card()
console.log(card.render())
document.querySelector("#prueba").appendChild(card.render())
