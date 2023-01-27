const btnSubmit = document.querySelector(".btn-submit")
const userName = document.querySelector("#userName") 
const userEmail = document.querySelector("#userEmail") 
const userPassword = document.querySelector("#userPassword") 


btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    alert(`¡Hola ${userName.value}!\nRegistraste correctame tu email: ${userEmail.value} :D\nGracias por tu visita!`);
    console.log(userName.value);
    console.log(userEmail.value);
    console.log(userPassword.value);
})
