let test = document.getElementById("canvas");
let x = document.getElementById("canvas");
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
    x.width = window.innerWidth;
    x.height= window.innerHeight;
})
