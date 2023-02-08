const padrecards = document.getElementById("padrecards");
let infoCards = data.events;

let fechaActual = data.currentDate;
const checks = document.getElementById("categories");
const category = infoCards.map((infoCards) => infoCards.category);
const oneCategory = new Set(category);
const arrayCategory = [...oneCategory];
let divChecks = "";

createCard(infoCards);
function createCard(e) {
  let divCards = "";
  for (let infocard of e) {
    if (`${infocard.date}` < fechaActual) {
      divCards += `<div id="tarjetas" class="card">
    <img
      id="imgcard"
      src= ${infocard.image}
      class="card-img-top"
      alt=""
    />
    <div id="bodycard" class="card-body">
      <h5 class="card-title"> ${infocard.name}</h5>
      
      <p class="card-text">
        ${infocard.description}
      </p>
      <p class="card-text">
        ${infocard.date}
      </p>
      <div class="divprice">
        <p><b>Price:</b> $ ${infocard.price}</p>
        <a href="./details.html" class="btn btn-primary">Go details</a>
      </div>
    </div>
  </div>`;
    }
  }
  padrecards.innerHTML = divCards;
}
addDiv(arrayCategory);

function addDiv() {
  for (let categoryChecks of arrayCategory) {
    divChecks += `<div>
  <input
    type="checkbox"
    id="${categoryChecks}"
    value="${categoryChecks}"
  />
  <label for="${categoryChecks}">${categoryChecks}</label>
</div>`;
  }
  checks.innerHTML = divChecks;
}

checks.addEventListener("change", () => {
  let aux = checkboxCategory(infoCards);
  createCard(aux);
});

function checkboxCategory(event) {
  const checkeds = [
    ...document.querySelectorAll("input[type='checkbox']:checked"),
  ].map((check) => check.value);
  if (checkeds.length === 0) {
    return event;
  }
  return event.filter((filterCheck) => checkeds.includes(filterCheck.category));
}
