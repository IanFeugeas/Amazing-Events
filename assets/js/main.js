const padrecards = document.getElementById("padrecards");
let infoCards = data.events;

const checks = document.getElementById("categories");
const category = infoCards.map((infoCards) => infoCards.category);
const oneCategory = new Set(category);
const arrayCategory = [...oneCategory];
let divChecks = "";

createCard(infoCards);
function createCard(e) {
  let divCards = "";
  for (let infocard of e) {
    divCards += `<div id="tarjetas" class="card">
  <div class="divimgcards"><img
    id="imgcard"
    src= ${infocard.image}
    class="card-img-top"
    alt=""
  /></div>
  <div id="bodycard" class="card-body">
    <h5 class="card-title"> ${infocard.name}</h5>
    <p class="card-text">
      ${infocard.description}
    </p>
    <div class="divprice">
      <p class="textprice"><b>Price:</b> $ ${infocard.price}</p>
      <a id="detailsbutton" href="./details.html" class="btn btn-primary" ><b> Go details</b></a>
    </div>
  </div>
</div>`;
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

const $searchInput = document.getElementById("searchInput");
$searchInput.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  let variableFalse = false;
  cards.forEach((card) => {
    const nombre = card.querySelector(".card-title").innerText.toLowerCase();
    if (nombre.includes(search)) {
      variableFalse == true;
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// createCards(events);

// let contain = Boolean(...events);
// if (!contain) {
//   tarjeta.innerHTML = `<div class="divalert">
//        <p>
//            The event you are trying to search for does not exist or is not
//         available{" "}
//       </p>{" "}
//         <svg
//          xmlns="http://www.w3.org/2000/svg"
//           width="16"
//           height="16"
//           fill="currentColor"
//        class="bi bi-exclamation-triangle"
//            viewBox="0 0 16 16"
//         >
//          <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
//            <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
//          </svg>{" "}
//        </div>`;
// } else {
//   createCards(events);
// }
