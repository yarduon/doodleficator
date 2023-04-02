let rgb = 255;
function createCanvas(max) {
  for (let i = 0; i < max; i++) {
    for (let i = 0; i < max; i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.style.width = 960 / max + "px";
      square.style.height = 960 / max + "px";
      square.addEventListener("mouseover", () => {
        rgb = rgb - 25;
        square.style.backgroundColor =
          "rgb(" +
          Math.random() * rgb +
          "," +
          Math.random() * rgb +
          "," +
          Math.random() * rgb +
          ")";
          console.log(rgb);
          if (rgb <= 5) {
            rgb = 255;
          }
      });
      document.getElementById("canvas").appendChild(square);
    }
  }
}

function validateNumber(num) {
  if (num > 100) {
    return 16;
  }
  return num;
}

createCanvas(16);

document.getElementById("size").addEventListener("click", () => {
  document.getElementById("canvas").innerHTML = "";
  createCanvas(validateNumber(prompt("Introduce size")));
});
