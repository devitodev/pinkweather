const dateArea = $('.time-date');
const currentWeatherItems = $('#current-weather-items');
const timeZone = ('#time-zone');
const country = $('country');
const weatherForecast = $('weather-forecast');
const currentTemp = $('current-temp');

var currentDate = dayjs().format('MMM D , YYYY')


function myTimer() {
    const newDay = new Date()
    dateArea.text(currentDate + ' ' + newDay.toLocaleTimeString())
  }

  myTimer()

  var timeInterval = setInterval(myTimer, 1000)

// To Do: Switch to all Day JS
// setInterval(() => {
    // const clockTime = new Date();
    // const month = dayjs().month();
    // const date = time.getDate();
    // const day = time.getDay();
    // const hour = time.getHours();
    // const hoursIn12 = hour >= 13 ? hour %12: hour;
    // const minutes = time.getMinutes();
    // const ampm = hour >=12 ? 'PM' : 'AM';

//     time.innerHTML = dayjs()
// }, 1000);