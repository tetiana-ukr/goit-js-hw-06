

const changeColorTextEl = document.querySelector(".color");
const buttonChangeColorEl = document.querySelector(".change-color");

 
buttonChangeColorEl.addEventListener("click", (event, getRandomHexColor) => {
  
  event.preventDefault();
  changeColorTextEl.textContent = document.body.style.backgroundColor = getRandomHexColor();
    
    function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
  
})



