var theBtn = document.querySelector(".btn-outline-warning");
var nameInputUp = document.getElementById("nameUp");
var emailInputUp = document.getElementById("inemailUp");
var passInputUp = document.getElementById("inpassUp");
const welcomeMessage = document.getElementById('welcomeMessage');


function logOut(){
    window.location="index.html";
}


var userName = localStorage.getItem("loggedInUser");

welcomeMessage.textContent = `${userName}`;
