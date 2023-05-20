const formInputEl = document.querySelector("#validation-input");
   
formInputEl.addEventListener("blur", (event) => {

    const counter = Number(event.target.value.length);
    const counterDataSet = Number(formInputEl.dataset.length);
   
    if (counter === counterDataSet) {
        formInputEl.classList.remove("invalid");
        formInputEl.classList.add("valid");
        console.log(" Number is GOOD !!!!");
        
    }

    if (counter > counterDataSet || counter < counterDataSet) {
         formInputEl.classList.remove("valid");
        formInputEl.classList.add("invalid");
        console.log(" Invalid Number !!!!!")
       
     }
    
  
})