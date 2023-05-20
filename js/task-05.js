const userNameInputEl = document.querySelector("#name-input");
const userNameOutputEl = document.querySelector("#name-output");

userNameInputEl.addEventListener("input", (event) => {
    
    //console.log(event.target.value);
    
    userNameOutputEl.textContent = event.target.value.length !== 0 ? `${event.target.value}` : userNameOutputEl.value = "Anonymous";
    //console.log(userNameOutputEl.value);
    
    

});