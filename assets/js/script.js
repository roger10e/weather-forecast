//There will be a weather dashboard with form inputs

//1. When a user searches for a city, it presents them with current and future conditions for that city
//1a. That city is also added to the search history

//2. Current weather conditions for a city include: date, icon representation of weather conditions,
//  temperature, humidity, wind speed, and UV index

//3. The UV index is presented with a color that indicates whether the conditions are favorable, moderate, or severe

//4. 5-day forecasts for a presented city displays date, icon representation,
//  temperature, wind speed, and humidity

//5. Users should be able to click the cities in the search history to be presented with current and future conditions for that city

//------------------------ re-try

//1. How to properly call the two APIs needed
    //Here's the API link: 
        //https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
    //Here's how another person was setting up the variables online:
        //var dailyWeatherApiStarts = "https://api.openweathermap.org/data/2.5/weather?q=";
        //var dailyUVIndexApiStarts = "https://api.openweathermap.org/data/2.5/uvi?";
        //var forecastWeatherApiStarts = "https://api.openweathermap.org/data/2.5/onecall?";
