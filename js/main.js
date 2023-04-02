function createCanvas(max) {
  for (let i = 0; i < max; i++) {
    for (let i = 0; i < max; i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.style.width = (960 / max) + "px";
      square.style.height = (960 /max) + "px";
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
      });
      document.getElementById("canvas").appendChild(square);
    }
  }
}

createCanvas(16);

document.getElementById("size").addEventListener("click", () => {
    document.getElementById("canvas").innerHTML = "";
    createCanvas(prompt("Introduce size"));
})
