function updateTime() {
  //San Francisco//
  let sfElement = document.querySelector("#san-francisco");
  let sfDateElement = sfElement.querySelector(".date");
  let sfTimeElement = sfElement.querySelector(".time");
  let sfTime = moment().tz("America/Los_Angeles");

  sfDateElement.innerHTML = sfTime.format("MMMM Do YYYY");
  sfTimeElement.innerHTML = sfTime.format("h:mm:ss [<small>]A[</small>]");

  //London//
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  //Johannesburg//
  let jElement = document.querySelector("#johannesburg");
  let jDateElement = jElement.querySelector(".date");
  let jTimeElement = jElement.querySelector(".time");
  let jTime = moment().tz("Africa/Johannesburg");

  jDateElement.innerHTML = jTime.format("MMMM Do YYYY");
  jTimeElement.innerHTML = jTime.format("h:mm:ss [<small>]A[</small>]");
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
  <div>
            <h2>${cityTimeZone}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small> ${cityTime.format("A")}</small></div>
        </div>
        <a href="index.html"><<</a>
  `;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
