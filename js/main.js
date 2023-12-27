var emailInput = document.getElementById("inemail");
var passInput = document.getElementById("inpass");
var isIncorrect= document.getElementById("isincorrect");
var logBtn = document.querySelector(".logBtn");
var isNotValid = document.getElementById("isNotValid")

var allDetails = [];

if(localStorage.getItem("information") != null){
   allDetails = JSON.parse(localStorage.getItem("information"));
}

function add() {
   var details = {
      email: emailInput.value,
      pass: passInput.value
   }

   if (emailInput.value.length == 0 || passInput.value.length == 0) {
      isIncorrect.classList.replace("d-none", "d-block");
   } else {
      isIncorrect.classList.replace("d-block", "d-none");

      var isValidUser = false;
      var userName = "";


      // var storedDetails = JSON.parse(localStorage.getItem("information"));
      for (var i = 0; i < allDetails.length; i++) {
         if (emailInput.value === allDetails[i].email && passInput.value === allDetails[i].pass) {
            isValidUser = true;
            userName = allDetails[i].name;
            break;
         }
      }

      if (isValidUser) {
         // console.log("Login successful");
         window.location="./welcom.html";
         localStorage.setItem("loggedInUser", userName);
         
         // Display success message or redirect to a new page
      } else {
         isNotValid.classList.replace("d-none","d-block");
         // console.log("Invalid email or password");
         // isIncorrect.innerHTML = "Not valid information";

         // Display error message or redirect to sign-up page
      }
   }
}

document.querySelector(".theanc").addEventListener("click" , function(){
   window.location="signup.html";
})

function clearForm(){
   emailInput.value = "";
   passInput.value="";
}