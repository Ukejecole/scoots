// Function to get the name of the day based on the provided number
function getDayName(dayNumber) {
    switch (dayNumber) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
    }
  }
  
  // Function to calculate the day based on today's date and an addition
  function calculateDay(today, addition) {
    const calculatedDay = today + addition;
    if (calculatedDay > 6) {
      if (addition === 1) {
        return 0;
      } else {
        return 6 * 0 + (calculatedDay - 1);
      }
    } else {
      return calculatedDay;
    }
  }
  
  // Function to retrieve today's date, month, and upcoming days
  function retrieveDates() {
    const currentDate = new Date();
    const todayIndex = currentDate.getDay();
    const currentMonthIndex = currentDate.getMonth();
    const currentDay = currentDate.getDate();
  
    const inTwoDays = getDayName(calculateDay(todayIndex, 2));
    const inThreeDays = getDayName(calculateDay(todayIndex, 3));
    let monthName;
  
    switch (currentMonthIndex) {
      // Assign month names based on their respective indexes
      case 0:
        monthName = "January";
        break;
      case 1:
        monthName = "February";
        break;
      case 2:
        monthName = "March";
        break;
      case 3:
        monthName = "April";
        break;
      case 4:
        monthName = "May";
        break;
      case 5:
        monthName = "June";
        break;
      case 6:
        monthName = "July";
        break;
      case 7:
        monthName = "August";
        break;
      case 8:
        monthName = "September";
        break;
      case 9:
        monthName = "October";
        break;
      case 10:
        monthName = "November";
        break;
      case 11:
        monthName = "December";
        break;
    }
  
    return [currentDay, monthName, inTwoDays, inThreeDays];
  }
  
  // API URL for weather data
  const weatherApiURL =
    "https://api.openweathermap.org/data/2.5/onecall?lat=5.0333&lon=7.9266&units=metric&appid=1da99388e86d2e97825559d74b18e860";
  
  // Fetch weather data from the API
  fetch(weatherApiURL)
    .then((response) => response.json())
    .then((weatherData) => {
      const [currentDay, monthName, inTwoDays, inThreeDays] = retrieveDates();
  
      // Fetch and display today's weather information
      const currentTemperature = Math.round(weatherData.current.temp);
      const currentHumidity = Math.round(weatherData.current.humidity);
      const weatherDescription = weatherData.current.weather[0].description;
  
      document.querySelector(".current-temp").textContent = `${currentTemperature}°C`;
      document.querySelector(".todays-hum").textContent = currentHumidity;
      document.querySelector(".todays-desc").textContent = weatherDescription;
      document.querySelector(".current-date").textContent = `${currentDay}th`;
      document.querySelector(".current-month").textContent = monthName;
  
      // Fetch and display weather information for tomorrow, in 2 days, and in 3 days
      const tomorrowsTemp = Math.round(jsObject.daily[0].temp.day);
      const tomorrowsHum = Math.round(jsObject.daily[0].humidity);
      const tomorrowsDesc = jsObject.daily[0].weather[0].description;
  
      document.querySelector(
        ".tomorrows-temp"
      ).textContent = `${tomorrowsTemp}°c`;
      document.querySelector(".tomorrows-hum").textContent = tomorrowsHum;
      document.querySelector(".tomorrows-desc").textContent = tomorrowsDesc;
  
      //In 2 days
      const inTwoDaysTemp = Math.round(jsObject.daily[1].temp.day);
      const inTwoDaysHum = Math.round(jsObject.daily[1].humidity);
      const inTwoDaysDesc = jsObject.daily[1].weather[0].description;
  
      document.querySelector(".in-two-days-name").textContent = inTwoDays;
      document.querySelector(
        ".in-two-days-temp"
      ).textContent = `${inTwoDaysTemp}°c`;
      document.querySelector(".in-two-days-hum").textContent = inTwoDaysHum;
      document.querySelector(".in-two-days-desc").textContent = inTwoDaysDesc;
  
      //In 3 Days
      const inThreeDaysTemp = Math.round(jsObject.daily[2].temp.day);
      const inThreeDaysHum = Math.round(jsObject.daily[2].humidity);
      const inThreeDaysDesc = jsObject.daily[2].weather[0].description;
  
      document.querySelector(".in-three-days-name").textContent = inThreedays;
      document.querySelector(
        ".in-three-days-temp"
      ).textContent = `${inThreeDaysTemp}°c`;
      document.querySelector(".in-three-days-hum").textContent = inThreeDaysHum;
      document.querySelector(".in-three-days-desc").textContent = inThreeDaysDesc;
    });


// JavaScript code for form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(this);
  const name = formData.get('name');
  const email = formData.get('email');
  const comment = formData.get('comment');

  // Perform actions with form data (e.g., send to server)
  // For demonstration purposes, log the form data to console
  console.log(`Name: ${name}, Email: ${email}, Comment: ${comment}`);

  // You can add code to send the form data to a server or perform other actions as needed.
  // For example, using fetch() to send data to a server.
  // fetch('your-api-endpoint', {
  //   method: 'POST',
  //   body: JSON.stringify({ name, email, comment }),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  // .then(response => response.json())
  // .then(data => {
  //   // Handle server response
  // })
  // .catch(error => {
  //   // Handle errors
  // });
});

