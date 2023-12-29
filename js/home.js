// *=================* Assign Global variables *=================*
var logout = document.getElementById("logout");
var userArray = [];

// ?==============> print the name of the user <=================
var userName = localStorage.getItem("homeuser");
if (userName) {
  document.getElementById("username").innerHTML = "Welcome " + userName;
}

// !=======> logout from home page and delete the name from the localstorage <=======
logout.addEventListener("click", function () {
  localStorage.removeItem("homeuser");
  window.location = "../index.html";
});
