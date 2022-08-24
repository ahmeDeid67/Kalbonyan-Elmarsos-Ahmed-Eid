// Challenge #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(dolphinsTeam, koalasTeam) {
  if (dolphinsTeam > koalasTeam * 2) {
    return `Dolphins win (${dolphinsTeam} vs. ${koalasTeam})`;
  } else if (koalasTeam > dolphinsTeam * 2) {
    return `Koalas win (${koalasTeam} vs. ${dolphinsTeam})`;
  }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));
