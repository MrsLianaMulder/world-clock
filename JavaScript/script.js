function updateTime() {
  //San Francisco//
  let sfElement = document.querySelector("#san-francisco");
  let sfDateElement = sfElement.querySelector(".date");
  let sfTimeElement = sfElement.querySelector(".time");
  let sfTime = moment().tz("America/Los_Angeles");

  sfDateElement.innerHTML = sfTime.format("MMMM Do YYYY");
  sfTimeElement.innerHTML = sfTime.format("h:mm:ss [<small>]A[</small>]");

  //Boston//
  let bostonElement = document.querySelector("#boston");
  let bostonDateElement = bostonElement.querySelector(".date");
  let bostonTimeElement = bostonElement.querySelector(".time");
  let bostonTime = moment().tz("America/new_york");

  bostonDateElement.innerHTML = bostonTime.format("MMMM Do YYYY");
  bostonTimeElement.innerHTML = bostonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
