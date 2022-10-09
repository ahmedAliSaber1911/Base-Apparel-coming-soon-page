var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const input =  document.getElementById("email");
const arrow = document.getElementById('submit');
const error= document.querySelector('.text-error');
const Iconerror= document.querySelector('.icon-error');

arrow.addEventListener('click',()=>{
    if(input.value.match(validRegex)){
        alert("good")
    }else{
        error.innerHTML= "Please provide a valid email.";
        Iconerror.style.display = "block"
    }
})
