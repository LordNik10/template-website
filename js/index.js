var t = 1;
function start() {
  changeback();
  setInterval("changeback()", 3000);
}

function changeback() {
  var b = document.getElementById("back");
  if (b) {
    switch (t) {
      case 1:
        b.style.backgroundImage = 'url("./images/imgbackground1.jpg")';
        t++;
        break;
      case 2:
        b.style.backgroundImage = 'url("./images/imgbackground2.jpg")';
        t++;
        break;
      case 3:
        b.style.backgroundImage = 'url("./images/imgbackground3.jpg")';
        t = 1;
        break;
    }
  }
}

function openmenu() {
  var m = document.getElementById("navhamb");
  m.style.display = "block";
  var x = document.getElementById("bdy");
  x.classList.add("op");
}

function closemenu() {
  var c = document.getElementById("navhamb");
  c.style.display = "none";
  var x = document.getElementById("bdy");
  x.classList.remove("op");
}

document.addEventListener("DOMContentLoaded", function () {
  start();
});
