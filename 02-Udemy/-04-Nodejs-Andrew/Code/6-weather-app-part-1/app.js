// import { request } from "postman-request";
// const request = require("postman-request");
// import request from "postman-request";
import { geocode } from "./utils/geocode.js";
import { forecast } from "./utils/forecast.js";

// console.log("Starting");

// setTimeout(() => {
//   console.log("2 second timer");
// }, 2000);

// setTimeout(() => {
//   console.log("0 second timer");
// }, 0);

// console.log("Stoping");

// const url =
//   "http://api.weatherstack.com/current?access_key=3a155827946a2876a4893a1a4ccefeb3&query=37.8267,-122.4233&units=f";

// request({ url, json: true }, (error, response) => {
//   // const data = JSON.parse(response.body);
//   // console.log(data.current);
//   // console.log(response.body.current);
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     const current = response.body.current;
//     // console.log(current);
//     console.log(
//       `${current.weather_descriptions[0]}: It's currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out.`
//     );
//   }
// });

// const URL =
//   "https://api.maptiler.com/geocoding/Los%20Angeles.json?key=R3GCNgMbtyO3laDCCqrZ&limit=1";

// request({ url: URL, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.features.length === 0) {
//     console.log(
//       "Unable to find location! Please try again with diffrent term."
//     );
//   } else {
//     const longtude = response.body.features[0].center[0];
//     const latitude = response.body.features[0].center[1];{
//     console.log("Lat: ", latitude, "Long: ", longtude);
//   }
// });

const address = process.argv[2];

if (!address) {
  console.log("Please provide an address!");
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
    if (error) return console.log(error);

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) return console.log(error);

      console.log(location);
      console.log(forecastData);
    });
  });
}
