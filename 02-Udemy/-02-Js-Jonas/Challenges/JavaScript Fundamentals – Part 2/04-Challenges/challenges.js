// Challenge #4
const billsData = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsResult = [];
const totalSum = [];

for (let i = 0; i < billsData.length; i++) {
  const result = calcTip(billsData[i]);
  tipsResult.push(result);
  totalSum.push(result + billsData[i]);
}

console.log(tipsResult, totalSum);

function calcuAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcuAverage(totalSum));
