/* 
let js = "amazing";
// if (js === "amazing") alert("That is FUN!");
console.log(10 + 10);

console.log("Ahmed");
console.log(23);

let firstName = "Ahmed";
// with variable we can easly change the values
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name in javascript
// to best practice use camle case to name the variable
// Don't allow to start with number and reserved word like (let, if, new)
// Don't allow use special character
// You can use _ - and number
// Make name to be descriptive the value

let myFirstJob = "Doctor";
let myCurrentJob = "Coder";
console.log(myCurrentJob);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun); // true

console.log(typeof true); // boolean
console.log(typeof javascriptIsFun); // boolean
console.log(typeof 20); // number
console.log(typeof "Ahmed"); // string

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun); // string

let year;
console.log(year); // undefiend
console.log(typeof year); // undefiend

year = 1998;
console.log(typeof year); // number

// This is a bug with javascript
console.log(typeof null); // object
*/

/*
// let, const and var
let age = 22;
age = 23;

const birthYear = 1998;
// birthYear = 1999;
// const job;

var job = "programer";
job = "teacher";

lastName = "Eid"; // always declare the variable
console.log(lastName); // Eid
*/

/*
//Math operator
const now = 2060;
const ageAhmed = now - 1998;
const ageSara = now - 2001;
console.log(ageAhmed, ageSara); // 62 59
console.log(ageAhmed * 2, ageAhmed / 10, 2 ** 3); // 124 6.2 8

const firrstName = "Ahmed";
const lastName = "Eid";
console.log(firrstName + " " + lastName); // Ahmed Eid

// Assignment operator
let x = 5 + 10;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x); // 99

// Comparison operator
console.log(ageAhmed > ageSara); // true  (>, <, >=, <=)
console.log(ageSara >= 40); // true

const isFullAge = ageSara >= 40;

// mathe first then comparison
console.log(now - 1998 > now - 2001); // true
*/

/*
const now = 2060;
const ageAhmed = now - 1998;
const ageSara = now - 2001;
console.log(now - 1998 > now - 2001); // true

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y); // 10 10

const averageAge = (ageAhmed + ageSara) / 2;
console.log(ageAhmed, ageSara, averageAge);
*/

/*
const firstName = "Ahmed";
const job = "developer";
const birth = 1998;
const year = 2022;

const ahmed =
  "I'am " + firstName + ", a " + (year - birth) + " years old " + job + "!";
console.log(ahmed);

const newAhmed = `I'am ${firstName}, a ${year - birth} year old ${job}!`;
console.log(newAhmed);

console.log("String with \n\
multiple \n\
line");

console.log(`string with
multiple
line`);
*/

/*
const age = 15;

if (age >= 18) {
  console.log("sara is ready to start license 🚗");
} else {
  const yearLeft = 18 - age;
  console.log(
    `sara is too young. you need to wait another ${yearLeft} years :)`
  );
}

const birthYear = 1998;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/*
// Type conversion
const inputYear = "1998";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 20);

console.log(Number("ahmed"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);
*/

/*
// 5 falsy values: 0, '', undefiend, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Ahmed"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spent it all ;)");
} else {
  console.log("You should got a job!");
}

let height;
if (height) {
  console.log("YAY! height is defiend");
} else {
  console.log("Height is UNDEFIEND");
}
*/

/*
const age = "18";

if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favorite number?"));

if (favourite === 23) {
  console.log("Cool! Number is amazing");
} else if (favourite === 7) {
  console.log("also 7 is amazing number");
} else if (favourite === 9) {
  console.log("also 9 is amazing number");
} else {
  console.log("number is not 9 or 7 or 23");
}

if (favourite !== 23) console.log("Why not 23!");
*/

/*
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log("sara is able to drive!");
} else {
  console.log("Someone else should drive");
}

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("sara is able to drive!");
} else {
  console.log("Someone else should drive");
}
*/

/*
const day = "friday";
switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuseday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code example");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuseday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code example");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day");
}
*/

/*
const age = 18;
// age >= 18
//   ? console.log("I like to drink cofee")
//   : console.log("I like to drink milk");

const drink = age >= 18 ? "cofee" : "milk";
console.log(`I like to drink ${drink}`);
*/
