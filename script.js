/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/*
 * Retrieve weather data from openweathermap
 * Use fetch()
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
const getWeatherData = (city) => {
  // Use template literals to create a url with input and an API key
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f19c01df95mshf319d290fa9edd7p13d044jsnec3c1513c633",
      "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
    },
  };

  return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};
/**
 * Retrieve city input and get the weather data
 * Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
  const city = document.getElementById("city-input").value;
  console.log(city);
  const data = await getWeatherData(city);
  showWeatherData(data);
};
/**
 * Show the weather data in HTML
 */
const showWeatherData = (weatherData) => {
  console.log(weatherData, "idris");
  console.log(weatherData.main.temp);
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText =
    weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.min_temp;
  document.getElementById("max-temp").innerText = weatherData.main.max_temp;
};
