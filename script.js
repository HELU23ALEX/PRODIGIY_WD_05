const apiKey = "13841522a75e6b4bf92c28664b3d1fa0"; 

document.getElementById("fetchWeatherBtn").addEventListener("click", () => {
  const location = document.getElementById("locationInput").value;
  fetchWeatherData(location);
});

function fetchWeatherData(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Location not found");
      }
      return response.json();
    })
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      document.getElementById("weatherInfo").innerText = error.message;
    });
}

function displayWeather(data) {
  const weatherInfo = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Condition: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
  document.getElementById("weatherInfo").innerHTML = weatherInfo;
}
