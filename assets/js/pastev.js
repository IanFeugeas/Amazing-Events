import {
  addCheckbox,
  categoryFilter,
  filterSearch,
  createCards,
  condicionalError,
  filterPastEvents,
} from "./module/functions.js";

const $padreCards = document.getElementById("padreCards");
const $checks = document.getElementById("categories");
const $searchInput = document.getElementById("searchInput");

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((res) => res.json())
  .then((data) => {
    const currentDate = data.currentDate;

    const infoEvents = data.events;

    createCards(filterPastEvents(infoEvents, currentDate), $padreCards);

    const checksFilter = Array.from(
      new Set(
        infoEvents
          .filter((event) => event.date >= currentDate)
          .map((card) => card.category)
      )
    );

    addCheckbox(checksFilter, $checks);

    $checks.addEventListener("change", () => {
      let search = $searchInput.value.toLowerCase();
      let searchFilter = filterSearch(
        search,
        filterPastEvents(infoEvents, currentDate)
      );
      let filter = categoryFilter(searchFilter);
      console.log(filter);
      createCards(filter, $padreCards);
      filterPastEvents(filter, $padreCards);
      condicionalError(filter, $padreCards);
    });

    $searchInput.addEventListener("keyup", () => {
      let search = $searchInput.value.toLowerCase();
      let searchFilter = filterSearch(
        search,
        filterPastEvents(infoEvents, currentDate)
      );
      let filter = categoryFilter(searchFilter);
      createCards(filter, $padreCards);
      filterPastEvents(filter, $padreCards);
      condicionalError(filter, $padreCards);
    });

    $searchInput.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  });
