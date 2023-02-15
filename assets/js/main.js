import {
  addCheckbox,
  categoryFilter,
  filterSearch,
  createCards,
  condicionalError,
} from "./module/functions.js";

const $padreCards = document.getElementById("padreCards");
const $checks = document.getElementById("categories");
const $searchInput = document.getElementById("searchInput");

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((res) => res.json())
  .then((data) => {
    const infoEvents = data.events;
    createCards(infoEvents, $padreCards);

    const checksFilter = Array.from(
      new Set(infoEvents.map((card) => card.category))
    );

    addCheckbox(checksFilter, $checks);
    $checks.addEventListener("change", () => {
      let search = $searchInput.value.toLowerCase();
      let searchFilter = filterSearch(search, infoEvents);
      let filter = categoryFilter(searchFilter);
      createCards(filter, $padreCards);
      condicionalError(filter, $padreCards);
    });

    $searchInput.addEventListener("keyup", () => {
      let search = $searchInput.value.toLowerCase();
      let searchFilter = filterSearch(search, infoEvents);
      let filter = categoryFilter(searchFilter);
      createCards(filter, $padreCards);
      condicionalError(filter, $padreCards);
    });
    $searchInput.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  })
  .catch((error) => console.log(error));
