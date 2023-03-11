// temperature
const temperature = document.getElementById("temp");

// weather condition description
const weatherDescription = document.getElementById("weather-desc");

// weather icon
const weatherIcon = document.getElementById("weather-icon");

// windspeed
const windSpeed = document.getElementById("wind");

// windchill
const windChill = document.getElementById("windChillFactor");

// URL
const url = "https://api.openweathermap.org/data/2.5/weather?q=Jilin&units=metric&appid=2dbd30c96b72c8af4b026f79f2c96893";


async function apiFetch() {
    try {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayResults(data);
    }
    else {
        throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    }
};

apiFetch();

function displayResults(weatherData) {
    const tempValue = weatherData.main.temp.toFixed(0);
    temperature.innerHTML = `<strong>${tempValue}</strong>`
    const windSpeedValue = weatherData.wind.speed;
    windSpeed.textContent = windSpeedValue;

    // calculations to convert from metric to imperial
    const tempF = (9/5) * tempValue + 32;
    const mphSpeed = windSpeedValue * 0.621371;
    
    // calculation for windchill
    const windF = Math.round(35.74 + (0.6215 * tempF) - (35.75 * Math.pow(mphSpeed, 0.16)) + (0.4275 * tempF * Math.pow(mphSpeed, 0.16)));
    const windC = Math.round(5/9 * (windF - 32));

    // conditional if there is no windchill factor due to low winds or high temps
    if (windF > 50 || mphSpeed < 3.0) {
        windChill.textContent = "N/A";
    } else {
        windChill.innerHTML = `${windC} &deg;C`;
    }


    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    weatherDescription.textContent = desc;
}
