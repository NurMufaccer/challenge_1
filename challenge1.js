const Car = function (name, speed) {
  this.Name = name;
  this.Speed = speed;
};
Car.prototype.accelerate = function () {
  this.Speed += 10;
  console.log(`${this.Name} is going to ${this.Speed} km/h`);
};
Car.prototype.brake = function () {
  this.Speed -= 5;
  console.log(`${this.Name} is going to ${this.Speed} km/h`);
};
const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);
console.log(car1, car2);
car1.accelerate();
car1.accelerate();

car1.brake();
car1.accelerate();
car2.accelerate();

car2.brake();
console.log(car1.__proto__ === Car.prototype);
