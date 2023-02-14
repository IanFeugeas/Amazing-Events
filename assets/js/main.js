import { createCard, addDiv, checkboxCategory } from "./module/funciones.js";

const $padrecards = document.getElementById("padrecards");
const $checks = document.getElementById("categories");
const $searchInput = document.getElementById("searchInput");

fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(data => data.json());


function
// let infoCards = data.events;
const category = infoCards.map((infoCards) => infoCards.category);
const oneCategory = new Set(category);
const arrayCategory = [...oneCategory];
let divChecks = "";

createCard(infoCards);

addDiv(arrayCategory);

checks.addEventListener("change", () => {
  let aux = checkboxCategory(infoCards);
  createCard(aux);
});

$searchInput.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  let variableFalse = true;
  cards.forEach((card) => {
    const nombre = card.querySelector(".card-title").innerText.toLowerCase();

    if (nombre.includes(search)) {
      card.style.display = "block";
      variableFalse = false;
    } else {
      card.style.display = "none";
    }
  });
  if (variableFalse) {
    padrecards.innerHTML = `<div class="diverror"><a class="ancorerror" href="./UpEvent.html">Return</a></div>`;
  }
});
