// https://yarduon.com
let test = document.getElementById("canvas");
let x = document.getElementById("canvas");
x.width = window.innerWidth;
x.height = window.innerHeight;

test.addEventListener("mousemove", (e) => {
  let y = document.getElementById("canvas").getContext("2d");
  let coordX = e.clientX - x.offsetLeft;
  let coordY = e.clientY - x.offsetTop;
  y.beginPath();
  y.moveTo(coordX, coordY);
  y.lineWidth = 50;
  y.strokeStyle = "#000";
  y.lineCap = "round";
  y.lineJoin = "round";
  y.lineTo(coordX, coordY);
  y.stroke();
});

window.addEventListener("resize", () => {
  let temp = ctx.getImageData(0, 0, test.width, test.height);
  x.width = window.innerWidth;
  x.height = window.innerHeight;
  ctx.putImageData(temp, 0, 0);
});
