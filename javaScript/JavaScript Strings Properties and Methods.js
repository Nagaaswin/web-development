var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo").innerHTML = txt.length;

var str = "Please locate where 'locate' occurs!";

var pos = str.indexOf("locate");
document.getElementById("demo1").innerHTML = pos;

var pos = str.lastIndexOf("locate");
document.getElementById("demo2").innerHTML = pos;

var pos = str.indexOf("locate",15);
document.getElementById("demo3").innerHTML = pos;

var str = "Apple, Banana, Kiwi";
var res = str.slice(7,13);
document.getElementById("demo4").innerHTML = res;

var res = str.substring(7,13);
document.getElementById("demo5").innerHTML = res;

function myFunction() {
  var str = document.getElementById("demo6").innerHTML;
  var txt = str.replace(/Microsoft/i,"W3Schools");
  document.getElementById("demo6").innerHTML = txt;
}

function myFunction1() {
  var text = document.getElementById("demo7").innerHTML;
  document.getElementById("demo7").innerHTML = text.toUpperCase();
}

var text1 = "Hello";
var text2 = "World!";
var text3 = text1.concat(" ",text2);
document.getElementById("demo8").innerHTML = text3;

function myFunction2() {
  var str = "     Hello World!     ";
  alert(str.trim());
}

var str = "HELLO WORLD";
document.getElementById("demo9").innerHTML = str.charAt(0);

var str = "HELLO WORLD";
document.getElementById("demo10").innerHTML = str.charCodeAt(0);

var str = "HELLO WORLD";
document.getElementById("demo11").innerHTML = str[0];
