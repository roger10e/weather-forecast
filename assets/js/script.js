//Requirements...

//1. When a user searches for a city, it presents them with current and future conditions for that city
//1a. That city is also added to the search history

//2. Current weather conditions for a city include: date, icon representation of weather conditions,
//  temperature, humidity, wind speed, and UV index

//3. The UV index is presented with a color that indicates whether the conditions are favorable, moderate, or severe

//4. 5-day forecasts for a presented city displays date, icon representation, temperature, wind speed, and humidity

//5. Users should be able to click the cities in the search history to be presented with current and future conditions for that city


//------------------------ re-try
    //My account & key:
        //Username: roger10e / key: b8787de324d36f137022f2eda472ed49

    //How to get the correct city upon search ? - longitude & latitude

//variables from another person's code...
var citiesListArr = [];
var numOfCities = 9;
var unit = "units=imperial";
var dailyWeatherApiStarts = 'https://api.openweathermap.org/data/2.5/weather?q=';
var dailyUVIndexApiStarts = "https://api.openweathermap.org/data/2.5/uvi?";
var forecastWeatherApiStarts = "https://api.openweathermap.org/data/2.5/onecall?";
var btnSearch = $("#searchCityForm")
//http://api.openweathermap.org/geo/1.0/direct?q=krum&limit=5&appid=b8787de324d36f137022f2eda472ed49


btnSearch.click(function(){
    var userInput = $("#searchCity").val().trim();

    // $("#cityName").text(userInput);
    
    searchLocation(userInput);
    
    //save to localStorage
})


var searchLocation = function (input) {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + input + '&limit=5&appid=b8787de324d36f137022f2eda472ed49&' + unit)
    .then(response => response.json())
    .then (data => {
        //console.log the data object
        console.log(data)
        
        var searchCityName = data[0].local_names.en;
        console.log(searchCityName);
        $("#cityName").text(searchCityName);

        //console.log the latitude & longitude
        // console.log(lat);
        // console.log(lon);
        var lat = data[0].lat;
        var lon = data[0].lon;
        
        searchWeather(lat, lon);
    })
    .catch(err => console.error(err));
    
}

var searchWeather = function (lat, lon) {
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=b8787de324d36f137022f2eda472ed49&' + unit)
    .then(response => response.json())
    .then (data => {
        //console.log the entire data object received from API after user input
        // console.log(data)

        //console.log the data object for today's weather
        // console.log(data.current);

        var todayTemp = data.current.temp;
        $("#tempToday").text(todayTemp + " F")

        var todayHumidity = data.current.humidity;
        $("#humidityToday").text(todayHumidity + "%");

        var todayWind = data.current.wind_speed;
        $("#windSpeedToday").text(todayWind + "mph");

        var todayUV = data.current.uvi;
        $("#UVIndexToday").text(todayUV);

        //console.log the forecast data object
        console.log(data.daily);

        var dayOneTemp = data.daily[0].temp.day;
        $("#tempDay1").text(dayOneTemp + " F");

        var dayOneHumidity = data.daily[0].humidity;
        $("#humidityDay1").text(dayOneHumidity + "%");

        var dayTwoTemp = data.daily[1].temp.day;
        $("#tempDay2").text(dayTwoTemp + " F");

        var dayTwoHumidity = data.daily[1].humidity;
        $("#humidityDay2").text(dayTwoHumidity + "%");

        var dayThreeTemp = data.daily[2].temp.day;
        $("#tempDay3").text(dayThreeTemp + " F");

        var dayThreeHumidity = data.daily[2].humidity;
        $("#humidityDay3").text(dayThreeHumidity + "%");

        var dayFourTemp = data.daily[3].temp.day;
        $("#tempDay4").text(dayFourTemp + " F");

        var dayFourHumidity = data.daily[3].humidity;
        $("#humidityDay4").text(dayFourHumidity + "%");

        var dayFiveTemp = data.daily[4].temp.day;
        $("#tempDay5").text(dayFiveTemp + " F");

        var dayFiveHumidity = data.daily[4].humidity;
        $("#humidityDay5").text(dayFiveHumidity + "%");

    })
    .catch(err => console.error(err));
}





//have to link to jQuery? Don't remember doing this...
// var searchCityForm = $("#searchCityForm");
// var searchedCities = $("#searchedCityLi");

//starting the function
// var getCityWeather = function (searchCityName) {
//     // formate the OpenWeather api url
//     var apiUrl = dailyWeatherApiStarts + searchCityName + "&" + personalAPIKey + "&" + unit;
//     // make a request to url
//     fetch(apiUrl).then(function (response) {
//         if (response.ok) {
//             return response.json().then(function() {
//                 console.log(response);
//             });
//         };
// })};
