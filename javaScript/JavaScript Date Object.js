var d = new Date();
document.getElementById("demo").innerHTML = d;

var d = new Date(2018, 11, 24, 10, 33, 30, 0);
document.getElementById("demo1").innerHTML = d;

var d = new Date("October 13, 2014 11:13:00");
document.getElementById("demo2").innerHTML = d;

var d = new Date(100000000000);
document.getElementById("demo3").innerHTML = d;

var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
document.getElementById("demo4").innerHTML = text;
