const inputNumberBoxes = document.querySelector("#controls");
const buttonCreateBoxes = document.querySelector("button[data-create]");
const buttonDestroyBoxes = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

inputNumberBoxes.addEventListener("input", (event) => {
  const calc = event.target.value;
  console.log(calc);
})

function createBoxes (amount) {
    
    const numDiv = document.createElement("div");
    boxesEl.after(numDiv);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


