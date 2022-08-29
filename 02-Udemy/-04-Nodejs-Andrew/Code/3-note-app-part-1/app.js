// const fs = require("fs");
// import * as fs from "fs/promises";
// import * as fs from "fs";

// fs.writeFileSync("notes.txt", "My name is Ahmed");
// fs.appendFileSync("notes.txt", " and My age is 24");

// const name = require("./utils");

// console.log(name);

// const add = require("./utils");

// const sum = add(4, -2);

// console.log(sum);

// const validator = require("validator");
import chalk from "chalk";
// const chalk = require("chalk");

import { getNotes } from "./notes.js";

// const getNotes = require("./notes");
console.log(getNotes());

console.log(chalk.green("success!"));
console.log(chalk.red.inverse.bold("Error!!"));
console.log(chalk.blue.inverse.bold("Message..."));

// console.log(validator.isEmail("ahmed@example.com"));
// console.log(validator.isEmail("ahmed"));

// console.log(validator.isURL("https://ahmed.com"));
// console.log(validator.isURL("https/ahmed.com"));
