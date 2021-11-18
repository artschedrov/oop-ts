class Person {
  private _firstName: String;
  private _lastName: String;
  private _age: Number;

  constructor(firstName: String, lastName: String, age: Number) {
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

  public get fullName() {
    return `Lastname ${this._firstName}, name ${this._lastName}`;
  }

  public greeting() {
    console.log(`Hello Iam human, my name is ${this._firstName}`);
  }
}

class Employee extends Person {
  private _inn: Number;
  private _number: Number;

  constructor(firstName: String, lastName: String, age: Number, inn: Number, number: Number) {
    super(firstName, lastName, age);
    this._inn = inn;
    this._number = number;
  }

  greeting() {
    console.log(`Hello Iam employee, my name is ${this.firstName}`);
  }
}

class Developer extends Employee {
  private level: String;

  constructor(firstName: String, lastName: String, age: Number, inn: Number, number: Number, level: String) {
    super(firstName, lastName, age, inn, number);
    this.level = level;
  }

  greeting() {
    console.log(`Hello Iam developer, my name is ${this.firstName}`);
  }
  
}

const employee1 = new Employee('Art', 'Bbb', 12, 111, 6);
const develop1 = new Developer('Fred', 'Black', 20, 1233, 1222, 'junior');
const person1 = new Person('Tim', 'Red', 12);

const personList: Person[] = [employee1, develop1, person1];

function massGreating(persons: Person[]) {
  for(let i = 0; i < persons.length; i++) {
    const person = persons[i];
    person.greeting();
  }
}

massGreating(personList);