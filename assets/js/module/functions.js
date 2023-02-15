export function printCards(events) {
  return `<div id="tarjetas" class="card">
    <div class="divimgcards"><img
      id="imgcard"
      src= ${events.image}
      class="card-img-top"
      alt=""
    /></div>
    <div id="bodycard" class="card-body">
      <h5 class="card-title"> ${events.name}</h5>
      <p class="card-text">
        ${events.description}
      </p>
      <div class="divprice">
        <p class="textprice"><b>Price:</b> $ ${events.price}</p>
        <a id="detailsbutton" href="./details.html?id=${events._id}" class="btn btn-primary" ><b> Go details</b></a>
      </div>
    </div>
  </div>`;
}

export function createCards(events, cards) {
  let divCards = "";
  for (let event of events) {
    divCards += printCards(event);
  }
  cards.innerHTML = divCards;
}

export function filterPastEvents(events, date) {
  let pastEvents = [];
  for (let event of events) {
    if (date > event.date) {
      pastEvents.push(event);
    }
  }
  return pastEvents;
}

export function filterUpcommingEvents(events, date) {
  let upComingEvents = [];
  for (let event of events) {
    if (date < event.date) {
      upComingEvents.push(event);
    }
  }
  return upComingEvents;
}

export function addCheckbox(category, checks) {
  let divChecks = "";
  for (let categories of category) {
    divChecks += createCheckbox(categories);
  }
  checks.innerHTML = divChecks;
}

export function createCheckbox(check) {
  return `<div>
      <input
      type="checkbox"
      id="${check}"
      value="${check}"
      />
      <label for="${check}">${check}</label>
      </div>`;
}

export function categoryFilter(event) {
  let filterCheckbox = [
    ...document.querySelectorAll('input[type="checkbox"]:checked'),
  ].map((element) => element.value);
  if (filterCheckbox.length === 0) {
    return event;
  }
  return event.filter((filters) => filterCheckbox.includes(filters.category));
}

export function filterSearch(search, e) {
  let arrayFilter = e.filter((searchFilter) =>
    searchFilter.name.toLowerCase().includes(search)
  );
  return arrayFilter;
}

export function errorSearch() {
  return `<div class="diverror"></div>`;
}

export function condicionalError(card, error) {
  if (card.length === 0) {
    error.innerHTML = errorSearch();
  } else {
    return printCards(card, error);
  }
}

export function createDetailsCard(events, cards) {
  cards.innerHTML = detailsCard(events);
}

export function detailsCard(event) {
  return `<div id="tarjetadetails" class="card">
    <img
    id="imgdetails"
    src="${event.image}"
    class="card-img-top"
    alt=""
    />
    </div>
    <div id="tarjetadetails2" class="card">
        <div class="card-body">
          <h5 class="card-title">${event.name}</h5>
          <p class="card-text">
            "${event.description}"
          </p>
          <p class="card-text"><b>Date:</b>${event.date}</p>
          <p class="card-text"><b>Category:</b>${event.category}</p>
          <p class="card-text"><b>Place:</b>${event.place}</p>
          <p class="card-text"><b>Capacity:</b>${event.capacity}</p>
          <p class="card-text"> ${asistOrEstimate(event)}</p>
          <p class="card-text"><b>Price:</b> $ ${event.price}</p>
        </div>`;
}

export function asistOrEstimate(contain) {
  let see = "";
  let assistance = "<b>Assistance:</b>";
  let estimate = "<b>Estimate:</b>";
  if (contain.assistance) {
    see = assistance + " " + contain.assistance;
  } else if (contain.estimate) {
    see = estimate + " " + contain.estimate;
  }
  return see;
}

//Stats

export function highestAttendance(events) {
  let highestPercentage = 0;
  let highestEvent;
  for (let event of events) {
    let percentageOfAttendance = (event.assistance * 100) / event.capacity;
    if (highestPercentage === 0 || percentageOfAttendance > highestPercentage) {
      highestPercentage = percentageOfAttendance;
      highestEvent = event;
    }
  }
  return highestEvent;
}

export function lowestAttendance(events) {
  let lowest = 0;
  let lowestEvent;
  for (let event of events) {
    let percentageOfAttendance = (event.assistance * 100) / event.capacity;
    if (lowest === 0 || percentageOfAttendance < lowest) {
      lowest = percentageOfAttendance;
      lowestEvent = event;
    }
  }
  return lowestEvent;
}

export function largedCapacity(events) {
  let larger = 0;
  let largerCapacity;
  for (let event of events) {
    if (larger === 0 || event.capacity > larger) {
      larger = event.capacity;
      largerCapacity = event;
    }
  }
  return largerCapacity;
}

export function upcomingStatistics(events) {
  let upcomingStatistics = [];
  let upcomingCategories = Array.from(
    new Set(events.map((event) => event.category))
  );

  let upcomingRevenues = [];
  for (let category of upcomingCategories) {
    let content = 0;
    for (let event of events) {
      if (event.category === category) {
        content += event.estimate * event.price;
      }
    }
    upcomingRevenues.push(content);
  }

  let upcomingAttendance = [];
  for (let category of upcomingCategories) {
    let estimateAttendance = 0;
    let capacity = 0;
    for (let event of events) {
      if (event.category === category) {
        estimateAttendance += event.estimate;
        capacity += event.capacity;
      }
    }
    upcomingAttendance.push((estimateAttendance * 100) / capacity);
  }

  upcomingStatistics.push(
    upcomingCategories,
    upcomingRevenues,
    upcomingAttendance
  );
  return upcomingStatistics;
}

export function pastStatistics(events) {
  let pastStatistics = [];
  let pastCategories = Array.from(
    new Set(events.map((event) => event.category))
  );

  let pastRevenues = [];
  for (let category of pastCategories) {
    let revenueCont = 0;
    for (let event of events) {
      if (event.category === category) {
        revenueCont += event.assistance * event.price;
      }
    }
    pastRevenues.push(revenueCont);
  }

  let pastPercentageOfAttendance = [];
  for (let category of pastCategories) {
    let assistance = 0;
    let capacity = 0;
    for (let event of events) {
      if (event.category === category) {
        assistance += event.assistance;
        capacity += event.capacity;
      }
    }
    pastPercentageOfAttendance.push((assistance * 100) / capacity);
  }

  pastStatistics.push(pastCategories, pastRevenues, pastPercentageOfAttendance);
  return pastStatistics;
}
