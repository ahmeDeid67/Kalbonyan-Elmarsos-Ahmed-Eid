// Primitives: number, string, booleam
// More complex type: arrays, objects
// Function type, parameters

// Primitives
let age: number = 24;
let userName: string = "Ahmed";
let isHappy: boolean = true;

// More complex types

let hoppies: string[] = ["sports", "reading"];

// Type aliases

type Person = {
  name: string;
  age: number;
};

let person: Person = {
  name: "Ahmed",
  age: 23,
};

// person = {
//   isHappy: true,
// }

let people: Person[] = [
  {
    name: "Ahmed",
    age: 24,
  },
];

// Type inference

let course = "React";

// course = 12

// Union type

let course2: string | number = "React";

course2 = 12;

// Functions & types

function addSum(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBegining<T>(array: T[], value: T) {
  let newArr = [value, ...array];
  return newArr;
}

let demoArr = [1, 2, 3];

let updaredArr = insertAtBegining(demoArr, -1);
let stringArr = insertAtBegining(["a", "b"], "c");
