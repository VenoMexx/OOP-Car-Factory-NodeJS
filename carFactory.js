class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  
  drive() {
    console.log('Driving a car.');
  }
}

class ElectricCar extends Car {
  constructor(brand, model, batteryLife) {
    super(brand, model);
    this.batteryLife = batteryLife;
  }
  
  drive() {
    console.log(`Driving a ${this.brand} ${this.model} with ${this.batteryLife} battery life.`);
  }
}

class SportsCar extends Car {
  constructor(brand, model, speed) {
    super(brand, model);
    this.speed = speed;
  }
  
  drive() {
    console.log(`Driving a ${this.brand} ${this.model} at ${this.speed} mph.`);
  }
}

// Encapsulation
const tesla = new ElectricCar('Tesla', 'Model S', '400 miles');
const ferrari = new SportsCar('Ferrari', '488', '211 mph');

// Polymorphism
tesla.drive();
ferrari.drive();
