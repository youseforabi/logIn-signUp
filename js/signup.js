var nameInputUp = document.getElementById("nameUp");
var emailInputUp = document.getElementById("inemailUp");
var passInputUp = document.getElementById("inpassUp");
var isIncorrectUp= document.getElementById("isincorrectUp");
var logBtnUp = document.querySelector(".logBtnUp");
var isvalidtUp = document.getElementById("isvalidtUp");
var isExisttUp = document.getElementById("isExisttUp");
var allDetails = [];

if(localStorage.getItem("information") != null){
   allDetails = JSON.parse(localStorage.getItem("information"));
}

function addUp() {
    var details = {
       name: nameInputUp.value,
       email: emailInputUp.value,
       pass: passInputUp.value
    }
 
    if (emailInputUp.value.length == 0 || passInputUp.value.length == 0 || nameInputUp.value.length == 0) {
       isIncorrectUp.classList.replace("d-none", "d-block");
    } else {
       isIncorrectUp.classList.replace("d-block", "d-none");
 
       var isExistingEmail = false;
 
       for (var i = 0; i < allDetails.length; i++) {
          if (emailInputUp.value === allDetails[i].email) {
            
             isExistingEmail = true;
             break;
          }
       }
 
       if (isExistingEmail) {
         isExisttUp.classList.replace("d-none" , "d-block");
   
       } else {
          allDetails.push(details);
          localStorage.setItem("information", JSON.stringify(allDetails));
          isvalidtUp.classList.replace("d-none" , "d-block");
          isExisttUp.classList.replace("d-block" , "d-none");

          clearForm();
       }
    }
 }

document.querySelector(".theanc").addEventListener("click" , function(){
   window.location="index.html";
})

function clearForm(){
    emailInputUp.value = "";
   passInputUp.value="";
   nameInputUp.value= "";
}
