'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

console.log(flights.split('+'));
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  // console.log(type, from, to, time);
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} From ${from.slice(0, 3).toUpperCase()} To ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
  // console.log(flights.split('+')[0].length);
  // console.log(type);
}
// Data needed for first part of the section
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Javascript Es6 inhance object literals
  openingHours,
  orderDelivery({ starterIndex = 0, mainIndex = 1, time = '20:00', address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngridient, ...otherIngridient) {
    console.log(mainIngridient);
    console.log(otherIngridient);
  },
};

/*
///////////////////////////////////
// Working with string part 3
///////////////////////////////////
// Split & join
console.log('a+very+nice+string'.split('+'));
console.log('Ahmed Eid'.split(' '));

const [firstName, lastName] = 'Ahmed Eid'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const nameUpper = [];

  for (const x of names) {
    // nameUpper.push(x[0].toUpperCase() + x.slice(1));
    nameUpper.push(x.replace(x[0], x[0].toUpperCase()));
  }
  console.log(nameUpper.join(' '));
};
capitalizeName('ahmed eid');
capitalizeName('i have some problem in my code.');

// Padding
const message = ' Go to gate 23!';
console.log(message.padStart(25, '+ ').padEnd(35, ' +'));
console.log('Ahmed'.padStart(10, '-').padEnd(20, '-'));

const maskCredtCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCredtCard(232556788997766544));
console.log(maskCredtCard('1234243565778788980080'));
console.log(maskCredtCard(34354556));

// Repeat
const message2 = 'Bad weather... All departuers delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
*/

/*
///////////////////////////////////
// Working with string part 2
///////////////////////////////////
const airLine = 'TAP Air Egypt';

console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

// Fix capitalization in name
const passenger = 'aHmED';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Check email
const email = 'hello@ahmed.io';
const loginEmail = '  Hello@Ahmed.Io \n';

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(normalizedEmail === email);

// Replacing
const priceGB = '288,97&';
const priceUS = priceGB.replace('&', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23.Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';

console.log(plane.includes('A320'));
console.log(plane.includes('AH'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo'))
  console.log('Part of the new airbus family');

// Practice
const chechBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcom aboard!');
  }
};
chechBaggage('I have a labtop, some food and a pocket Knife');
chechBaggage('Socks and camera');
chechBaggage('Got some snaks and a gun for protection');
*/

/*
///////////////////////////////////
// Working with string part 1
///////////////////////////////////
const airLine = 'TAP Air Egypt';
const plane = 'A320';

console.log(airLine[0]);
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log('B737'.length);
console.log(airLine.length);

console.log(airLine.indexOf('r'));
console.log(airLine.lastIndexOf('r'));
console.log(airLine.indexOf('Egypt'));

console.log(airLine.slice(4));
console.log(airLine.slice(4, 7)); // Not include the end

console.log(airLine.slice(0, airLine.indexOf(' ')));
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));

console.log(airLine.slice(-2));
console.log(airLine.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got the lucky seat');
};

checkMiddleSeat('13B');
checkMiddleSeat('70C');
checkMiddleSeat('8E');

console.log(new String('Ahmed'));
console.log(typeof new String('Ahmed'));
console.log(typeof new String('Ahmed').slice(1));
*/

/*
///////////////////////////////////
// MAPS Iteration
///////////////////////////////////
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Well Done'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hourMap = new Map(Object.entries(openingHours));
console.log(hourMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(answer === question.get('correct')));

// Convert map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/*
///////////////////////////////////
// MAPS Fundamentals
///////////////////////////////////
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest);

rest
  .set('cateogries', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');

console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('cateogries'));
console.log(rest.delete(2));
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.get(arr));
console.log(rest);
console.log(rest.size);
*/

/*
///////////////////////////////////
// SETS
///////////////////////////////////
const orderSets = new Set([
  'pasta',
  'pizza',
  'pasta',
  'pizza',
  'rissoto',
  'pizza',
]);

console.log(orderSets);
console.log(new Set('Ahmed'));

console.log(orderSets.size);
console.log(orderSets.has('pizza'));
console.log(orderSets.has('bread'));
console.log(orderSets.add('tomato'));
console.log(orderSets.add('tomato'));
orderSets.delete('pasta');
// orderSets.clear();
console.log(orderSets);

for (const order of orderSets) console.log(order);

const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);

console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
);

console.log(new Set('Ahmedeid').size);
*/

/*
///////////////////////////////////
// Looping Object
///////////////////////////////////
const proprities = Object.keys(openingHours);
console.log(proprities);
let openStr = `We are open in ${proprities.length} days: `;

for (const day of proprities) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entry Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day}, we open at ${open} and close at ${close}`);
}
*/

/*
///////////////////////////////////
// Optional Chaining
///////////////////////////////////
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon);

// With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`ON ${day}, we open at ${open}`);
}

// Methodes
console.log(restaurant.order?.(0, 1) ?? 'Methode does not exist');
console.log(restaurant.orderRossito?.(0, 1) ?? 'Methode does not exist');

// Arrays
const users = [{ name: 'Ahmed', email: 'Ahmed Eid' }];
console.log(users[0]?.name ?? 'User does not exist');
console.log(users[1]?.name ?? 'User does not exist');
*/

/*
///////////////////////////////////
// The for of loop
///////////////////////////////////
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/

/*
///////////////////////////////////
// Logical Assignment Operators
///////////////////////////////////
const res1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const res2 = {
  name: 'La Piazza',
  owner: 'Ahmed',
};

// OR assignment operator
// res1.numGuests = res1.numGuests || 10;
// res2.numGuests = res2.numGuests || 10;
// res1.numGuests ||= 10;
// res2.numGuests ||= 10;

// Nulish assignment operator
res2.numGuests ??= 10;
res2.numGuests ??= 10;

// AND assignment operator
// res1.owner = res1.owner && '<ANONYMOUS>';
// res2.owner = res2.owner && '<ANONYMOUS>';

res1.owner &&= '<ANONYMOUS>';
res2.owner &&= '<ANONYMOUS>';

console.log(res1);
console.log(res2);
*/

/*
///////////////////////////////////
// Nulish
///////////////////////////////////
restaurant.guestes = 0;
const guestes2 = restaurant.guestes || 10;
console.log(guestes2);

// Nulish (undefiend , null) NOT (0 , '')
const guessCorect = restaurant.guestes ?? 10;
console.log(guessCorect);
*/

/*
///////////////////////////////////
// Short Circiting (&& , ||)
///////////////////////////////////
console.log('------ OR -------');
console.log(3 || 'Ahmed');
console.log('' || 'Ahmed');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Ahmed' || false || null);

restaurant.guestes = 24;
const guestes1 = restaurant.guestes ? restaurant.guestes : 10;
console.log(guestes1);

const guestes2 = restaurant.guestes || 10;
console.log(guestes2);
console.log('------ AND -------');

console.log(0 && 'Ahmed');
console.log(7 && 'Ahmed');
console.log('Ahmed' && 24 && null && 10);

if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushroom', 'Olives');
}

restaurant.orderPizza && restaurant.orderPizza('Mushroom', 'Olives');
*/

/*
///////////////////////////////////
// Rest Operator
///////////////////////////////////

// 1. Destructuring
// Spread: beacause on the right side of =
const arr = [1, 2, 3, 5, ...[6, 7]];
console.log(arr);

// Rest: beacause on the left side of =
const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(a, b, other);

const [pizza, , rosita, ...others] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
console.log(pizza, rosita, others);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2. functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(2, 4, 5, 6, 7, 8, 8, 9);
add(10, 11, 2, 33, 4);

const x = [23, 4, 5];
add(...x);

restaurant.orderPizza('Mushroom', 'Onion', 'Tomato', 'Olives');
*/

/*
///////////////////////////////////
// Spread Operator
///////////////////////////////////
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 array
const joinArr = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(joinArr);

// Itrables: array, string, maps, sets NOT (Object)
const str = 'Ahmed';
const letters = [...str, ' ', 's.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Ahmed`);

// Real-world example
const ingredients = [
  prompt("Let's make pasta! ingredient 1?"),
  prompt('ingredient 2?'),
  prompt('ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Ahmed' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Sara';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
///////////////////////////////////
// Destructuring Object
///////////////////////////////////
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sol, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del sol, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Defaul values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 1, b: 2, c: 3 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
///////////////////////////////////
// Destructuring Array
///////////////////////////////////
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Recieve 2 return value from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [num, , arr2] = nested;
const [num, , [i, j]] = nested;

console.log(num, i, j);

// Default values
const [q = 1, s = 1, r = 1] = [8];
console.log(q, s, r);
*/
