//Selectors
const container = document.querySelector("#container");
const grid = document.querySelector(".grid");
const largeGrid = document.querySelector("#grid-large");
const smallGrid = document.querySelector("#grid-small");
const resetBtn = document.querySelector("#reset");

//Function to make grid
function makeCells(row, col) {
  for (let i = 0; i < row * col; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "cell");
    grid.appendChild(div);
  }
}

largeGrid.addEventListener("click", function () {
  grid.classList.remove("grid");
  grid.classList.add("grid32");
  makeCells(32, 32);
  resetGrid();
});

smallGrid.addEventListener("click", function () {
  grid.classList.add("grid");
  grid.classList.remove("grid32");
  makeCells(16, 16);
  resetGrid();
});

makeCells(32, 32);

const mouseTarget = document.querySelectorAll(".cell");

function randomNumber() {
  return (randomNum = Math.floor(Math.random() * 255));
}

function rgbGenerator() {
  let r = randomNumber();
  let g = randomNumber();
  let b = randomNumber();
  let rgb = `rgb(${r},${g},${b})`;
  return rgb;
}

//Color chooser
function changeColor() {
  this.style.backgroundColor = rgbGenerator();
}

//Drawing functions
function mouseListener() {
  mouseTarget.forEach((target) => {
    target.addEventListener("mouseover", changeColor);
  });
}

mouseListener();

//Reset button
resetBtn.addEventListener("click", function () {
  resetGrid();
});

//Reset function
function resetGrid() {
  mouseTarget.forEach((target) => {
    target.style.backgroundColor = "white";
  });
}
