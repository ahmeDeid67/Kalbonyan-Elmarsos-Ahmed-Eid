'use strict';

/////////////////////////////////////////////////////////
// Constructor
////////////////////////////////////////////////////////

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(2022 - birthYear);
  // };
};

const ahmed = new Person('Ahmed eid', 1998);
console.log(ahmed);

const matilda = new Person('Matelda', 2001);
const Jack = new Person('Matelda', 1975);
console.log(matilda, Jack);

console.log(ahmed instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

ahmed.calcAge();
matilda.calcAge();
Jack.calcAge();

console.log(ahmed.__proto__);
console.log(ahmed.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(ahmed));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Home sapines';
console.log(matilda.species, ahmed.species);

console.log(ahmed.hasOwnProperty('firstName'));
console.log(ahmed.hasOwnProperty('species'));

console.log(ahmed.__proto__);
// Object.prototype is the top of prototype chain
console.log(ahmed.__proto__.__proto__);
console.log(ahmed.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 3, 9, 9]; // [] === new array
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/

/////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////

// Class expression
// const PersonCl = class {}

// Class declaration
// class PresonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAgee() {
//     console.log(2022 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey, ${this.fullName}`);
//   }

//   get age() {
//     return 2022 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hey there 🙋‍♂️');
//     console.log(this);
//   }
// }

// const jessica = new PresonCl('Jessica Daives', 1990);
// jessica.calcAgee();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PresonCl.prototype);

// const walter = new PresonCl('Walter White', 1965);

// PresonCl.hey();

// // PresonCl.prototype.greet = function () {
// //   console.log(`Hey, ${this.firstName}`);
// // };
// jessica.greet();

/////////////////////////////////////////////////////////
// Getter and setter
////////////////////////////////////////////////////////

// const account = {
//   owner: 'Ahmed',
//   movements: [200, 300, 450, 100],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

/////////////////////////////////////////////////////////
// Object.create
////////////////////////////////////////////////////////

// const PersonProto = {
//   calcAgee() {
//     console.log(2022 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// steven.firstName = 'Steven';
// steven.birthYear = 1997;
// steven.calcAgee();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAgee();

/////////////////////////////////////////////////////////
// Inheritance between classes
////////////////////////////////////////////////////////

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and i study ${this.course}`);
// };

// const mike = new Student('Mike', 1995, 'Computer Science');
// mike.introduce();
// console.log(mike.course);
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Person.prototype.constructor = Student;
// console.dir(Person.prototype.constructor);

/////////////////////////////////////////////////////////
// Inheritance between classes
////////////////////////////////////////////////////////

// class PresonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAgee() {
//     console.log(2022 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey, ${this.fullName}`);
//   }

//   get age() {
//     return 2022 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hey there 🙋‍♂️');
//     console.log(this);
//   }
// }

// class StudentCl extends PresonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   calcAgee() {
//     console.log(
//       `I am ${2022 - this.birthYear} but i feel i am ${
//         2022 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.calcAgee();

// const PersonProto = {
//   calcAgee() {
//     console.log(2022 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and i study ${this.course}`);
// };

// const Jay = Object.create(StudentProto);
// Jay.init('Jay', 2010, 'Computer Science');
// Jay.introduce();
// Jay.calcAgee();

/////////////////////////////////////////////////////////
// Class example
////////////////////////////////////////////////////////

class Account {
  // Public Field (instances)
  locale = navigator.language;

  // Private Field (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected Proberty
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening new account, ${owner}`);
  }

  // Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdrawl(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) this.deposit(val);
    if (this._approveLoan(val)) this.deposit(val);
    console.log('Request approved');
    return this;
  }

  static helper() {
    console.log('Helper');
  }

  // Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const ahmed = new Account('Ahmed', 'EGY', 2222);
ahmed.deposit(200);
ahmed.withdrawl(120);
ahmed.requestLoan(200);

console.log(ahmed.getMovements());
console.log(ahmed);
// console.log(ahmed.#movements);
// console.log(ahmed.#approveLoan(200));

Account.helper();

ahmed
  .deposit(200)
  .deposit(3000)
  .withdrawl(25000)
  .requestLoan(2500)
  .withdrawl(4000);

console.log(ahmed.getMovements());
