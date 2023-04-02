for (let i = 0; i < 16; i++) {
  for (let i = 0; i < 16; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
        console.log("helou");
        square.style.backgroundColor = "black";
    })
    document.getElementById("canvas").appendChild(square);
  }
}
