const $cards = document.getElementById("details");
const queryString = location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
const findDate = data.events.find((card) => card._id == id);

function asistOrEstimate(item) {
  let see = "";
  if (item.assistance) {
    see = item.assistance;
  } else if (item.estimate) {
    see = item.estimate;
  }
  return see;
}

$cards.innerHTML = `<div id="tarjetadetails" class="card">
<img
  id="imgdetails"
  src="${findDate.image}"
  class="card-img-top"
  alt=""
/>
</div>
<div id="tarjetadetails2" class="card">
    <div class="card-body">
      <h5 class="card-title">${findDate.name}</h5>
      <p class="card-text">
        "${findDate.description}"
      </p>
      <p class="card-text"><b>Date:</b>${findDate.date}</p>
      <p class="card-text"><b>Category:</b>${findDate.category}</p>
      <p class="card-text"><b>Place:</b>${findDate.place}</p>
      <p class="card-text"><b>Capacity:</b>${findDate.capacity}</p>
      <p class="card-text"><b>Assistance/Estimate:</b> ${asistOrEstimate(
        findDate
      )}</p>
      <p class="card-text"><b>Price:</b> $ ${findDate.price}</p>
    </div>`;
