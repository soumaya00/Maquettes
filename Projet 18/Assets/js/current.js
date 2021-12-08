var myInput = $('input')
var mySpan = $('.blue')
var myBtn = $('button')


myBtn.click(() => {
    if (myInput.val()) {
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${myInput.val()}&appid=f32ba69de2d2edb80a179865c3ae09b8`,
            type: 'GET',
            // Description:
            // Temperature:
            // Pressure:
            // Humidity:
            // Min Temperature:
            // Max Temperature:
            // Wind Speed:
            // Wind Direction:
            success: (response) => {
                mySpan.html(`<h2>Current Weather for Casablanca, MA</h2>
  <p>Weather: ${response.weather[0].main}</p>
  <p style="display:flex; align-items:center">Description: <img src="http://openweathermap.org/img/w/${response.weather[0].icon}.png"/> ${response.weather[0].description}</p>
  <p>Temperature: ${Math.floor(response.main.temp)} °C</p>
  <p>Pressure: ${response.main.pressure} hpa</p>
  <p>Humidity: ${response.main.humidity}%</p>
  <p>Min Temperature: ${Math.floor(response.main.temp_min)}°C</p>
  <p>Max Temperature: ${Math.floor(response.main.temp_max)}°C</p>
  <p>Wind Speed: ${response.wind.speed}m/s</p>
  <p>Wind Direction: ${response.wind.deg}°</p>`)
            }
        })
    }
})
