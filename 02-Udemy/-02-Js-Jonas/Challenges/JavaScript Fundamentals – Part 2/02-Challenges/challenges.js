// Challenge #2
function calcTip(b) {
  if (b > 50 && b < 300) {
    return b * 0.15;
  } else {
    return b * 0.2;
  }
}
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(125), calcTip(555), calcTip(44)];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);
