var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.sort();
  document.getElementById("demo").innerHTML = fruits;
}

// Create and display an array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;

function myFunction1() {
  // First sort the array
  fruits.sort();
  // Then reverse it:
  fruits.reverse();
  document.getElementById("demo1").innerHTML = fruits;
}

var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo2").innerHTML = points;

function myFunction2() {
  points.sort();
  document.getElementById("demo2").innerHTML = points;
}
function myFunction3() {
  points.sort(function(a, b){return a - b});
  document.getElementById("demo2").innerHTML = points;
}

var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo3").innerHTML = points;

function myFunction4() {
  points.sort(function(a, b){return 0.5 - Math.random()});
  document.getElementById("demo3").innerHTML = points;
}

var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo4").innerHTML = points;

function myFunction5() {
var i, j, k;
  for (i = points.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = points[i]
    points[i] = points[j]
    points[j] = k
  }
  document.getElementById("demo4").innerHTML = points;
}

var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo5").innerHTML = points;
document.getElementById("demo6").innerHTML = myArrayMax(points);

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo7").innerHTML = points;
document.getElementById("demo8").innerHTML = myArrayMin(points);

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}


var cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

displayCars();

function myFunction6() {
  cars.sort(function(a, b){return a.year - b.year});
  displayCars();
}

function displayCars() {
  document.getElementById("demo9").innerHTML =
  cars[0].type + " " + cars[0].year + "<br>" +
  cars[1].type + " " + cars[1].year + "<br>" +
  cars[2].type + " " + cars[2].year;
}

var cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

displayCars1();

function myFunction7() {
  cars.sort(function(a, b){
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  displayCars1();
}

function displayCars1() {
  document.getElementById("demo10").innerHTML =
  cars[0].type + " " + cars[0].year + "<br>" +
  cars[1].type + " " + cars[1].year + "<br>" +
  cars[2].type + " " + cars[2].year;
}
