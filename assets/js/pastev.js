const padrecards = document.getElementById("padrecards");
let infoCards = data.events;
let divCards = "";
let fechaActual = data.currentDate;

for (let infocard of infoCards) {
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
