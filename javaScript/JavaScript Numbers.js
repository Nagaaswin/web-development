var x = 3.14;
var y = 3;
document.getElementById("demo").innerHTML = x + "<br>" + y;

var x = 123e5;
var y = 123e-5;
document.getElementById("demo1").innerHTML = x + "<br>" + y;

var x = 999999999999999;
var y = 9999999999999999;
document.getElementById("demo2").innerHTML = x + "<br>" + y;

var x = 0.2 + 0.1;
document.getElementById("demo3").innerHTML = "0.2 + 0.1 = " + x;

var y = (0.2*10 + 0.1*10) / 10;
document.getElementById("demo4").innerHTML = "0.2 + 0.1 = " + y;

var x = "10";
var y = "20";
var z = x + y;
document.getElementById("demo5").innerHTML = z;

var x = "100";
var y = "10";
var z = x / y;
document.getElementById("demo6").innerHTML = z;

document.getElementById("demo7").innerHTML = 100 / "Apple";

var x = 100 / "Apple";
document.getElementById("demo8").innerHTML = isNaN(x);

var myNumber = 2;
var txt = "";
while (myNumber != Infinity) {
   myNumber *= myNumber;
   txt = txt + myNumber + "<br>";
}
document.getElementById("demo9").innerHTML = txt;

var myNumber = 32;
document.getElementById("demo10").innerHTML =
"32 = " + "<br>" +
" Decimal " + myNumber.toString(10) + "<br>" +
" Hexadecimal " + myNumber.toString(16) + "<br>" +
" Octal " + myNumber.toString(8) + "<br>" +
" Binary " + myNumber.toString(2);
