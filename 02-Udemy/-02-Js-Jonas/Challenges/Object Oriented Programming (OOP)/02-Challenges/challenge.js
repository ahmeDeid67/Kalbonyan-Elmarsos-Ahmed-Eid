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

const ford = new CarCl("Ford", 120);
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
