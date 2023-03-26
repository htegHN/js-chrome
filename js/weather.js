const API_KEY = "33d42adc3f8a127376f9ad82d69bc3ff";

function onGeoOK(position) {
  const lat = position.coords.latitude; //위치의 위도
  const lon = position.coords.longitude; //위치의 경도
  console.log("You live in", lat, lon);
  //url을 백틱으로 작성
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
