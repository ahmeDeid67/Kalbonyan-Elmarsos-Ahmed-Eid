'use strict';

/*
/////////////////////////////////////////
// default parameter
////////////////////////////////////////
const bookings = [];

const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  // ES5
  // numPassenger = numPassenger || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', 200);
createBooking('LH123', 3, 200);
createBooking('LH123', 5);
console.log(bookings);
*/

/*
/////////////////////////////////////////
// How passing arguments works
value vs. reference
////////////////////////////////////////
const flight = 'LH234';
const ahmed = {
  name: 'Ahmed eid',
  passport: 1324354657678,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LM111';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 1324354657678) {
    alert('checkIn');
  } else {
    alert('Wrong passport!');
  }
};
// checkIn(flight, ahmed);
// console.log(flight, ahmed);

// Is the same as doing
// const flightNum = flight;
// const passenger = ahmed;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newPassport(ahmed);
checkIn(flight, ahmed);
*/

/*
/////////////////////////////////////////
// Functions accepting callback functions
////////////////////////////////////////
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const UpperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

// Higher order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`transformed by: ${fn.name}`);
};
transformer('Javascript is the best!!', UpperFirstWord);
transformer('Javascript is the best!!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);
['Ahmed', 'Sara', 'Ibrahiem'].forEach(high5);
*/

/*
/////////////////////////////////////////
// Functions returning functions
////////////////////////////////////////
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Ahmed');
greeterHey('Eid');

greet('Hey')('Ahmed');

//Arrow function
const greetArr = greeting => name => console.log(`${greeting}, ${name}`);
greetArr('Hey')('Eid');
*/

/*
/////////////////////////////////////////
// The call and apply methode
////////////////////////////////////////

const loufthansa = {
  airline: 'lufthansa',
  itatCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.itatCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.itatCode}${flightNum}`, name });
  },
};
loufthansa.book(365, 'Ahmed eid');
loufthansa.book(615, 'Mohamed sayed');
console.log(loufthansa);

const eurowings = {
  airline: 'Eurowings',
  itatCode: 'EW',
  bookings: [],
};

const book = loufthansa.book;

// does not work
// book(23, 'Sarah Smith');

// Call Methode
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(loufthansa, 345, 'Mary Smith');
console.log(loufthansa);

const swiss = {
  airline: 'Swiss air lines',
  itatCode: 'FA',
  bookings: [],
};

book.call(swiss, 246, 'Ahmed eid');
console.log(swiss);

// Apply Methode
const flightData = [123, 'Ahmed eid'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);


/////////////////////////////////////////
// The Bind methode
////////////////////////////////////////

// Bind Methode
const bookEW = book.bind(eurowings);
const bookFA = book.bind(swiss);
const bookLH = book.bind(loufthansa);

bookEW(23, 'ahmed eid');

const bookEW23 = book.bind(swiss, 29);
bookEW23('Sarah Williams');

// With event listeners
loufthansa.planes = 300;
loufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', loufthansa.buyPlane.bind(loufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(10));

const addTAX = function (value) {
  return function (rate) {
    return value + value * rate;
  };
};
console.log(addTAX(100)(0.23));
*/

/*
/////////////////////////////////////////
// Immediatley Invoked Functions Expressions
////////////////////////////////////////
const runOnce = function () {
  console.log('This will no run again!');
};
runOnce();
runOnce();

// IIFE
(function () {
  console.log('This will no run again!');
})();

(() => console.log('This also will no run again!'))();

{
  const isPrivate = 23;
  var notPrivate = 23;
}

// console.log(isPrivate);
console.log(notPrivate);
*/

/*
/////////////////////////////////////////
// Closures
////////////////////////////////////////
const secureBooking = function () {
  let countPassengers = 0;

  return function () {
    countPassengers++;
    console.log(`${countPassengers} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/

/*
/////////////////////////////////////////
// More Closure Example
////////////////////////////////////////
// Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

h();
f();

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(300, 3);
*/
