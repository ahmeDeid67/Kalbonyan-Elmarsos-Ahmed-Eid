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

const BMW = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);

console.log(BMW);
console.log(Mercedes);
BMW.accelerate();
BMW.brake();
Mercedes.accelerate();
Mercedes.brake();

// Challenge #2
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(`${this.make}: ${(this.speed += 10)}`);
    return this;
  }

  brake() {
    console.log(`${this.make}: ${(this.speed -= 5)}`);
    return this;
  }

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = this.speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.brake();
ford.brake();
console.log(ford.speedUs);
console.log(ford.speedUs);
ford.speedUs = 150;
console.log(ford.speedUs);
console.log(ford.speedUs);

// Challenge #3
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (ChargeTo) {
  this.charge = ChargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} Km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.accelerate();
tesla.brake();

// Challenge #4

class EVCL extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
}

const rivian = new EVCL('Rivian', 120, 23);
rivian.accelerate();
rivian.brake();
rivian.accelerate().brake();
