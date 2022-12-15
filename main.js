// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const colors = document.querySelectorAll('.color');
const currentColor = document.querySelector('#current-color');

colors.forEach((color) => {
  color.addEventListener('click', () => {
    currentColor.style.background = color.style.background;
  })
})

const cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    //cell.addEventListener('mousedown', () => {
    cell.style.background = currentColor.style.background;
  })
})

const resetButton = document.createElement("div");
resetButton.textContent = `🆑`;
document.querySelector("#canvas").append(resetButton);
resetButton.addEventListener("click", () => {
  cells.forEach((cell) => (cell.style.background = "none"));
});

const fillButton = document.createElement("div");
fillButton.textContent = `⛽️`;
document.querySelector("#canvas").append(fillButton);
fillButton.addEventListener("click", () => {
  cells.forEach((cell) => (cell.style.background = "red"));
});

