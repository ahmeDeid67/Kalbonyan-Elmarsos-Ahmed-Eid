// Coding Challenge #4

let bill = 430;
let tip;
bill >= 50 && bill <= 300
  ? console.log(
      `The bill was ${bill}, the tip was ${
        (15 / 100) * bill
      }, and the total value ${bill + (15 / 100) * bill}`
    )
  : console.log(
      `The bill was ${bill}, the tip was ${
        (20 / 100) * bill
      }, and the total value ${bill + (15 / 100) * bill}`
    );
