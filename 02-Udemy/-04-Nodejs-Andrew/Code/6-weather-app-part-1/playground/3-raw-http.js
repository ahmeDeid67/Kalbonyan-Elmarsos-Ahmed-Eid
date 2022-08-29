// const http = require("http");
import http from "http";

const url = `http://api.weatherstack.com/current?access_key=3a155827946a2876a4893a1a4ccefeb3&query=40,-75&units=f`;

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data += chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();
