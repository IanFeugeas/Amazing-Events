import {
  filterUpcommingEvents,
  filterPastEvents,
  highestAttendance,
  lowestAttendance,
  largedCapacity,
  upcomingStatistics,
  pastStatistics,
} from "./module/functions.js";

// const table = document.getElementById("table");

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((res) => res.json())
  .then((data) => {
    const upcomingEvents = filterUpcommingEvents(data.events, data.currentDate);
    const pastEvents = filterPastEvents(data.events, data.currentDate);
    const highestPercentage = highestAttendance(pastEvents);
    const lowPercentage = lowestAttendance(pastEvents);
    const maxCapacity = largedCapacity(data.events);
    const upcomingEventStatistics = upcomingStatistics(upcomingEvents);
    const pastEventStatistics = pastStatistics(pastEvents);

    const $staticsEvents = document.getElementById("statisticTbody");
    $staticsEvents.innerHTML = `<tr>
        <td>"${highestPercentage.name}" with ${(
      (highestPercentage.assistance * 100) /
      highestPercentage.capacity
    ).toFixed(2)}%</td>
        <td>"${lowPercentage.name}" with ${(
      (lowPercentage.assistance * 100) /
      lowPercentage.capacity
    ).toFixed(2)}%</td>
        <td>"${maxCapacity.name}" with ${maxCapacity.capacity} capacity </td>
      </tr>`;
    const $upcomingContainer = document.getElementById("statisticUpcomming");
    const upcomingRows = upcomingEventStatistics[0]
      .map(
        (category, i) =>
          `<tr>
        <td>${category}</td>
        <td>$${upcomingEventStatistics[1][i]}</td>
        <td>${upcomingEventStatistics[2][i].toFixed(2)}%</td>
      </tr>`
      )
      .join("");
    $upcomingContainer.innerHTML = upcomingRows;
    console.log(upcomingRows);

    const $pastContainer = document.getElementById("statisticPastEv");
    const pastRows = pastEventStatistics[0]
      .map(
        (category, i) =>
          `<tr>
        <td>${category}</td>
        <td>$${pastEventStatistics[1][i]}</td>
        <td>${pastEventStatistics[2][i].toFixed(2)}%</td>
      </tr>`
      )
      .join("");
    $pastContainer.innerHTML = pastRows;
  })
  .catch((err) => {
    console.log(err);
    // table.innerHTML = `<p class="text-center"> Error </p>`;
  });
