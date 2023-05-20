const inputChangeSizeEl = document.querySelector("#font-size-control");
const textChangeEl = document.querySelector("#text");


inputChangeSizeEl.addEventListener("input", (event) => {

    textChangeEl.style.fontSize = event.currentTarget.value + 'px';
        
})

