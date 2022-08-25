'use strict';

/* scoping
function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1990 && birthYear <= 2010) {
      var millenial = true;
      const firstName = 'Mohamed';
      const str = `Oh, and you are millenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3));
      output = 'NEW OUTPUT!';
    }
    console.log(millenial);
    console.log(output);
  }

  printAge();
  // console.log(str);
  // console.log(add(2, 3));

  return age;
}

const firstName = 'Ahmed';
calcAge(1998);
// printAge();
// console.log(age);
*/

/* Hoisting **************
// variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Ahmed';
let job = 'developer';
const year = 1998;

// functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All Products Deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

/* This keyword ********
console.log(this);

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  // console.log(this);
};
calcAge(1998);

const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  // console.log(this);
};
calcAgeArrow(1998);

const ahmed = {
  year: 1998,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};
ahmed.calcAge();

const sara = {
  year: 2001,
};

sara.calcAge = ahmed.calcAge;
sara.calcAge();

const f = ahmed.calcAge;
console.log(f);
f();
*/

/* this & arguments   Keywords ******************
const ahmed = {
  firstName: 'Ahmed',
  year: 1998,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);

    // solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1990 && self.year <= 2010);
    // };

    // solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1990 && this.year <= 2010);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey, ${this.firstName}`);
  },
};

ahmed.greet();
ahmed.calcAge();


// Arguments Keywords
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 5, 7);
*/

/*
// primitive & refernce type ***********
let age = 23;
let oldAge = age;
age = 24;
console.log(oldAge);
console.log(age);

const me = {
  firstName: 'Ahmed',
  age: 24,
};

const friend = me;
friend.age = 26;

console.log('Me:', me);
console.log('Friend:', friend);

// Primitive type
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

// Reference type
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marrage:', jessica);
console.log('After marrage:', marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const JessicaCopy = Object.assign({}, jessica2);
JessicaCopy.lastName = 'Davis';

JessicaCopy.family.push('Mary', 'Jhon');

console.log('Before marrage:', jessica2);
console.log('After marrage:', JessicaCopy);
*/
