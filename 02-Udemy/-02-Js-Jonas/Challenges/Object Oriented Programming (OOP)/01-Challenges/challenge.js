// Challenge #1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log(`${this.make}: ${(this.speed += 10)}`);
};

Car.prototype.brake = function () {
  console.log(`${this.make}: ${(this.speed -= 5)}`);
};

const BMW = new Car("BMW", 120);
const Mercedes = new Car("Mercedes", 95);

console.log(BMW);
console.log(Mercedes);
BMW.accelerate();
BMW.brake();
Mercedes.accelerate();
Mercedes.brake();
