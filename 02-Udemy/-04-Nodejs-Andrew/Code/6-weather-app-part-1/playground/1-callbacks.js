// setTimeout(() => {
//   console.log("Two second are up");
// }, 2000);

// const names = ["Ahmed", "Eid", "Mahmoud"];
// const shortName = names.filter((name) => name.length < 4);

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };

//     callback(data);
//   }, 2000);
// };

// geocode("egypt", (data) => {
//   console.log(data);
// });

const add = (num1, num2, callback) => {
  setTimeout(() => {
    const sum = num1 + num2;

    callback(sum);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});
