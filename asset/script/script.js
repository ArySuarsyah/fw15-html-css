const showHide = document.querySelector(".show-hide");
const passwordInput = document.querySelector("#password");
const eye = showHide.querySelector(".eyeIcon")

showHide.addEventListener("click", function () {
    console.log("ok");
});

showHide.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eye.setAttribute("data-feather", "eye-off");
  } else {
    passwordInput.type = "password";
    eye.setAttribute("data-feather", "eye");
  }
});
