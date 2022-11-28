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

pullWeatherData();
function pullWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {
        
        let {latitude, longitude} = success.coords;

        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${weatherAPIKey}`).then(res => res.json()).then(data => {
            console.log(data)
        })
    })
} 
