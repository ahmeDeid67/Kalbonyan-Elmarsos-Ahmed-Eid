// LEACTURE: function
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const country1 = describeCountry("Egypt", 110, "Cairo");
const country2 = describeCountry("Finland", 6, "Helsinki");
const country3 = describeCountry("France", 60, "London");
console.log(country1, country2, country3);

// LEACTURE: function declaration VS expression
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentage1 = percentageOfWorld1(110);
const percentage2 = percentageOfWorld1(2370);
const percentage3 = percentageOfWorld1(400);
console.log(percentage1, percentage2, percentage3);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percentage4 = percentageOfWorld2(110);
const percentage5 = percentageOfWorld2(2370);
const percentage6 = percentageOfWorld2(400);
console.log(percentage1, percentage2, percentage3);

// LEACTURE: arrow function
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percentage7 = percentageOfWorld2(110);
const percentage8 = percentageOfWorld2(2370);
const percentage9 = percentageOfWorld2(400);
console.log(percentage1, percentage2, percentage3);

// LEACTURE: functions calling other functions
function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld3(
    population
  )}% of the world.`;
}

const describe1 = describePopulation("China", 1441);
const describe2 = describePopulation("Egypt", 110);
const describe3 = describePopulation("France", 230);
console.log(describe1, describe2, describe3);

// LEACTURE: introduction to arrays
const populations = [1441, 110, 230, 60];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

// LEACTURE: basic array operation (methodes)
const neighbours = ["Soudan", "Lybia"];
neighbours.push("Utopia");
neighbours.pop();
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central Euroean country :D");
}
neighbours[neighbours.indexOf("Lybia")] = "Sweeden";
console.log(neighbours);

// LEACTURE: introduction to objects
const myCountry = {
  country: "Egypt",
  capital: "Cairo",
  language: "Arabic",
  population: 110,
  neighbours: ["Soudan", "Lybia"],
};
console.log(myCountry);

// LEACTURE: Dot vs. Bracket notation
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry);
myCountry["population"] -= 2;
console.log(myCountry);

// LEACTURE: object methods
myCountry.describe = function () {
  console.log(
    `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
  );
};

console.log(myCountry.describe());

myCountry.checkIsland = function () {
  return (this.isIsland = this.neighbours.length === 0);
};

console.log(myCountry.checkIsland());

// LEACTURE: iteration the for loop
for (let vote = 1; vote <= 50; vote++) {
  console.log(`Voter number ${vote} is currently voting`);
}

// LEACTURE: Looping array, breaking and continuing
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

// LEACTURE: Looping backwards and loops in loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

// LEACTURE: The while loop
const percentages3 = [];
let i = 0;

while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log(percentages3);
