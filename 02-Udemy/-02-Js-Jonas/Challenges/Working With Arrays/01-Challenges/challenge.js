"use strict";

// Challenge #1
const juliaData1 = [3, 5, 2, 12, 7];
const kateData1 = [4, 1, 15, 8, 3];
const juliaData2 = [9, 16, 6, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const onlyDogsJulia = dogsJulia.slice(1, -2);
  const bothJuliaKateData = onlyDogsJulia.concat(dogsKate);

  bothJuliaKateData.forEach(function (dogAge, i) {
    const type =
      dogAge > 3 ? `an adult, and is ${dogAge} years old` : "still a puppy 🐶";
    console.log(`Dog number ${i + 1} is ${type}`);
  });
};

checkDogs(juliaData1, kateData1);
checkDogs(juliaData2, kateData2);
