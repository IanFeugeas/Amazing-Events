import { createDetailsCard } from "./module/functions.js";

const $cards = document.getElementById("details");

const params = new URLSearchParams(location.search);
const id = params.get("id");

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((res) => res.json())
  .then((data) => {
    createDetailsCard(
      data.events.find((card) => card._id == id),
      $cards
    );
  });
