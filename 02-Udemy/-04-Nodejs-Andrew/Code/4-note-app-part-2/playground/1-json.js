// import fs from "fs/promises";
const fs = require("fs");

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parseData = JSON.parse(bookJSON);
// console.log(parseData);
// console.log(parseData.author);

// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log(data);
// console.log(data.author);

const dataJSON = fs.readFileSync("1-json.json").toString();
const data = JSON.parse(dataJSON);

data.name = "Ahmed";
data.age = 24;

const dataJson = JSON.stringify(data);
fs.writeFileSync("1-json.json", dataJson);

console.log(dataJson);
