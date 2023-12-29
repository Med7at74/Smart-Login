// ****************** Assign Global variables *****************-!>

var userName = document.getElementById("userNameInput");
var userEmail = document.getElementById("userEmailInput");
var userPassword = document.getElementById("userPasswordInput");
var signupBtn = document.getElementById("signupBtn");
var message = document.getElementById("message");
var sucsessContainer = document.getElementById("sucsess-container");
var userArray = [];

// ***************** get date from localStorage *****************-!>

if (localStorage.getItem("user") != null) {
  userArray = JSON.parse(localStorage.getItem("user"));
} else {
  userArray = [];
}

// ******************* Add the Data Function *****************-!>
function addData() {
  //?========> check if the email exists
  if (checkEmail() == false) {
    message.classList.remove("d-none");
    message.innerHTML = "This Email Alredy Exists";
  } else if (
    NameValidation() == true &&
    emailValidation() == true &&
    passwordValidation() == true
  ) {
    //?========> create object and push it in the array and set data in localstorage
    var user = {
      name: userName.value,
      email: userEmail.value,
      password: userPassword.value,
    };
    userArray.push(user);
    localStorage.setItem("user", JSON.stringify(userArray));
    clearForm();
    sucsessContainer.classList.remove("d-none");
    sucsessContainer.classList.add("d-flex");
  } else {
    message.classList.remove("d-none");
    message.innerHTML = "Enter Valid Data";
    message.style.transition = "all 1s";
  }
}

// !=====================> call add function <=======================
signupBtn.addEventListener("click", function () {
  addData();
});
// !===================> go to sign in to login <===================
document.getElementById("moveToSignip").addEventListener("click", function () {
  window.location = "../index.html";
});
// !===================> go to sign in to login From the Alert <===================
document
  .getElementById("moveToSignipFromSucsess")
  .addEventListener("click", function () {
    window.location = "../index.html";
  });

// ******************* Check the Email Function *****************-!>
function checkEmail() {
  for (var i = 0; i < userArray.length; i++) {
    if (userArray[i].email.toLowerCase() == userEmail.value.toLowerCase()) {
      return false;
    }
  }
}

// ******************* Clear Input Function ********************
function clearForm() {
  userName.value = "";
  userEmail.value = "";
  userPassword.value = "";
  message.classList.add("d-none");
  userName.classList.remove("is-valid");
  userName.classList.remove("is-invalid");
  userEmail.classList.remove("is-valid");
  userEmail.classList.remove("is-invalid");
  userPassword.classList.remove("is-valid");
  userPassword.classList.remove("is-invalid");
}

// ************** Validation Function of the Name  **************
function NameValidation() {
  var userNameTxt = userName.value;
  var regexName = /^[A-Z][a-z]{4,10}$/;
  if (regexName.test(userNameTxt) == true) {
    userName.classList.add("is-valid");
    userName.classList.remove("is-invalid");
    message.classList.add("d-none");
    return true;
  } else {
    userName.classList.add("is-invalid");
    userName.classList.remove("is-valid");
    message.classList.remove("d-none");
    message.innerHTML = "The First letter Must Be capital ";

    return false;
  }
}

// ************** Validation Function of the Email  *************
function emailValidation() {
  var userEmailTxt = userEmail.value;
  var regexName = /^[a-z]{4,15}(\d{2,7})?@(yahoo|gmail)\.com$/;
  if (regexName.test(userEmailTxt) == true) {
    userEmail.classList.add("is-valid");
    userEmail.classList.remove("is-invalid");
    message.classList.add("d-none");
    return true;
  } else {
    userEmail.classList.add("is-invalid");
    userEmail.classList.remove("is-valid");
    message.classList.remove("d-none");
    message.innerHTML = "The Email Must be Valid - example@gmail.com ";

    return false;
  }
}

// ************** Validation Function of the Bassword  ***********
function passwordValidation() {
  var userpasswordTxt = userPassword.value;
  var regexName =
    /^(\d{8,14}|([a-z]{1,10}\d{5,10}([a-z]{0,10}?))|[a-z]{6,15})$/;
  if (regexName.test(userpasswordTxt) == true) {
    userPassword.classList.add("is-valid");
    userPassword.classList.remove("is-invalid");
    message.classList.add("d-none");
    return true;
  } else {
    userPassword.classList.add("is-invalid");
    userPassword.classList.remove("is-valid");
    message.classList.remove("d-none");
    message.innerHTML = "8 characters or more numbers ";

    return false;
  }
}

// <!-************** the ways to close the Sucsses Message **************-!>

// 1 =======> click at Esc key
document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    sucsessContainer.classList.remove("d-flex");
    sucsessContainer.classList.add("d-none");
  }
});

// 2 =======> clicking outside modal
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("sucsess-container")) {
    sucsessContainer.classList.remove("d-flex");
    sucsessContainer.classList.add("d-none");
  }
});
