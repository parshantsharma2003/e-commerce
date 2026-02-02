// const user = JSON.parse(localStorage.getItem("loggedInUser"));

// if (!user) {
//   window.location.href = "login.html";
// }

// function logout() {
//   localStorage.removeItem("loggedInUser");
//   window.location.href = "login.html";
// }




(function () {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user) {
    window.location.href = "login.html";
  }
})();

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}