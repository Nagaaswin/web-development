var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value) {
  txt = txt + value + "<br>";
}

var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction1);

document.getElementById("demo1").innerHTML = numbers2;

function myFunction1(value) {
  return value * 2;
}

var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction2);

document.getElementById("demo2").innerHTML = over18;

function myFunction2(value) {
  return value > 18;
}

var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduce(myFunction3);

document.getElementById("demo3").innerHTML = "The sum is " + sum;

function myFunction3(total, value) {
  return total + value;
}

var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduceRight(myFunction4);

document.getElementById("demo4").innerHTML = "The sum is " + sum;

function myFunction4(total, value) {
  return total + value;
}

var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction5);

document.getElementById("demo5").innerHTML = "All over 18 is " + allOver18;

function myFunction5(value) {
  return value > 18;
}

var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction6);

document.getElementById("demo6").innerHTML = "Some over 18 is " + someOver18;

function myFunction6(value, index, array) {
  return value > 18;
}

var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction7);

document.getElementById("demo7").innerHTML = "First number over 18 is " + first;

function myFunction7(value, index, array) {
  return value > 18;
}

var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction8);

document.getElementById("demo8").innerHTML = "First number over 18 has index " + first;

function myFunction8(value, index, array) {
  return value > 18;
}
