// temperature
const temperature = document.getElementById("temperature");

// weather condition description
const weatherDescription = document.getElementById("weather-desc");

// weather icon
const weatherIcon = document.getElementById("weather-icon");

// weather icon
const humidity = document.getElementById("humidity");

// URL
const url = "https://api.openweathermap.org/data/2.5/weather?q=carlsbad&units=imperial&appid=2dbd30c96b72c8af4b026f79f2c96893";

// Forecast URL
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=carlsbad&units=imperial&appid=2dbd30c96b72c8af4b026f79f2c96893";


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

async function apiForecastFetch() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

apiFetch();
apiForecastFetch();

function displayResults(weatherData) {
    const tempValue = weatherData.main.temp.toFixed(0);
    temperature.innerHTML = `<strong>${tempValue}</strong>`

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    weatherDescription.textContent = desc;

    const humid = weatherData.main.humidity;
    humidity.innerHTML = humid;
}

const forecast = document.getElementById("forecast");

const dateTime = new Date();

function getDay(day) {
    switch(day) {
        case 0:
            return "Sun";
        break;
        case 1:
            return "Mon";
        break;
        case 2:
            return "Tue";
        break;
        case 3:
            return "Wed";
        break;
        case 4:
            return "Thur";
        break;
        case 5:
            return "Fri";
        break;
        case 6:
            return "Sat";
        break;
        default:
            return "Sun";
        break;
    }
}

function displayForecast(weatherData) {

    for ( i = 0; i < 3; i++ )
    {
        let forecastSection = document.createElement("section");
        forecastSection.setAttribute("class", "forecastSection");
        let date = document.createElement("p");
        let icon = document.createElement("img");
        let desc = document.createElement("p");
        let temp = document.createElement("p");

        let dayInt = (dateTime.getDay() + i) % 7;

        date.innerHTML = getDay(dayInt);
        const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[i].weather[0].icon}.png`;
        const description = weatherData.list[i].weather[0].description;
        icon.setAttribute("src", iconsrc);
        icon.setAttribute("alt", description);
        desc.innerText = description;
        temp.innerHTML = weatherData.list[i].main.temp_min.toFixed(0) + "-" + weatherData.list[i].main.temp_max.toFixed(0) + "&deg;F";

        forecastSection.appendChild(date);
        forecastSection.appendChild(icon)
        forecastSection.appendChild(desc)
        forecastSection.appendChild(temp);
        forecast.appendChild(forecastSection);

    };


}
