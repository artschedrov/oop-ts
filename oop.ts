// класс
class Rectangle {

  // свойства класса
  private _width;
  private _height;

  constructor(w, h) {
    this._width = w;
    this._height = h;
  }

  // метод класса
  calcArea() {
    return this._width * this._height;
  }

  get width() {
     return this._width;
  }

  set width(value) {
    if(value <= 0) {
      this._width = 1;
    } else {
      this._width = value;
    }
  }
}

class User {
  private _username;
  private _password;
  private _id;

  constructor(username, password) {
    this.username = username;
    this.password = password;
    this._id = generateRandomId();
  }

  //геттеры и сетеры для доступа в приватные свойства

  get username() {
    return this._username;
  }

  set username(value) {
    this._username = value;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value;
  }

  get id() {
    return this._id;
  }
}

// Объект класс
const rect1 = new Rectangle(30, 10);

// вызов метода класса объектом
rect1.calcArea();

const user = new User('user1', '123');
user.password = '34';