let jpData = {
    area: "377,975 km²",
    population: "125.7 million",
    capital: "Tokyo",
    languages: "Japanese",
    currency: "Japanese Yen",
    timeZone: "UTC+9",
    callingCode: "+81",
    internetTLD: ".jp"
}

let jpWeather = {
    temperature: "(1°C)",
    conditions: "Mostly Clear",
    wind: "7 km/h"
}

document.querySelector('#area').textContent = jpData.area;
document.querySelector('#population').textContent = jpData.population;
document.querySelector('#capital').textContent = jpData.capital;
document.querySelector('#languages').textContent = jpData.languages;
document.querySelector('#currency').textContent = jpData.currency;
document.querySelector('#time').textContent = jpData.timeZone;
document.querySelector('#calling').textContent = jpData.callingCode;
document.querySelector('#internet').textContent = jpData.internetTLD;

document.querySelector('#temperature').textContent = jpWeather.temperature;
document.querySelector('#conditions').textContent = jpWeather.conditions;
document.querySelector('#wind').textContent = jpWeather.wind;

function calculateWindChill(tempC, windKmH) {
    let tempF = (tempC * 9/5) + 32;

    let windMph = windKmH * 0.621371;

    if (tempF <= 50 && windMph > 3) {
        let windChillF = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(windMph, 0.16)) + (0.4275 * tempF * Math.pow(windMph, 0.16));

        let windChillC = (windChillF - 32) * 5/9;
        return windChillC.toFixed(2); 
    } else {
        return "Wind chill formula not applicable";
    }
}

let tempC = 1;
let windKmH = 7;
let windChill = `${calculateWindChill(tempC, windKmH)}°C`;

document.querySelector('#chill').textContent = windChill;