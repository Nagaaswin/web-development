var x = 16 + 4 + "Volvo";
document.getElementById("demo").innerHTML = x;
var x = "Volvo" + 16 + 4;
document.getElementById("d1").innerHTML = x;
var y = 123e5;
var z = 123e-5;
document.getElementById("en").innerHTML =
y + "<br>" + z;
var cars = ["Saab","Volvo","BMW"];
document.getElementById("arr").innerHTML = cars[0];

var person = {
  firstName : "John",
  lastName  : "Doe",
  age     : 50,
  eyeColor  : "blue"
};

document.getElementById("obj").innerHTML =
person.firstName + " is " + person.age + " years old.";
