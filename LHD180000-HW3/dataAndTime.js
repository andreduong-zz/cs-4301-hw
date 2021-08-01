window.addEventListener("load", function insertAndStartUpdatingDateTime() {
  let timeString = this.document.createElement("time");

  timeString.id = "dttime"; // this keep the time updated

  timeString.innerText = giveDateTimeString(); // call function to fetch current time

  let body = document.querySelector("body");

  body.insertBefore(timeString, body.childNodes[0]); // insert timeString at the beginning of body

  // function is called after every second to update time
  this.setInterval(function updateTime() {
    document.querySelector("#dttime").innerText = giveDateTimeString();
  }, 1000);
});

function giveDateTimeString() {
  let date = new Date();

  return (
    "Local date and time: " +
    date.toLocaleDateString() +
    " " +
    date.toLocaleTimeString()
  );
}
