//! declerations
let time = document.getElementById("time");
let city = document.querySelector(".city-in");
let temp = document.querySelector(".temp");
let icon = document.getElementById("icon");
//? logic
let now = new Date();
let arrayDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let arrayMonth = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JULY",
  "AUG",
  "SEPT",
  "OCT",
  "NOV",
  "DEC",
];
let day = arrayDay[now.getDay()];
let month = arrayMonth[now.getMonth()];
let year = now.getFullYear();
let date = now.getDate();
//^ condition
if (date < 10) {
  date = "0" + date;
}
function updateClock() {
  let hours = now.getHours();
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let ampm = "AM";

  if (hours > 12) {
    hours -= 12;
    ampm = "PM";
  }
  if (hours === 0) {
    hours = 12;
  }
  time.innerHTML = `${hours}:${minutes} ${ampm},  ${day}, ${date} / ${month} / ${year}`;
}
//! Update the clock every second
setInterval(updateClock, 1000);
//! Initial call to set the clock immediately
updateClock();


let fetchApi = async () => {
  let response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=8aa1a9f24202564101f538f97ebd905b"
  );
  let data = await response.json();

  console.log(data);
  let temperature = data.main.temp - 273;
  city.innerHTML = data.name + city.innerHTML;
  temp.innerHTML += temperature.toFixed(2);

  if (data.weather[0].description == "sun") {
    icon.classList.add("fa-sun");
  } else {
    icon.classList.add("fa-cloud");
  }
};
fetchApi();
