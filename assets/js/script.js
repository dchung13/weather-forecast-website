var API_KEY = "b6adf15dc030ad73e699b782593eb736";
var cityName = document.querySelector(".city-text").value;
var currentDay = dayjs();

 function getCurrentForecast(lat, long) {
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${API_KEY}`

    fetch(requestUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data) {
            var currentWeather = $("#current-weather");
            //generate the card for the current day forecast
            currentWeather.addClass("current-day");
            //creates the header for the current day forecast and attaches to the card
            var currentDayHead = $("<h2>").text(`${data.name} on ${currentDay.format("M/D/YYYY")}`);
            currentWeather.append(currentDayHead);
            //create the img for the forecast
            var iconCode = data.weather[0].icon;
            var icon = $("<img>").attr("src", `https://openweathermap.org/img/w/${iconCode}.png`);
            currentWeather.append(icon);
            //create the areas for temperature, wind, and humidity
            var currentTemp = $("<p>").html(`Temp: ${data.main.temp}&deg;F`);
            var currentWind = $("<p>").text(`Wind: ${data.wind.speed}mph`);
            var currentHumidity = $("<p>").text(`Humidity: ${data.main.humidity}%`);
            currentWeather.append(currentTemp, currentWind, currentHumidity);
        });
}

function getFutureForecast(lat, long) {
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${API_KEY}`

    fetch(requestUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data) {
                var futureWeatherForecast = $("#weather-forecast-1");
                var futureDay = currentDay.add(1, "day");

                var futureDayHead = $("<h3>").text(`${futureDay.format("M/D/YYYY")}`);
                futureWeatherForecast.append(futureDayHead);
                
                var iconCode = data.weather[1].icon;
                var icon = $("<img>").attr("src", `https://openweathermap.org/img/w/${iconCode}.png`);
                futureWeatherForecast.append(icon);
                
                var currentTemp = $("<p>").html(`Temp: ${data.main.temp}&deg;F`);
                var currentWind = $("<p>").text(`Wind: ${data.wind.speed}mph`);
                var currentHumidity = $("<p>").text(`Humidity: ${data.main.humidity}%`);
                futureWeatherForecast.append(currentTemp, currentWind, currentHumidity);
            
        })
        .then(function(response){
            var futureWeatherForecast = $("#weather-forecast-2");
            var futureDay = currentDay.add(2, "day");

            var futureDayHead = $("<h3>").text(`${futureDay.format("M/D/YYYY")}`);
            futureWeatherForecast.append(futureDayHead);
            
            var iconCode = data.weather[2].icon;
            var icon = $("<img>").attr("src", `https://openweathermap.org/img/w/${iconCode}.png`);
            futureWeatherForecast.append(icon);
            
            var currentTemp = $("<p>").html(`Temp: ${data.main.temp}&deg;F`);
            var currentWind = $("<p>").text(`Wind: ${data.wind.speed}mph`);
            var currentHumidity = $("<p>").text(`Humidity: ${data.main.humidity}%`);
            futureWeatherForecast.append(currentTemp, currentWind, currentHumidity);
        
        })
        .then(function(response){
            var futureWeatherForecast = $("#weather-forecast-3");
            var futureDay3 = currentDay.add(3, "day");

            var futureDayHead = $("<h3>").text(`${futureDay.format("M/D/YYYY")}`);
            futureWeatherForecast.append(futureDayHead);
            
            var iconCode = data.weather[3].icon;
            var icon = $("<img>").attr("src", `https://openweathermap.org/img/w/${iconCode}.png`);
            futureWeatherForecast.append(icon);
            
            var currentTemp = $("<p>").html(`Temp: ${data.main.temp}&deg;F`);
            var currentWind = $("<p>").text(`Wind: ${data.wind.speed}mph`);
            var currentHumidity = $("<p>").text(`Humidity: ${data.main.humidity}%`);
            futureWeatherForecast.append(currentTemp, currentWind, currentHumidity);
        
        })
        .then(function(response){
            var futureWeatherForecast = $("#weather-forecast-4");
            var futureDay = currentDay.add(4, "day");

            var futureDayHead = $("<h3>").text(`${futureDay.format("M/D/YYYY")}`);
            futureWeatherForecast.append(futureDayHead);
            
            var iconCode = data.weather[4].icon;
            var icon = $("<img>").attr("src", `https://openweathermap.org/img/w/${iconCode}.png`);
            futureWeatherForecast.append(icon);
            
            var currentTemp = $("<p>").html(`Temp: ${data.main.temp}&deg;F`);
            var currentWind = $("<p>").text(`Wind: ${data.wind.speed}mph`);
            var currentHumidity = $("<p>").text(`Humidity: ${data.main.humidity}%`);
            futureWeatherForecast.append(currentTemp, currentWind, currentHumidity);
        
        })
        .then(function(response){
            var futureWeatherForecast = $("#weather-forecast-5");
            var futureDay = currentDay.add(5, "day");

            var futureDayHead = $("<h3>").text(`${futureDay.format("M/D/YYYY")}`);
            futureWeatherForecast.append(futureDayHead);
            
            var iconCode = data.weather[5].icon;
            var icon = $("<img>").attr("src", `https://openweathermap.org/img/w/${iconCode}.png`);
            futureWeatherForecast.append(icon);
            
            var currentTemp = $("<p>").html(`Temp: ${data.main.temp}&deg;F`);
            var currentWind = $("<p>").text(`Wind: ${data.wind.speed}mph`);
            var currentHumidity = $("<p>").text(`Humidity: ${data.main.humidity}%`);
            futureWeatherForecast.append(currentTemp, currentWind, currentHumidity);
        
        })
}

function getCity(cityName) {
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&limit=1&appid=${API_KEY}`
    fetch(requestUrl)

        .then(function(response){
            return response.json();
        })
        .then(function(response){
            var lat = response.coord.lat;
            var long = response.coord.lon;
            getCurrentForecast(lat, long);
        });
        
}

function getCityFuture(cityName) {
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&limit=1&appid=${API_KEY}`
    fetch(requestUrl)

        .then(function(response){
            return response.json();
        })
        .then(function(response){
            var lat = response.coord.lat;
            var long = response.coord.lon;
            getFutureForecast(lat, long);
        });
        
}


$("#city-btn").on("click", function() {
    cityName = document.querySelector(".city-text").value;
    
     
    getCity(cityName);
    getCityFuture(cityName);
    
    
    //create city button
    var addCityBtn = $("<button>");
    addCityBtn.text(cityName);
    addCityBtn.attr("city", "city-btn");
    addCityBtn.attr("city-class", "city-btn-class");
    
    $("#btn-storage").append(addCityBtn);

});