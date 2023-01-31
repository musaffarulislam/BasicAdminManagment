const form = document.querySelector("form");
const username = form.querySelector("#username");
const email = form.querySelector("#email");
const phone = form.querySelector("#phonenumber");
const age = form.querySelector("#age");
const fpassword = form.querySelector("#firstpassword");
const spassword = form.querySelector("#secondpassword");
const errorElement = form.querySelector('#error');



function hideErrorMessage(){
    errorElement.innerHTML="";
}
function showErrorMessage(message){
    // errorElement.innerHTML =`<div class="alert alert-warning w-80 justify-content-center" role="alert" >${message}</div>`;
    errorElement.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
    ${message}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span></button></div>`
}
function submitform(e){
    // e.preventDefault()
    if(username.value === ""){
        showErrorMessage("Name is required");
        return false;
    }

    if(username.value.length >30){
        showErrorMessage("Name must be less than 30");
        return false;
    }


    if(email.value === ""){
        showErrorMessage("Email is required");
        return false;
    }


    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(validRegex)) {
      
      } else {
        showErrorMessage("Email is not correct");
        return false;
      }
    
    if(phonenumber.value.length <10){
        showErrorMessage("Phone Number must be 10 numbers");
        return false;
    }


    if(age.value.length >3){
        showErrorMessage("Enter the correct Age");
        return false;
    }

    if(age.value.length >3){
        showErrorMessage("Enter the correct Age");
        return false;
    }



    if(age.value>= 200){
        showErrorMessage("Enter the correct Age");
        return false;
    }

    if(fpassword.value.length >=15){
        showErrorMessage("Password must be less than 15 Characters");
        return false;
    }

    if(fpassword.value == "password"){
        showErrorMessage("Password can not be password");
        return false;
    }



    if(fpassword.value !== spassword.value){
        showErrorMessage("Passwords are not same");
        return false;
    }

    hideErrorMessage()
    return true;
}
    
