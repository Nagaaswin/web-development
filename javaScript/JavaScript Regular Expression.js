function myFunction() {
  var str = "Visit W3Schools";
  var patt1 = /w3schools/i;
  var result = str.match(patt1);
  document.getElementById("demo").innerHTML = result;
}

function myFunction1() {
  var str = "Is this all there is?";
  var patt1 = /is/g;
  var result = str.match(patt1);
  document.getElementById("demo1").innerHTML = result;
}

function myFunction2() {
  var str = "\nIs th\nis it?";
  var patt1 = /^is/m;
  var result = str.match(patt1);
  document.getElementById("demo2").innerHTML = result;
}

function myFunction3() {
  var str = "Is this all there is?";
  var patt1 = /[a-h]/g;
  var result = str.match(patt1);
  document.getElementById("demo3").innerHTML = result;
}

function myFunction4() {
  var str = "123456789";
  var patt1 = /[1-4]/g;
  var result = str.match(patt1);
  document.getElementById("demo4").innerHTML = result;
}

function myFunction5() {
  var str = "re, green, red, green, gren, gr, blue, yellow";
  var patt1 = /(red|green)/g;
  var result = str.match(patt1);
  document.getElementById("demo5").innerHTML = result;
}

function myFunction6() {
  var str = "Give 100%!";
  var patt1 = /\d/g;
  var result = str.match(patt1);
  document.getElementById("demo6").innerHTML = result;
}

function myFunction7() {
  var str = "Is this all there is?";
  var patt1 = /\s/g;
  var result = str.match(patt1);
  document.getElementById("demo7").innerHTML = result;
}

text = document.getElementById("p01").innerHTML;
document.getElementById("demo8").innerHTML = /e/.test(text);

var obj = /e/.exec("The best things in life are free!");
document.getElementById("demo9").innerHTML =
"Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input;
