const form = document.querySelector("form");
const username = form.querySelector("#username");
const password = form.querySelector("#password");
const errorElement = form.querySelector('#alert');

console.log("Musaffar")

function hideErrorMessage(){
    errorElement.innerHTML="";
}
function showErrorMessage(message){
    console.log("Haiiiiiii");
    errorElement.innerHTML =`<div class="alert alert-warning w-80 justify-content-center" role="alert" >${message}</div>`;
}
form.submitform = () =>{
    // e.preventDefault()
    // console.log(username.value)
    if(username.value === ""){
        showErrorMessage("Name is required");
        return false;
    }

    if(username.value.length >30){
        showErrorMessage("Name must be less than 15");
        return false;
    }

    if(password.value.length <3){
        showErrorMessage("Password must be longer than 3 Characters");
        return false;
    }

    if(password.value.length >=15){
        showErrorMessage("Password must be less than 15 Characters");
        return false;
    }


    hideErrorMessage()
    return true;
}
    


{/* <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </symbol>
    </svg>



<svg class="bi flex-shrink-0 me-2" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg> */}