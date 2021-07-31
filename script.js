const email = document.getElementById("email-field");
const emailErrors = document.getElementById("email-field-errors");

email.addEventListener("input", function() {
    emailErrors.textContent = "";
    if (email.validity.typeMismatch) {
        emailErrors.textContent = "Please enter a valid email address";
    } else {
        email.setCustomValidity("");
    }
});

const country = document.getElementById("country-field");
const countryFieldErrors = document.getElementById("country-field-errors");

country.addEventListener("input", function(){
    countryFieldErrors.textContent = "";
    if (/[Cc]anada/.test(country.value) == false && /[Aa]merica/.test(country.value) == false) {
        countryFieldErrors.textContent = "Country must be Canada or America";
    }
});

const zipCode = document.getElementById("zip-code-field");
const zipCodeFieldErrors = document.getElementById("zip-code-field-errors");

zipCode.addEventListener("input", function() {
    zipCodeFieldErrors.textContent = "";
    if (/^[0-9]{5}(?:-[0-9]{4})?$/.test(zipCode.value) == false) {
        zipCodeFieldErrors.textContent = "Please enter a valid zip code";
    }
});

const password = document.getElementById("password-field");
const passwordFieldErrors = document.getElementById("password-field-errors");
const passwordConfirmation = document.getElementById("password-confirmation-field");
const passwordConfirmationFieldErrors = document.getElementById("password-confirmation-field-errors");

password.addEventListener("input", function() {
    passwordFieldErrors.textContent = "";
    if (password.value.length < 5) {
        passwordFieldErrors.textContent = "Please choose a password that is at least five characters long";
    }
});

passwordConfirmation.addEventListener("input", function() {
    passwordConfirmationFieldErrors.textContent = "";
    let latestPassword = document.getElementById("password-field").value;
    if (passwordConfirmation.value != latestPassword) {
        passwordConfirmationFieldErrors.textContent = "Passwords must match";
    }
});