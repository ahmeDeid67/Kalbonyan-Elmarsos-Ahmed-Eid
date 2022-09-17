import request from "postman-request";

export const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=3a155827946a2876a4893a1a4ccefeb3&query=${long},${lat}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback(
        "Unable to find location! Please try again with diffrent search.",
        undefined
      );
    } else {
      const current = body.current;
      callback(
        undefined,
        `${current.weather_descriptions[0]}: It's currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out.`
      );
    }
  });
};
