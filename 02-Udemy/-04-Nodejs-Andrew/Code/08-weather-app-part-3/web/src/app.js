import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import hbs from "hbs";
import { geocode } from "./utils/geocode.js";
import { forecast } from "./utils/forecast.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Ahmed Eid",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Ahmed Eid",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    name: "Ahmed Eid",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  }

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) return res.send({ error });

      forecast(latitude, longitude, (error, forecastData) => {
        if (error) return res.send({ error });

        // console.log(location);
        // console.log(forecastData);
        res.send({
          forecast: forecastData,
          location,
          address: req.query.address,
        });
      });
    }
  );
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }
  console.log(req.query);
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    errorMessage: "Help article not found!",
    name: "Ahmed eid",
    title: "404",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    errorMessage: "Page not found!",
    name: "Ahmed eid",
    title: "404",
  });
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
