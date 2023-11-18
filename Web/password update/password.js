let updatePasswordFormEl = document.getElementById("updatePasswordForm");
let newPasswordEl = document.getElementById("newPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
let confirmPasswordEl = document.getElementById("confirmPassword");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");
let confirmation = document.getElementById("confirmation");
let validateNewPassword = function () {
  if (newPasswordEl.value === "") {
    newPasswordErrMsgEl.textContent = "Required*";
  } else {
    newPasswordErrMsgEl.textContent = "";
  }
};
let validateConfirmPassword = function () {
  let newPassword = newPasswordEl.value;
  let confirmPassword = confirmPasswordEl.value;
  if (newPassword !== confirmPassword) {
    confirmPasswordErrMsgEl.textContent = "Passwords must be same";
  } else {
    confirmPasswordErrMsgEl.textContent = "";
  }
};

let passwordUpdated = function () {
  if (newPasswordEl.value === confirmPasswordEl.value) {
    confirmation.textContent = "UPDATED ✓";
  } else {
    confirmation.textContent = "";
  }
};

newPasswordEl.addEventListener("blur", validateNewPassword);
confirmPasswordEl.addEventListener("blur", validateConfirmPassword);
updatePasswordFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  validateNewPassword();
  validateConfirmPassword();
  passwordUpdated();
});
