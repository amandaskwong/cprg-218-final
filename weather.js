fetch ("https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=b3d0ed792bd2955857f4224285371d06&units=metric")

.then(response => response.json())
.then(data => {
    console.log("https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png")
    icon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    temperature.textContent = data.main.temp + " \u00b0C";
})