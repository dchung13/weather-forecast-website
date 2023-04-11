var searchCityBtn = document.querySelector(".input-group-text");
var API_KEY = "b6adf15dc030ad73e699b782593eb736";
var currentWeatherOutput = document.querySelector(".current-weather");
var cityName;

function getForecast(lat, long) {
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${API_KEY}`

    fetch(requestUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data) {
            //generate the card for the current day forecast
            currentWeather.addClass("current-day");
            //creates the header for the current day forecast and attaches to the card
            var currentDayHead = $("<h2>").text(`${data.name} on ${dayjs().format("M D, YYYY")}`);
            currentWeather.append(currentDayHead);
            //create the img for the forecast
            var iconCode = data.weather[0].icon;
            var icon = $("<img>").attr("src", `https://openweathermap.org/img/w/${iconCode}.png`);
            currentWeatherOutput.append(icon);
            //create the areas for temperature, wind, and humidity
            var currentTemp = $("<p>").html(`Temp: {data.main.temp}&deg;F`);
            var currentWind = $("<p>").text(`Wind: ${data.wind.speed}mph`);
            var currentHumidity = $("<p>").text(`Humidity: ${data.main.humidity}%`);
            currentWeatherOutput.append(currentTemp, currentWind, currentHumidity);
        });  
}

function getCity(cityName) {
    var requestUrl = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

    fetch(requestUrl)
    .then(function(response){
        return response.json();
    });
}