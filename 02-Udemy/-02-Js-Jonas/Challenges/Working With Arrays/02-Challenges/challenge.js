// Challenge #2
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));
  const filterDogs = humanAges.filter((age) => age > 18);
  const average =
    filterDogs.reduce((acc, cur) => acc + cur, 0) / filterDogs.length;
  return average;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
