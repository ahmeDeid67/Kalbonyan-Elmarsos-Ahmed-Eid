// LEACTURE: values and variables
const country = "Egypt";
const continent = "Africa";
let population = 110;
console.log(country); // Egypt
console.log(continent); // Africa
console.log(population); // 110

// LEACTURE: data types
const isIsland = true;
let language;
console.log(typeof isIsland); // boolean
console.log(typeof population); // number
console.log(typeof country); // string
console.log(typeof language); // undefiend

// LEACTURE: let, const and var
language = "Arabic";
population = 120;
console.log(population); // 115

// LEACTURE:  basic operator
let halfCountry = population / 2;
console.log(halfCountry, population++); // 60 121
const finlandPopulation = 6;
console.log(population > finlandPopulation); // true
const avaregeCountry = 33;
console.log(population < avaregeCountry); // false
const description1 =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description1);

// LEACTURE: Strings and template literals
const description2 = `${country} is in ${continent}, and it's ${population} million people speak ${language}`;
console.log(description2);

// LEACTURE: Taking decisions if/else statements
population = 15;
if (population > 33) {
  console.log(`${country}'s population is above avarage`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below avarage`
  );
}

// LEACTURE: type conversion and coercion
console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // '617'
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

// LEACTURE: equality operators == VS ===
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) {
//   console.log("Only one border");
// } else if (numNeighbours > 1) {
//   console.log("More than one border");
// } else {
//   console.log("No borders");
// }

// LEACTURE: logical operators
if (language === "english" && population < 50 && !isIsland) {
  console.log("You should live in egypt");
} else {
  console.log("egypt does not meet your criteria");
}

// LEACTURE: The switch statement
const lang = "arabic";
switch (lang) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken and greatest language");
    break;
  default:
    console.log("Great language too :D");
}

// LEACTURE: the conditional(ternary) operator
population = 130;
population > 33
  ? console.log(`${country}'s population is above avarage`)
  : console.log(`${country}'s population is below avarage`);
population = 110;
