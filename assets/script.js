// Retrieving Important Elements
const dateArea = $('.time-date');
const currentWeatherItems = $('#current-weather-items');
const timeZone = ('#time-zone');
const country = $('country');
const weatherForecast = $('weather-forecast');
const currentTemp = $('current-temp');

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

const weatherAPIKey = 'd38245ae19141a85c5b74ef46109d23c';



// Successfully got Waco's weather data
var city;
var queryURL1 = 'http://api.openweathermap.org/data/2.5/weather?q=' + '76000' + "&appid=" + weatherAPIKey;


fetch(queryURL1)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
  })

  


