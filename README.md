# weather-forecast-website
# Work Day Scheduler

## Technologies Used
- HTML
- CSS
- Git
- JavaScript
- jQuery
- DayJs
- OpenWeatherAPI

## Description

[Visit the Deployed Site](https://dchung13.github.io/weather-forecast-website/)

This project is an interactive weather forecast application that takes in a city name, and displays the current weather forecast for that city. It stores the cities in a button on the side to be used again as a search history.

## Table of Contents 

* [Features](#features)
* [Code Example](#code-example)
* [Usage](#usage)
* [Learning Points](#learning-points)
* [Author Info](#author-info)
* [Credits](#credits)
* [License](#license)

## Features
- User Input for Searching Cities
- Displays weather, temperature, winds, humidity
- Displays forecast for the next 5 days

## Code Example


```js
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
```
The above code is used to retrieve the longitude and latitude from the openweather info app.


```js
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

```
The above code uses the longitude and latitude from the getCity function to search for the current weather for the searched city.



```js
var addCityBtn = $("<button>");
    addCityBtn.text(cityName);
    addCityBtn.attr("city", "city-btn");
    addCityBtn.attr("city-class", "city-btn-class");
    
    $("#btn-storage").append(addCityBtn);

```
The above code adds button when the eventListener is called.


## Usage
To use the weather forecast application, type in a city name and click the search button. It should return the weather for the current day and the next 5 days as well.

## Learning Points 

1. jQuery: I learned about using jQuery to simplify JavaScript and used the tools within to create the functions for the save button and load on refresh. [W3 jQuery tutorial website](https://www.w3schools.com/jquery/)
2. DayJs: I used dayjs to input the current time and day to the schedule. [Dayjs](https://day.js.org/)
3. APIs: I used the openweather API to retrieve weather information.

## Author Info

### David Chung
I am an aspiring web developer making the switch from Psychology to web development.

* [Github](https://github.com/dchung13/)
* [Portfolio](https://dchung13.github.io/David-Chung-Portfolio/) 
* [LinkedIn](https://www.linkedin.com/in/david-chung-77141526b/)


## Credits

Special thanks to Bryan Nguyen for pair programming with me and assisting me with this project.
Visit his: 
* [Github](https://github.com/bryannguyen9/)
* [Portfolio](https://bryannguyen9.github.io/Bryan-Nguyen-Portfolio/)
* [LinkedIn](https://linkedin.com/in/bryannguyen9)


## License

MIT License

Copyright (c) [2023] [David Chung]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


