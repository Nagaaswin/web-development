document.getElementById("demo").innerHTML =
"john".constructor + "<br>" +
(3.14).constructor + "<br>" +
false.constructor + "<br>" +
[1,2,3,4].constructor + "<br>" +
{name:'john', age:34}.constructor + "<br>" +
new Date().constructor + "<br>" +
function () {}.constructor;

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = isArray(fruits);

function isArray(myArray) {
  return myArray.constructor === Array;
}

var myDate = new Date();
document.getElementById("demo2").innerHTML = isDate(myDate);

function isDate(myDate) {
  return myDate.constructor === Date;
}

var x = 123;
document.getElementById("demo3").innerHTML =
  String(x) + "<br>" +
  String(123) + "<br>" +
  String(100 + 23);
