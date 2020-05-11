function toCelsius(f) {
  return (5 / 9) * (f - 32);
}
document.getElementById("demo").innerHTML = toCelsius(77);
document.getElementById("demo1").innerHTML = toCelsius;

var person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
var person1 = {
  firstName: "John",
  lastName: "Doe",
};
var person2 = {
  firstName: "Mary",
  lastName: "Doe",
};
var x = person.fullName.call(person1);
document.getElementById("demo2").innerHTML = x;

var person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};
var person1 = {
  firstName: "John",
  lastName: "Doe",
};
var person2 = {
  firstName: "Mary",
  lastName: "Doe",
};
var x = person.fullName.call(person1, "Oslo", "Norway");
document.getElementById("demo3").innerHTML = x;

var person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};
var person1 = {
  firstName: "John",
  lastName: "Doe",
};
var x = person.fullName.apply(person1, ["Oslo", "Norway"]);
document.getElementById("demo4").innerHTML = x;
