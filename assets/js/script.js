var weekListEl = document.querySelector(".week-list");
var cityListEl = document.querySelector(".city-list");
var todayEl = document.querySelector(".today");
var todayInfoEl = document.querySelector(".today-info");
var searchBtnEl = document.querySelector("#search");
var nameInputEl = document.querySelector("#city");
const apiKey = "0e7adf6707c7fbd3dedaeb804daa8ef2"

// var getCityCds = function(city)
var getCityCds = function(city) {
    var cityConvertUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + apiKey;

    // make a request to the url
    fetch(cityConvertUrl)
    .then(function(response) {
      // request was successful
      if (response.ok) {
        response.json().then(function(data) {
          console.log(data);
          console.log(data[0].lon);
          console.log(data[0].lat);
          var lon = data[0].lon;
          var lat = data[0].lat;
          var todayTitleEl = document.createElement("h2");
          var date =" (" + moment().format('L') + ")";
          todayTitleEl.append(city, date);
          todayTitleEl.setAttribute("class", "font-weight-bold");
          todayEl.append(todayTitleEl);
          getCityWeather(lon, lat);
        });
      } else {
        alert('Error: City Not Found');
      }
    })
    .catch(function(error) {
      alert("Unable to connect to Weather API");
    });
};

var getCityWeather = function(lon, lat) {

    //create weather URL, using the longitude and latitude fetched previously
    //Query parameters include: 
    //remove hourly and minutely info, since it's not needed
    //change units to imperial, for Fahrenheit, wind speed, and the like
    //API key, since it's necessary
    var weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" 
    + lon + "&exclude=hourly,minutely&units=imperial&appid=" + apiKey;

    // make a request to the url
    fetch(weatherUrl)
    .then(function(response) {
        // request was successful
        if (response.ok) {
        response.json().then(function(data) {
            console.log(data);
            displayCityWeather(data);
        });
        } else {
        alert('Error: City Not Found');
        }
    })
    .catch(function(error) {
        alert("Unable to connect to Weather API");
    });
}

var displayCityWeather = function(data) {
    //Add icon to go along with the City Name and Date
    //Find icon code
    var imageCode = data.current.weather[0].icon;
    //add code to the url that will source the image
    var iconUrl = "http://openweathermap.org/img/w/" + imageCode + ".png";
    //create an image element and add the url as the source
    var imageEl = document.createElement("img");
    imageEl.setAttribute("src", iconUrl);
    todayEl.append(imageEl);
    //show temp
    var todayTemp = data.current.temp
    var todayTempEl=document.createElement("p");
    todayTempEl.textContent = "Temp: " + todayTemp + "°F";
    todayInfoEl.append(todayTempEl);
    //show wind
    var todayWind = data.current.wind_speed
    var todayWindEl=document.createElement("p");
    todayWindEl.textContent = "Wind: " + todayWind + " MPH";
    todayInfoEl.append(todayWindEl);
    //show humidity
    var todayHumid = data.current.humidity
    var todayHumidEl=document.createElement("p");
    todayHumidEl.textContent = "Humidity: " + todayHumid + " %";
    todayInfoEl.append(todayHumidEl);
    //show UV index
    var todayUV = data.current.uvi
    var todayUVEl=document.createElement("p");
    todayUVEl.textContent = "UV Index: " + todayUV;
    todayInfoEl.append(todayUVEl);

    //FOR 5 DAY FORECAST
    for (i=0; i<5; i++) {
        //create a card
        var forecastEl = document.createElement("div");
        forecastEl.setAttribute("class", "card card-style col m-2");
        //show date
        var futureDate = moment().add((i+1), 'days').format("L");
        forecastEl.append(futureDate); 
     
        //show icon
        var imageCode = data.daily[i].weather[0].icon;
        //add code to the url that will source the image
        var iconUrl = "http://openweathermap.org/img/w/" + imageCode + ".png";
        //create an image element and add the url as the source
        var imageEl = document.createElement("img");
        imageEl.setAttribute("src", iconUrl);
        forecastEl.append(imageEl);
        
        //show temp
        var dayTemp = data.daily[i].temp.day;
        var dayTempEl=document.createElement("p");
        dayTempEl.textContent = "Temp: " + dayTemp + "°F";
        forecastEl.append(dayTempEl);
        //show wind
        var dayWind = data.daily[i].wind_speed
        var dayWindEl=document.createElement("p");
        dayWindEl.textContent = "Wind: " + dayWind + " MPH";
        forecastEl.append(dayWindEl);
        //show humidity
        var dayHumid = data.daily[i].humidity
        var dayHumidEl=document.createElement("p");
        dayHumidEl.textContent = "Humidity: " + dayHumid + " %";
        forecastEl.append(dayHumidEl);

        weekListEl.append(forecastEl);
    }
}

var formSubmitHandler = function(event) {
    event.preventDefault();
    // get value from input element
    var submission = nameInputEl.value.trim();
   
    if (submission) {
    getCityCds(submission);
    nameInputEl.value = "";
    } else {
    alert("Please enter a city.");
    }
};


searchBtnEl.addEventListener("click", formSubmitHandler);
// getCityCds("Charlotte");