'use strict';

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
      dogAge > 3 ? `an adult, and is ${dogAge} years old` : 'still a puppy 🐶';
    console.log(`Dog number ${i + 1} is ${type}`);
  });
};

checkDogs(juliaData1, kateData1);
checkDogs(juliaData2, kateData2);

// Challenge #2
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  const filterDogs = humanAges.filter(age => age > 18);
  const average =
    filterDogs.reduce((acc, cur) => acc + cur, 0) / filterDogs.length;
  return average;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// Challenge #3
const calcAverageHumanAge2 = ages =>
  ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age > 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]));

// Challenge #4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.map(dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2.
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog.curFood > sarahDog.recommendedFood);

// 3.
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];
dogs.map(dog =>
  dog.curFood > dog.recommendedFood
    ? ownersEatTooMuch.push(dog.owners)
    : ownersEatTooLittle.push(dog.owners)
);
console.log(ownersEatTooMuch.flat());
console.log(ownersEatTooLittle.flat());

// 4.
console.log(`${ownersEatTooMuch.flat().join(' and ')}'s dogs eat too much!`);
console.log(
  `${ownersEatTooLittle.flat().join(' and ')}'s dogs eat too little!`
);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.
console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);

// 7.
const okayFood = dogs.filter(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(okayFood);

// 8.
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
