// Codeing Challenge #3

let dScore1 = 97;
let dScore2 = 112;
let dScore3 = 101;
let kScore1 = 109;
let kScore2 = 95;
let kScore3 = 106;
let dAvarage = (dScore1 + dScore2 + dScore3) / 3;
let kAvarage = (kScore1 + kScore2 + kScore3) / 3;

if (dAvarage > kAvarage) {
  console.log("Dolphins Winner!");
} else if (dAvarage < kAvarage) {
  console.log("Koalas Winner!");
} else {
  console.log("DRAW!!");
}
