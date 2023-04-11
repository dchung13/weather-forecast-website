# weather-forecast-website
This repository will show a 5-day weather forecast for any given city that the user inputs

bootstrap: header, user input
two columns 1/4 3/4
    first column user input and area for buttons created in js and append in html
    second column two rows
        first row current weather status of location
        second row 5 columns 5-day weather forecast: generate figures in js and append to html
use ajax to get weatherapp data
    ensure capability of only inputting city, does not need coordinates
add eventlistener to the user input to search
add eventlistener to the created buttons to bring up previous weathers
    ensure buttons are selected as not active when not selected
    current button should be active when selected
store buttons that have previously been searched in localStorage
retrive on screen refresh

if a previously searched city is already present, do nothing
check array for stringified name

geocoding api on the weather app use to pass a city and return the latitude/longitude
    use apicall