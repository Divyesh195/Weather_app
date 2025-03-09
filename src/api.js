
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "ac24c06f20msh1c2dc834fd995dap1578fbjsnbd97de0bc8de",
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    },
  };

const GetWeather = (city) => {
    // const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=Vadodara&days=3`;
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`;

  fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      temp_c.innerHTML = response.current.temp_c + '' +"°C";
      temp_f.innerHTML = response.current.temp_f+ '' + "°F";
      condition.innerHTML = response.current.condition.text;
      humidity.innerHTML = response.current.humidity;
      pressure.innerHTML = response.current.pressure_mb;
      wind_kph.innerHTML = response.current.wind_kph+ '' + " K/H";
      wind_degree.innerHTML = response.current.wind_degree+ '' + "°";
      sunrise.innerHTML = response.forecast.forecastday[0].astro.sunrise;
      sunset.innerHTML = response.forecast.forecastday[0].astro.sunset;
      moon.innerHTML = response.forecast.forecastday[0].astro.moon_phase;
      xxx.innerHTML= response.location.name;
      yyy.innerHTML = response.location.name;
      region.innerHTML = response.location.region;
      latitude.innerHTML = response.location.lat;
      longitude.innerHTML = response.location.lon;
      localtime.innerHTML = response.location.localtime;
      // document.getElementById(location).innerHTML = response.location.name;
    })
    .catch((err) => console.error(err));
}

btnsub.addEventListener("click",(e)=>{
  e.preventDefault(); 
  GetWeather(xyz.value);
})



GetWeather("Dallas");

//  Current [{
//     "last_updated_epoch": 1738147500,
//     "last_updated": "2025-01-29 16:15",
//     "temp_c": 30,
//     "temp_f": 86,
//     "is_day": 1,
//     "condition": {
//         "text": "Overcast",
//         "icon": "//cdn.weatherapi.com/weather/64x64/day/122.png",
//         "code": 1009
//     },
//     "wind_mph": 9.2,
//     "wind_kph": 14.8,
//     "wind_degree": 277,
//     "wind_dir": "W",
//     "pressure_mb": 1010,
//     "pressure_in": 29.83,
//     "precip_mm": 0,
//     "precip_in": 0,
//     "humidity": 19,
//     "cloud": 0,
//     "feelslike_c": 27.8,
//     "feelslike_f": 82,
//     "windchill_c": 32.3,
//     "windchill_f": 90.2,
//     "heatindex_c": 30.1,
//     "heatindex_f": 86.2,
//     "dewpoint_c": -0.4,
//     "dewpoint_f": 31.3,
//     "vis_km": 4,
//     "vis_miles": 2,
//     "uv": 1.1,
//     "gust_mph": 10.9,
//     "gust_kph": 17.5
// }]

// Forecast [
//     {
//         "sunrise": "07:21 AM",
//         "sunset": "06:25 PM",
//         "moonrise": "07:16 AM",
//         "moonset": "06:18 PM",
//         "moon_phase": "New Moon",
//         "moon_illumination": 0,
//         "is_moon_up": 0,
//         "is_sun_up": 0
//     }
//     {
//         {
//             "maxtemp_c": 32.7,
//             "maxtemp_f": 90.8,
//             "mintemp_c": 18.4,
//             "mintemp_f": 65.1,
//             "avgtemp_c": 24.7,
//             "avgtemp_f": 76.5,
//             "maxwind_mph": 10.5,
//             "maxwind_kph": 16.9,
//             "totalprecip_mm": 0,
//             "totalprecip_in": 0,
//             "totalsnow_cm": 0,
//             "avgvis_km": 10,
//             "avgvis_miles": 6,
//             "avghumidity": 15,
//             "daily_will_it_rain": 0,
//             "daily_chance_of_rain": 0,
//             "daily_will_it_snow": 0,
//             "daily_chance_of_snow": 0,
//             "condition": {
//                 "text": "Sunny",
//                 "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
//                 "code": 1000
//             },
//             "uv": 1.5
//         }
//     }
// ]

// location [{
//     "name": "Ahmedabad",
//     "region": "Gujarat",
//     "country": "India",
//     "lat": 23.0333,
//     "lon": 72.6167,
//     "tz_id": "Asia/Kolkata",
//     "localtime_epoch": 1738147801,
//     "localtime": "2025-01-29 16:20"
// }]
