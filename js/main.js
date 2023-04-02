let test = document.getElementById("canvas");

test.addEventListener("mousemove", (e) => {
  let x = document.getElementById("canvas");
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

