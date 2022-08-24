// Challenge #4
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1.
dogs.map((dog) => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2.
const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(sarahDog.curFood > sarahDog.recommendedFood);

// 3.
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];
dogs.map((dog) =>
  dog.curFood > dog.recommendedFood
    ? ownersEatTooMuch.push(dog.owners)
    : ownersEatTooLittle.push(dog.owners)
);
console.log(ownersEatTooMuch.flat());
console.log(ownersEatTooLittle.flat());

// 4.
console.log(`${ownersEatTooMuch.flat().join(" and ")}'s dogs eat too much!`);
console.log(
  `${ownersEatTooLittle.flat().join(" and ")}'s dogs eat too little!`
);

// 5.
console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

// 6.
console.log(
  dogs.some(
    (dog) =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);

// 7.
const okayFood = dogs.filter(
  (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(okayFood);

// 8.
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
