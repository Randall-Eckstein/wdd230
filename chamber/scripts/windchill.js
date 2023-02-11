const temperature = document.getElementById("temp").innerHTML;
tempF = (9/5) * temperature + 32;
const windSpeed = document.getElementById("wind").innerHTML;
mphSpeed = windSpeed * 0.621371;

const windChill = document.getElementById("windChillFactor");

const windF = Math.round(35.74 + (0.6215 * tempF) - (35.75 * Math.pow(mphSpeed, 0.16)) + (0.4275 * tempF * Math.pow(mphSpeed, 0.16)));
const windC = Math.round(5/9 * (windF - 32));

windChill.innerHTML = windC;
