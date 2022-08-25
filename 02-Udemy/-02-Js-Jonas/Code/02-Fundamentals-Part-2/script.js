"use strict"; // Always use this for more security or clean code :D

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");
*/

/*
function logger() {
  console.log("My name is ahmed");
}

// (calling - running - invoking) the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
// Function Declaration
function calcAge1(birthYear) {
  // you can call before defined it
  return 2065 - birthYear;
}

const age1 = calcAge1(1998);

// Function Expression
const calcAge2 = function (birthYear) {
  // you can not call before defined it
  return 2065 - birthYear;
};

const age2 = calcAge2(1998);
console.log(age1, age2);
*/

/*
const calcAge3 = (birthYear) => 2065 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2055 - birthYear;
  const retirement = 60 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1998, "Ahmed"));
*/

/*
///////////////////////////////////////
functions calling other functions
//////////////////////////////////////

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(3, 2));
*/

/*
///////////////////////////////////////
reviewing function
//////////////////////////////////////
const calcAge = function (birthYear) {
  return 2055 - birthYear;
};

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }
  // return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1998, "Ahmed"));
console.log(yearsUntilRetirement(1990, "Mohamed"));
*/

/*
///////////////////////////////////////
introduction to array
//////////////////////////////////////
const friend1 = "Ahmed";
const friend2 = "Mohamed";
const friend3 = "samy";

const friends = ["Ahmed", "Mohamed", "Samy"];
console.log(friends);

const y = new Array(1998, 1993, 1995);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Ibrahem";
console.log(friends);
// friends = ["A", "B"];

const firstName = "Ahmed";
const ahmed = [firstName, "Eid", 2022 - 1998, "Developer", friends];

console.log(ahmed);
console.log(ahmed.length);

function calcAge1(birthYear) {
  return 2065 - birthYear;
}

const years = [2010, 1998, 1990, 2000, 2016, 1995];
const age1 = calcAge1(years[0]);
const age2 = calcAge1(years[1]);
const age3 = calcAge1(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge1(years[0]),
  calcAge1(years[1]),
  calcAge1(years[years.length - 1]),
];
console.log(ages);
*/

/*
///////////////////////////////////////
Some methodes with array
//////////////////////////////////////
const friends = ["Ahmed", "Mohamed", "Samy"];

// Add elements
const newLength = friends.push("Salah");
console.log(newLength);
console.log(friends);

friends.unshift("Sohaib");
console.log(friends);

// Remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Ahmed"));
console.log(friends.indexOf("Mohamed"));

friends.push(23);
console.log(friends.includes("Ahmed"));
console.log(friends.includes("Magdy"));
console.log(friends.includes(23));

if (friends.includes("Mohamed")) {
  console.log("You have a friend called Ahmed");
}
*/

/*
///////////////////////////////////////
introduction to object
//////////////////////////////////////
const ahmedArray = [
  "Ahmed",
  "Eid",
  2022 - 1998,
  "developer",
  ["Ibrahem", "Sayed", "Osama"],
];

const ahmed = {
  firstName: "Ahmed",
  lastName: "Eid",
  age: 2022 - 1998,
  job: "developer",
  friends: ["Ibrahem", "Sayed", "Osama"],
};

console.log(ahmed);
*/

/*
///////////////////////////////////////
dot vs. bracket notation
//////////////////////////////////////
const ahmed = {
  firstName: "Ahmed",
  lastName: "Eid",
  age: 2022 - 1998,
  job: "developer",
  friends: ["Ibrahem", "Sayed", "Osama"],
};

console.log(ahmed);

console.log(ahmed.firstName);
console.log(ahmed["firstName"]);

const keyName = "Name";
console.log(ahmed["first" + keyName]);
console.log(ahmed["last" + keyName]);

const interestedIn = prompt(
  "What do you want to know about ahmed? Choose between firstName, lastName, age, job and friends"
);

if (ahmed[interestedIn]) {
  console.log(ahmed[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends"
  );
}

ahmed.location = "Egypt";
ahmed["twitter"] = "@AhmedEid9867";
console.log(ahmed);

console.log(
  `${ahmed.firstName} has ${ahmed.friends.length} friends, and his best friend is called ${ahmed.friends[0]}`
);
*/

/*
///////////////////////////////////////
object methods
//////////////////////////////////////
const ahmed = {
  firstName: "Ahmed",
  lastName: "Eid",
  birthYear: 1998,
  job: "developer",
  friends: ["Ibrahem", "Sayed", "Osama"],
  hasDriverLicense: true,
  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2022 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.age}-year old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`;
  },
};

console.log(ahmed);
console.log(ahmed.calcAge());
console.log(ahmed.age);
console.log(ahmed.age);
console.log(ahmed.age);
console.log(ahmed.getSummary());
*/

/*
///////////////////////////////////////
iteration: the for loop
//////////////////////////////////////
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repitition ${rep} 🏋️`);
}
*/

/*
///////////////////////////////////////
Looping array
//////////////////////////////////////
const ahmed = [
  "Ahmed",
  "Eid",
  2022 - 1998,
  "developer",
  ["Ibrahem", "Sayed", "Osama"],
  true,
];
const types = [];

for (let i = 0; i < ahmed.length; i++) {
  console.log(ahmed[i], typeof ahmed[i]);
  // types[i] = typeof ahmed[i]
  types.push(typeof ahmed[i]);
}

console.log(types);

const years = [1990, 1998, 2010, 1900];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(ages);

// continue & break
console.log("--- ONLY STRING ---");
for (let i = 0; i < ahmed.length; i++) {
  if (typeof ahmed[i] !== "string") continue;
  console.log(ahmed[i], typeof ahmed[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < ahmed.length; i++) {
  if (typeof ahmed[i] === "number") break;
  console.log(ahmed[i], typeof ahmed[i]);
}
*/

/*
///////////////////////////////////////
Looping backwards and loop in loop
//////////////////////////////////////
const ahmed = [
  "Ahmed",
  "Eid",
  2022 - 1998,
  "developer",
  ["Ibrahem", "Sayed", "Osama"],
  true,
];

for (let i = ahmed.length - 1; i >= 0; i--) {
  console.log(i, ahmed[i]);
}

for (let excercise = 1; excercise < 4; excercise++) {
  console.log(`-------- Starting Excercise ${excercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Excercise ${excercise}: Lifting weights repetition ${rep} 🏋️`);
  }
}
*/

/*
///////////////////////////////////////
Loop with while loop
//////////////////////////////////////
let rep = 1;
while (rep <= 10) {
  console.log(`While: Lifting weights repetition ${rep} 🏋️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end...`);
}
*/
