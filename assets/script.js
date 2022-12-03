// Retrieving Important Elements
const dateArea = $('.time-date');
const currentWeatherItems = $('#current-weather-items');
const timeZone = ('#time-zone');
const country = $('country');
const weatherForecast = $('weather-forecast');
const currentTemp = $('current-temp');
const currentCity = $('.current-city');


// Setting and displaying date and time
var currentDate = dayjs().format('MMM D , YYYY');
function myTimer() {
    const newDay = new Date();
    dateArea.text(currentDate + ' ' + newDay.toLocaleTimeString());
  };

//   Calling timer function
  myTimer();

// Allowing for timer to update live
  var timeInterval = setInterval(myTimer, 1000);


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const APIKey = 'd38245ae19141a85c5b74ef46109d23c';

var city;


var cityForm = $('#cityForm');

cityForm.on('submit', grabCityName)

function grabCityName (event) {
    event.preventDefault();
    var cityName = $('#cityname').val();
    getWeatherAndPlace(cityName);
}


// Getting weather and long and latitude from Weather API
function getWeatherAndPlace (cityName) {
    var cityLocation = `https://api.openweathermap.org/data/2.5/weather?appid=${APIKey}&q=${cityName}&units=imperial`
    fetch(cityLocation)
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        renderWeatherAndPlace(data);
        var {lat, lon} = data.coord;
        getForecast(lat,lon);
      });
};

// Displaying weather and place on webpage
function renderWeatherAndPlace(data) {
  currentCity.text(data.name);
  $('#temp').text(data.main.temp + ' °F');
  $('#humidity').text(data.main.humidity + ' %');
  $('#wind-speed').text(data.wind.speed + ' mph');
  $('#country').text(data.sys.country);
}

// Getting the forecast
function getForecast (lat, lon) {
  var forecastPull = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`
  fetch(forecastPull)
  .then(function (response) {
      return response.json();
    })
    .then(function (data2) {
      console.log(data2);
      renderForecast(data2);
    });
}

function renderForecast (data2) {
        // rendering forecast temp
      $('#tomorrow').text(data2.list[5].main.temp + '°F');
      $('#nextday1').text(data2.list[13].main.temp + '°F');
      $('#nextday2').text(data2.list[21].main.temp + '°F');
      $('#nextday3').text(data2.list[29].main.temp + '°F');
      $('#nextday4').text(data2.list[37].main.temp + '°F');
      // // rendering weather conditions
      // $('#tomorrowweather').text(data2.list[5].weather[0].main);
      // $('#nextdayweather1').text(data2.list[13].weather[0].main);
      // $('#nextdayweather2').text(data2.list[21].weather[0].main);
      // $('#nextdayweather3').text(data2.list[29].weather[0].main);
      // $('#nextdayweather4').text(data2.list[37].weather[0].main);
      // rendering forecast humidity
      $('#tomorrowhumidity').text('Humidity ' + data2.list[5].main.humidity + ' %');
      $('#nextdayhumidity1').text('Humidity ' + data2.list[13].main.humidity + ' %');
      $('#nextdayhumidity2').text('Humidity ' + data2.list[21].main.humidity + ' %');
      $('#nextdayhumidity3').text('Humidity ' + data2.list[29].main.humidity + ' %');
      $('#nextdayhumidity4').text('Humidity ' + data2.list[37].main.humidity + ' %');
      // rendering forecast windspeed
      $('#tomorrowwindspeed').text('Wind Speed ' + data2.list[5].wind.speed + ' mph');
      $('#nextdaywindspeed1').text('Wind Speed ' + data2.list[13].wind.speed + ' mph');
      $('#nextdaywindspeed2').text('Wind Speed ' + data2.list[21].wind.speed + ' mph');
      $('#nextdaywindspeed3').text('Wind Speed ' + data2.list[29].wind.speed + ' mph');
      $('#nextdaywindspeed4').text('Wind Speed ' + data2.list[37].wind.speed + ' mph');
      // rendering the icon
      var iconCode = data2.list[5].weather[0].icon;
      console.log(iconCode)
      var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x" + ".png";
      console.log(iconUrl)
      $('#icon-spot2').attr('src', iconUrl);
     
      
      
} 





 





// var cityLocationAPI = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}'

// Successfully got Waco's weather data if city is replaced with 76000 (waco's city code)
// var queryURL1 = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&appid=" + weatherAPIKey;
// fetch(queryURL1)
// .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data)
//   })




