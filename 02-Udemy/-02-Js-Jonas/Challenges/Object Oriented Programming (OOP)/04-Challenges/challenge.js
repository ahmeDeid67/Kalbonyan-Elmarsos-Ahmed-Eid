// Challenge #4

class EVCL extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
}

const rivian = new EVCL("Rivian", 120, 23);
rivian.accelerate();
rivian.brake();
rivian.accelerate().brake();
