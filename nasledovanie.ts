class Peron {
  private _firstName;
  private _lastName;
  private _age;

  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if(value < 0) {
      this._age = 0;
    } else {
      this._age = value;
    }
  }
}

class Employee extends Peron {
  private _inn;
  private _number;

  constructor(firstName, lastName, age, inn, number) {
    super(firstName, lastName, age);
    this._inn = inn;
    this._number = number;
  }
}

const employee1 = new Employee('Art', 'Bbb', 12, 111, 6); 