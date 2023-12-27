var nameInputUp = document.getElementById("nameUp");
var emailInputUp = document.getElementById("inemailUp");
var passInputUp = document.getElementById("inpassUp");
var isIncorrectUp= document.getElementById("isincorrectUp");
var logBtnUp = document.querySelector(".logBtnUp");
var isvalidtUp = document.getElementById("isvalidtUp");
var isExisttUp = document.getElementById("isExisttUp");
var msgName = document.getElementById("msgName");
var msgEmail = document.getElementById("msgEmail")
var msgPass = document.getElementById("msgPass")

var allDetails = [];

if(localStorage.getItem("information") != null){
   allDetails = JSON.parse(localStorage.getItem("information"));
}
function validationName(){
   var namePattern =  /^[A-Z][a-zA-Z]{2,7}$/;
   var text = nameInputUp.value;
   if(namePattern.test(text)==true){
      nameInputUp.classList.add("is-valid");
      nameInputUp.classList.remove("is-invalid");
      msgName.classList.add("d-none");
      return true;
   }else{
      nameInputUp.classList.add("is-invalid");
      nameInputUp.classList.remove("is-valid");
      msgName.classList.remove("d-none");

      return false;
   }
}
function validationEmail(){
   var urlPattern = /^[a-z0-9]+@[a-z0-9]+\.[com]{3}$/;
   var mail = emailInputUp.value;
   if(urlPattern.test(mail)==true){
      emailInputUp.classList.add("is-valid");
      emailInputUp.classList.remove("is-invalid");
      msgEmail.classList.add("d-none");
      return true;
   }else{
      emailInputUp.classList.add("is-invalid");
      emailInputUp.classList.remove("is-valid");
      msgEmail.classList.remove("d-none");
      return false;
   }
}
function validationPass(){
   var passPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@#$%^&+=]{8,}$/; 
     var secret = passInputUp.value;
   if(passPattern.test(secret)==true){
      passInputUp.classList.add("is-valid");
      passInputUp.classList.remove("is-invalid");
      msgPass.classList.add("d-none");
      return true;
   }else{
      passInputUp.classList.add("is-invalid");
      passInputUp.classList.remove("is-valid");
      msgPass.classList.remove("d-none");
      return false;
   }
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
               if(validationName()==true && validationEmail()==true && validationPass()==true){
                  allDetails.push(details);
                  localStorage.setItem("information", JSON.stringify(allDetails));
                  isvalidtUp.classList.replace("d-none" , "d-block");
                  isExisttUp.classList.replace("d-block" , "d-none");
                  clearForm();
               }
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
