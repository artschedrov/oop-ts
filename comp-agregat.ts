// Агрегация и композиция
class Engine {
  drive() {
    console.log('Engine working');
  }
}

class Wheel {
  drive() {
    console.log('Wheels run');
  }

}

class Freshes {
}

class Car {
  engine: Engine;
  wheels: Wheel[] = [];
  freshes: Freshes;

  constructor(freshes: any) {
    //Агрегация
    this.freshes = new Freshes();
    //Копозиция
    this.engine = new Engine();
    this.wheels.push(new Wheel());
    this.wheels.push(new Wheel());
    this.wheels.push(new Wheel());
    this.wheels.push(new Wheel());
  }

  //Делегирование
  drive() {
    this.engine.drive();
    for(let i = 0; i < this.wheels.length; i++) {
      this.wheels[i].drive();
    }
  }
}

const car1 = new Car('chuckberry');
car1.drive();