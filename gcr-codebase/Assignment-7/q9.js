"use strict";

const form = document.getElementById("form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const successMessage = document.getElementById("success");

function validateName() {
    const error = document.getElementById("nameError");

    if (nameInput.value.trim() === "") {
        error.textContent = "Name is required.";
        return false;
    }

    error.textContent = "";
    return true;
}

function validateEmail() {
    const error = document.getElementById("emailError");

    if (emailInput.value.trim() === "") {
        error.textContent = "Email is required.";
        return false;
    }

    if (!emailInput.value.includes("@")) {
        error.textContent = "Email must contain @.";
        return false;
    }

    error.textContent = "";
    return true;
}

function validatePassword() {
    const error = document.getElementById("passwordError");

    if (passwordInput.value.length < 6) {
        error.textContent = "Password must be at least 6 characters.";
        return false;
    }

    error.textContent = "";
    return true;
}

// Errors disappear automatically when input is corrected.
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

form.addEventListener("submit", function (event) {
    // Prevent default form submission.
    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isNameValid && isEmailValid && isPasswordValid) {
        successMessage.textContent = "Form Submitted Successfully";

        form.reset();

        // Clear errors after successful submission.
        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("passwordError").textContent = "";
    } else {
        successMessage.textContent = "";
    }
});