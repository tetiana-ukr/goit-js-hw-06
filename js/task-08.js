const formLoginEl = document.querySelector(".login-form");
const inputsEl = document.querySelectorAll('input');

formLoginEl.addEventListener("submit", (event) => {

    event.preventDefault();
    
    const {
        elements: { email, password }
    } = event.currentTarget;

    const formObject = {
        email: email.value,
        password: password.value,
    };
    if (email.value === '' || password.value === '') {

         alert("Warning! All fields must be filled!");
    }
    else {
        console.log(formObject);
    }
       
   
    event.target.reset();
})
