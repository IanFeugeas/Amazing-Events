export function createCard(e) {
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
        <p class="card-text">
          ${infocard.date}
        </p>
        <div class="divprice">
          <p class="textprice"><b>Price:</b> $ ${infocard.price}</p>
          <a id="detailsbutton" href="./details.html?id=${infocard._id}" class="btn btn-primary"><b> Go details</b></a>
        </div>
      </div>
    </div>`;
  }
  padrecards.innerHTML = divCards;
}

export function addDiv(array) {
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

export function checkboxCategory(event) {
  const checkeds = [
    ...document.querySelectorAll("input[type='checkbox']:checked"),
  ].map((check) => check.value);
  if (checkeds.length === 0) {
    return event;
  }
  return event.filter((filterCheck) => checkeds.includes(filterCheck.category));
}
