var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits.join(" * ");

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo2").innerHTML = fruits;
fruits.pop();
document.getElementById("demo3").innerHTML = fruits;

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo4").innerHTML = fruits;
fruits.shift();
document.getElementById("demo5").innerHTML = fruits;

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo6").innerHTML = fruits;
document.getElementById("demo7").innerHTML = fruits.unshift("Lemon");
document.getElementById("demo8").innerHTML = fruits;

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo9").innerHTML =
"The first fruit is: " + fruits[0];
delete fruits[0];
document.getElementById("demo10").innerHTML =
"The first fruit is: " + fruits[0];

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo11").innerHTML = "Original Array:<br> " + fruits;

function myFunction() {
  var removed = fruits.splice(2, 2, "Lemon", "Kiwi");
  document.getElementById("demo12").innerHTML = "New Array:<br>" + fruits;
  document.getElementById("demo13").innerHTML = "Removed Items:<br> " + removed;
}

var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];

var myChildren = arr1.concat(arr2, arr3);

document.getElementById("demo14").innerHTML = myChildren;

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1,3);
document.getElementById("demo15").innerHTML = fruits + "<br><br>" + citrus;
