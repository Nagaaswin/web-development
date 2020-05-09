class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present(x) {
    return x + ", I have a " + this.carname;
  }
}

mycar = new Car("Ford");

document.getElementById("demo").innerHTML = mycar.present("Hello");

class Car1 {
  constructor(brand) {
    this.carname = brand;
  }
  static hello(x) {
    return "Hello " + x.carname;
  }
}

mycar1 = new Car1("Ford");

document.getElementById("demo1").innerHTML = Car1.hello(mycar1);

class Car2 {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car2 {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

mycar2 = new Model("Ford", "Mustang");
document.getElementById("demo2").innerHTML = mycar2.show();

class Car3 {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

mycar = new Car3("Ford");

document.getElementById("demo3").innerHTML = mycar.cnam;

class Car4 {
  constructor(brand) {
    this._carname = brand;
  }
  set carname(x) {
    this._carname = x;
  }
  get carname() {
    return this._carname;
  }
}

mycar = new Car4("Ford");
mycar.carname = "Volvo";
document.getElementById("demo4").innerHTML = mycar.carname;
