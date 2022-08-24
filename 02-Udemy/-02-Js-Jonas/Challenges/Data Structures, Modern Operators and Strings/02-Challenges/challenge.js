// Challenge #2
// 1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
const valuesOdd = Object.values(game.odds);
let res = 0;
for (const x of valuesOdd) {
  res += x;
}
console.log(res / valuesOdd.length);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  // console.log('Odd of victory', team, ':', odd);
  console.log(
    team === "x"
      ? `Odd of draw: ${odd}`
      : `Odd of victory ${game[team]}: ${odd}`
  );
}
// console.log(`Odd of victory ${game.team11}: ${game.odds.team11}`);
// console.log(`Odd of draw: ${game.odds.x}`);
// console.log(`Odd of victory ${game.team22}: ${game.odds.team22}`);

// 4.
const scorers = {};
for (const score of game.scored) {
  scorers[score] ? scorers[score]++ : (scorers[score] = 1);
}
console.log(scorers);
