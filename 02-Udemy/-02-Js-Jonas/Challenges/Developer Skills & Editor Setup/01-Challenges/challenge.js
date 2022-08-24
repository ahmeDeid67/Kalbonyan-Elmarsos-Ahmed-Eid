// Challenge #1

function printForcast(arr) {
  let string = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      string += ` ... ${arr[i]}c in ${i + 1} days ...`;
    } else {
      string += ` ... ${arr[i]}c in ${i + 1} days`;
    }
  }
  console.log(string);
}

printForcast([17, 21, 23]);
printForcast([12, 5, -5, 0, 4]);
