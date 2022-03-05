var weekListEl = document.querySelector(".week-list");
var cityListEl = document.querySelector(".city-list");
var todayEl = document.querySelector(".today");
var todayInfoEl = document.querySelector(".today-info");
var searchBtnEl = document.querySelector("#search");
var nameInputEl = document.querySelector("#city");
var weekForecastEl = document.querySelector("#week-forecast");
const apiKey = "0e7adf6707c7fbd3dedaeb804daa8ef2"

//Get CITY COORDINATES
var getCityCds = function(city) {
    var cityConvertUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + apiKey;

    //Remove anything that may already cover the title of today's weather
    while (todayEl.firstChild) {
        todayEl.removeChild(todayEl.firstChild);
    }

    // make a request to the url
    fetch(cityConvertUrl)
    .then(function(response) {
      // request was successful
      if (response.ok) {
        response.json().then(function(data) {
          //fetch longitude and latitude values
          var lon = data[0].lon;
          var lat = data[0].lat;
          //Update today's weather with the name of the city and the date
          var todayTitleEl = document.createElement("h2");
          var date =" (" + moment().format('L') + ")";
          todayTitleEl.append(city, date);
          todayTitleEl.setAttribute("class", "font-weight-bold");
          todayEl.append(todayTitleEl);
          //make a button for the searched city
          makeButton(city);
          //fetch the weather data
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

//GET CITY'S WEATHER DATA
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
            //Fetch the city's name from the title, and store it as the key in localStorage
            var cityName = $(todayEl).find("h2")[0].innerHTML;
            cityName = cityName.split("(")[0];
            cityName = cityName.trim();
            localStorage.setItem(cityName, JSON.stringify(data));

            //Display the retrieved data
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

//DISPLAY CITY'S WEATHER DATA
var displayCityWeather = function(data) {
    //Add icon to go along with the City Name and Date
    //Remove anything that may already cover today's weather information
    while (todayInfoEl.firstChild) {
        todayInfoEl.removeChild(todayInfoEl.firstChild);
    }
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
    var uvValue = document.createElement("span")
    uvValue.textContent = todayUV;
    //Highlight the cover based on its uv index. Google states that mid UV levels are between 3 and 5
    if (todayUV < 3) {
        uvValue.setAttribute("class", "low-uv p-1");
    } else if (todayUV > 5) {
        uvValue.setAttribute("class", "hi-uv p-1");
    } else {
        uvValue.setAttribute("class", "mid-uv p-1"); 
    }
    todayUVEl.textContent = "UV Index: ";
    todayUVEl.append(uvValue);
    todayInfoEl.append(todayUVEl);
    //Add the Title for the 5 day forecast if it's not there already
    if (!weekForecastEl.textContent) {
        weekForecastEl.textContent = "5-Day Forecast";
    }
    //Remove anything that may already cover the upcoming week's weather information
    while (weekListEl.firstChild) {
        weekListEl.removeChild(weekListEl.firstChild);
    }

    //FOR 5 DAY FORECAST
    for (i=0; i<5; i++) {
        //create a card
        var forecastEl = document.createElement("div");
        $(forecastEl).addClass("card card-style col m-2");
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
        //Append the info 
        weekListEl.append(forecastEl);
    }
}

//TO HANDLE THE CITY SUBMISSION BUTTON
var formSubmitHandler = function(event) {
    event.preventDefault();
    // get value from input element
    var submission = nameInputEl.value.trim();
   //If the user wrote a city, empty the input section and get the city's coordinates
    if (submission) {
    getCityCds(submission);
    nameInputEl.value = "";
    } else {
    alert("Please enter a city.");
    }
};

//TO HANDLE SAVED CITY BUTTONS
var replaceContentHandler = function(event) {
    //Get the name of the city, and use it as the key to retrieved the locally saved data
    var cityKey = event.target.innerHTML;
    console.log(cityKey);
    var data= JSON.parse(localStorage.getItem(cityKey));

    //Remove old title and icon
    while (todayEl.firstChild) {
        todayEl.removeChild(todayEl.firstChild);
    }
    
    // Tag the date and saved city to the top of the "current" section 
    var todayTitleEl = document.createElement("h2");
    var date =" (" + moment().format('L') + ")";
    todayTitleEl.append(cityKey, date);
    todayTitleEl.setAttribute("class", "font-weight-bold");
    todayEl.append(todayTitleEl);

    //using the data saved in localStorage, display the weather again for that city
    displayCityWeather(data);
}

//Make a button with the city's name as its title
var makeButton = function(city) {
    var cityBtn = document.createElement("button");
    $(cityBtn).addClass("btn btn-gray w-100 mt-2");
    cityBtn.textContent = city;
    cityListEl.append(cityBtn);
}


searchBtnEl.addEventListener("click", formSubmitHandler);
cityListEl.addEventListener("click", replaceContentHandler);