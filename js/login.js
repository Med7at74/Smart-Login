//****************** Assign Global variables *****************

var userEmail = document.getElementById("userEmailInput");
var userPassword = document.getElementById("userPasswordInput");
var loginBtn = document.getElementById("loginBtn");
var message = document.getElementById("message");
var goToSignup = document.getElementById("goToSignup");

var userArray = [];

//***************** get date from localStorage *****************

if (localStorage.getItem("user") != null) {
  userArray = JSON.parse(localStorage.getItem("user"));
} else {
  userArray = [];
}
//********* Gotohome function that move the User to the Home Page *********
function Gotohome() {
  if (userEmail.value.length !== 0 && userPassword.value.length !== 0) {
    if (checkEmailAndPaswoord() == false) {
      window.location = "./pages/home.html";
    } else {
      message.classList.remove("d-none");

      message.innerHTML = "incorrect email or password";
    }
  } else {
    message.classList.remove("d-none");
    message.innerHTML = "All Input is required";
  }
}

// ************* check Email and password if it correct or not function *************
function checkEmailAndPaswoord() {
  for (var i = 0; i < userArray.length; i++) {

       // ?=======> this condition check if the email and password is corect or not  <=========
    if (
      (userArray[i].email.toLowerCase() == userEmail.value.toLowerCase(),
      userArray[i].password.toLowerCase() == userPassword.value.toLowerCase())
    ) {

      // ?======> store the user name of the user in localstorage to print it in home page  <========
      localStorage.setItem("homeuser", userArray[i].name);
      return false;
    }
  }
}


// !=================> Call Gotohome Function <=================
loginBtn.addEventListener("click", function () {
  Gotohome();
});

// !===================> go to sign up page <===================

goToSignup.addEventListener("click", function () {
  window.location = "./pages/signup.html";
});
