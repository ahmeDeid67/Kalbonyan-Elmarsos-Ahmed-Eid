"use strict";

let game = {
  team11: "Bayern Munich",
  team22: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team11: 1.33,
    x: 3.25,
    team22: 6.5,
  },
  printGoals: function (...players) {
    console.log(`${players.length} goals was scored.`);
  },
};

// Challenge #1
const [team1, team2] = game.players;
console.log(team1, team2);

const [gk, ...fieldPlayers] = team1;
console.log(gk, fieldPlayers);

const allPlayers = [...team1, ...team2];
console.log(allPlayers);

const players1Final = [...team1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

const {
  odds: { team11, x: draw, team22 },
} = game;
console.log(team11, draw, team22);

game.printGoals("Lewandowski", "Gnarby", "Lewandowski", "Hummels");

team11 < team22 && console.log("Team 1 is more likely to win");
team11 > team22 && console.log("Team 2 is more likely to win");
