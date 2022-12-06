// Retrieving Important Elements
const dateArea = $('.time-date');
const currentWeatherItems = $('#current-weather-items');
const timeZone = ('#time-zone');
const country = $('country');
const weatherForecast = $('weather-forecast');
const currentTemp = $('current-temp');
const currentCity = $('.current-city');
var searchHistory = [];


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
        saveHistory(cityName);
        
      });
};

// Getting the city name into local storage
function saveHistory (cityName) {
     if (searchHistory.indexOf(cityName) !== -1) {
      return
     }
     searchHistory.push(cityName);
     localStorage.setItem('cityHistory', JSON.stringify(searchHistory));
     renderCityHistory()
}

// Displaying city name on page with a button
function renderCityHistory () {
  $('.history').empty();
  for (var i = searchHistory.length-1; i >= 0; i--) {
    var btn = $('<button/>');
    btn.attr('data-search', searchHistory[i]);
    btn.text(searchHistory[i]);
    btn.addClass('btn-history');

    $('.history').append(btn);
};
};

function searchHistoryClick(event) {
      if (!event.target.matches('.btn-history')) {
        return
      };
      console.log('click')
      var btn = event.target
      var cityName = btn.data('data-search');
      console.log(cityName)
      getWeatherAndPlace(cityName);

}

$('.history').on('click', searchHistoryClick)



// Displaying weather and place on webpage
function renderWeatherAndPlace(data) {
  currentCity.text(data.name);
  $('#temp').text(data.main.temp + ' °F');
  $('#humidity').text(data.main.humidity + ' %');
  $('#wind-speed').text(data.wind.speed + ' mph');
  $('#country').text(data.sys.country);

  var iconCodeToday = data.weather[0].icon
      var iconurlToday = "http://openweathermap.org/img/w/" + iconCodeToday + ".png";
      $('#wicontoday').attr('src', iconurlToday);
  
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


      // rendering forecast icons
      var iconCodeTmrw = data2.list[5].weather[0].icon
      var iconurlTmrw = "http://openweathermap.org/img/w/" + iconCodeTmrw + ".png";
      $('#wicontomorrow').attr('src', iconurlTmrw);

      var iconCode1 = data2.list[13].weather[0].icon
      console.log('here', iconCode1)
      var iconurl1 = "http://openweathermap.org/img/w/" + iconCode1 + ".png";
      $('#wicon1').attr('src', iconurl1);

      var iconCode2= data2.list[21].weather[0].icon
      var iconurl2 = "http://openweathermap.org/img/w/" + iconCode2 + ".png";
      $('#wicon2').attr('src', iconurl2);

      var iconCode3 = data2.list[29].weather[0].icon
      var iconurl3 = "http://openweathermap.org/img/w/" + iconCode3 + ".png";
      $('#wicon3').attr('src', iconurl3);

      var iconCode4 = data2.list[37].weather[0].icon
      var iconurl4 = "http://openweathermap.org/img/w/" + iconCode4 + ".png";
      $('#wicon4').attr('src', iconurl4);
      


      
} 

// Making history log/btn










 







