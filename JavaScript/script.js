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
}
updateTime();
setInterval(updateTime, 1000);
