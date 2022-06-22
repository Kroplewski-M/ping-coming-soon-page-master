let email = document.querySelector("#email");
let submit = document.querySelector("#submit");
let error = document.querySelector("#error");

submit.addEventListener("click", function (event) {
  event.preventDefault();
  if (validateEmail(email, error)) {
    email.value = "";
    alert("Subscribed!");
  }
});

function validateEmail(inputVar, errorDivId) {
  if (inputVar.value == "" || String(!inputVar).includes("@")) {
    showError(inputVar, errorDivId);
    return false;
  } else {
    removeError(inputVar, errorDivId);
    return true;
  }
}

function showError(inputVar, errorDivId) {
  inputVar.classList.add("border-red-300");
  errorDivId.classList.remove("hidden");
}

function removeError(inputVar, errorDivId) {
  inputVar.classList.remove("border-red-300");
  inputVar.classList.add("border-gray-300");
  errorDivId.classList.add("hidden");
}
