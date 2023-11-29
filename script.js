const apiKey = "ae2f97df1a45e8f8eb5d0be9feeeffb1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("header input");
const searchBtn = document.querySelector("header button");
const weatherIcon = document.querySelector(".weather-image");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status === 404) {
        // Handle 404 error or display a message
    } else {
        const data = await response.json(); // Declare 'data' here
        console.log(data); // Now log 'data' after it's assigned
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/H";
    }
}

// Event listener for the search button
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})