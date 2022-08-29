// const request = require("request");
import request from "postman-request";

export const geocode = (address, callback) => {
  const URL = `https://api.maptiler.com/geocoding/${encodeURIComponent(
    address
  )}.json?key=R3GCNgMbtyO3laDCCqrZ&limit=1`;

  request({ url: URL, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.features.length === 0) {
      callback(
        "Unable to find location! Please try again with diffrent search.",
        undefined
      );
    } else {
      callback(undefined, {
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
};
