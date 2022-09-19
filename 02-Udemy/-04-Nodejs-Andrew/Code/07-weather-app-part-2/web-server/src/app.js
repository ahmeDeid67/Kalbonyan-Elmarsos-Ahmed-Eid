import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import hbs from "hbs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, "../public"));

const app = express();

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

// app.get("", (req, res) => {
//   // res.send("Hello express!");
//   res.send("<h1>Weather</h1>");
// });

// app.get("/help", (req, res) => {
//   // res.send("Help page");
//   res.send({
//     name: "Ahmed",
//     age: 24,
//   });
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About page</h1>");
// });

app.get("/weather", (req, res) => {
  // res.send("Show weather");
  res.send({
    forecast: "'It's sunny",
    location: "egypt",
  });
});

app.get("/help/*", (req, res) => {
  // res.send("Help article not found!");
  res.render("404", {
    errorMessage: "Help article not found!",
    name: "Ahmed eid",
    title: "404",
  });
});

app.get("*", (req, res) => {
  // res.send("My 404 Page");
  res.render("404", {
    errorMessage: "Page not found!",
    name: "Ahmed eid",
    title: "404",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
