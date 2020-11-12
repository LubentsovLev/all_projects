let pushWE = document.querySelector(".pushWE");
let deleteWE = document.querySelector(".deleteWE");
let WE_1 = document.querySelector(".WE_1");
let WE_2 = document.querySelector(".WE_2");
let WE_3 = document.querySelector(".WE_3");
let WE_4 = document.querySelector(".WE_4");

fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=katmandu&appid=e2508968410a26fe900e6e63e3c9bde1"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    WE_1.innerHTML = data.name;
    WE_2.innerHTML = Math.round(data.main.temp - 273) + "&deg;";
    WE_3.innerHTML = data.weather[0].description;
    WE_4.innerHTML = `<img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'/>`;
  });

let showWE = () => {};
let removeWE = () => {};

// pushWE.onclick = showWE;
// deleteWE.onclick = removeWE;
