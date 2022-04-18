//My account & key:
        //Username: roger10e / key: b8787de324d36f137022f2eda472ed49

    //How to get the correct city upon search ? - longitude & latitude

//variables from another person's code, just used for guidance
// var numOfCities = 9;
// var citiesListArr = [];
// var dailyWeatherApiStarts = 'https://api.openweathermap.org/data/2.5/weather?q=';
// var dailyUVIndexApiStarts = "https://api.openweathermap.org/data/2.5/uvi?";
// var forecastWeatherApiStarts = "https://api.openweathermap.org/data/2.5/onecall?";
//http://api.openweathermap.org/geo/1.0/direct?q=krum&limit=5&appid=b8787de324d36f137022f2eda472ed49
var unit = "units=imperial";
var btnSearch = $("#searchCityForm")
var searchHistory = JSON.parse(localStorage.getItem("search")) || [];

var todayDate = moment().format("MMMM Do YYYY");


btnSearch.click(function(){
    var userInput = $("#searchCity").val().trim();

    // $("#cityName").text(userInput);
    
    searchLocation(userInput);
    
    //save to localStorage
    // searchHistory.push(userInput);
    // localStorage.setItem("search", JSON.stringify(userInput));
})


var searchLocation = function (input) {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + input + '&limit=5&appid=b8787de324d36f137022f2eda472ed49&' + unit)
    .then(response => response.json())
    .then (data => {
        //console.log the data object
        // console.log(data)
        
        var searchCityName = data[0].local_names.en;
        $("#cityName").text(searchCityName);

        $("#currentDate").text(todayDate);

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
        console.log(data)

        //console.log the data object for today's weather
        console.log(data.current);
        
        var todayIcon = data.current.weather[0].icon;
        document.getElementById("weatherIconToday").src = "http://openweathermap.org/img/wn/" + todayIcon + "@2x.png";

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
        
        //set the date for forecast day one
        var dayOneDate = moment().add(1, 'days').format("MMM Do YY");
        $("#Date1").text(dayOneDate);

        //set the temperature for forecast day one
        var dayOneTemp = data.daily[0].temp.day;
        $("#tempDay1").text(dayOneTemp + " F");
        
        //set the humidity for forecast day one
        var dayOneHumidity = data.daily[0].humidity;
        $("#humidityDay1").text(dayOneHumidity + "%");

        //set the icon for forecast day one
        var dayOneIcon = data.daily[0].weather[0].icon;
        document.getElementById("weatherIconDay1").src = "http://openweathermap.org/img/wn/" + dayOneIcon + "@2x.png";
        
        var dayTwoDate = moment().add(2, 'days').format("MMM Do YY");
        $("#Date2").text(dayTwoDate);
        var dayTwoTemp = data.daily[1].temp.day;
        $("#tempDay2").text(dayTwoTemp + " F");
        var dayTwoIcon = data.daily[1].weather[0].icon;
        document.getElementById("weatherIconDay2").src = "http://openweathermap.org/img/wn/" + dayTwoIcon + "@2x.png";
        var dayTwoHumidity = data.daily[1].humidity;
        $("#humidityDay2").text(dayTwoHumidity + "%");
        
        var dayThreeDate = moment().add(3, 'days').format("MMM Do YY");
        $("#Date3").text(dayThreeDate);
        var dayThreeTemp = data.daily[2].temp.day;
        $("#tempDay3").text(dayThreeTemp + " F");
        var dayThreeHumidity = data.daily[2].humidity;
        $("#humidityDay3").text(dayThreeHumidity + "%");
        var dayThreeIcon = data.daily[2].weather[0].icon;
        document.getElementById("weatherIconDay3").src = "http://openweathermap.org/img/wn/" + dayThreeIcon + "@2x.png";

        var dayFourDate = moment().add(4, 'days').format("MMM Do YY");
        $("#Date4").text(dayFourDate);
        var dayFourTemp = data.daily[3].temp.day;
        $("#tempDay4").text(dayFourTemp + " F");
        var dayFourHumidity = data.daily[3].humidity;
        $("#humidityDay4").text(dayFourHumidity + "%");
        var dayFourIcon = data.daily[3].weather[0].icon;
        document.getElementById("weatherIconDay4").src = "http://openweathermap.org/img/wn/" + dayFourIcon + "@2x.png";

        var dayFiveDate = moment().add(5, 'days').format("MMM Do YY");
        $("#Date5").text(dayFiveDate);
        var dayFiveTemp = data.daily[4].temp.day;
        $("#tempDay5").text(dayFiveTemp + " F");
        var dayFiveHumidity = data.daily[4].humidity;
        $("#humidityDay5").text(dayFiveHumidity + "%");
        var dayFiveIcon = data.daily[4].weather[0].icon;
        document.getElementById("weatherIconDay5").src = "http://openweathermap.org/img/wn/" + dayFiveIcon + "@2x.png";
    })
    .catch(err => console.error(err));
}


