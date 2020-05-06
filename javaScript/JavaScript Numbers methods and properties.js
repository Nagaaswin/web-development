var x = 123;
document.getElementById("demo").innerHTML =
  x.toString() + "<br>" +
   (123).toString() + "<br>" +
   (100 + 23).toString();

   var x = 9.656;
document.getElementById("demo1").innerHTML =
  x.toExponential() + "<br>" +
  x.toExponential(2) + "<br>" +
  x.toExponential(4) + "<br>" +
  x.toExponential(6);

  var x = 9.656;
  document.getElementById("demo2").innerHTML =
    x.toFixed(0) + "<br>" +
    x.toFixed(2) + "<br>" +
    x.toFixed(4) + "<br>" +
    x.toFixed(6);

    var x = 9.656;
    document.getElementById("demo3").innerHTML =
      x.toPrecision() + "<br>" +
      x.toPrecision(2) + "<br>" +
      x.toPrecision(4) + "<br>" +
      x.toPrecision(6);

      var x = 123;

      document.getElementById("demo4").innerHTML =
        x.valueOf() + "<br>" +
        (123).valueOf() + "<br>" +
        (100 + 23).valueOf();

        document.getElementById("demo5").innerHTML =
          Number(true) + "<br>" +
          Number(false) + "<br>" +
          Number("10") + "<br>" +
          Number("  10") + "<br>" +
          Number("10  ") + "<br>" +
          Number(" 10  ") + "<br>" +
          Number("10.33") + "<br>" +
          Number("10,33") + "<br>" +
          Number("10 33") + "<br>" +
          Number("John");

          var x = new Date("2017-09-30");
          document.getElementById("demo6").innerHTML = Number(x);

          var x = Number.MAX_VALUE;
document.getElementById("demo7").innerHTML = x;
