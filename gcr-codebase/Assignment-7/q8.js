"use strict";

const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const options = document.getElementById("options");

// Show or hide dropdown options.
dropdownButton.addEventListener("click", function (event) {
    event.stopPropagation();

    options.style.display =
        options.style.display === "block" ? "none" : "block";
});

// Update button text when an option is selected.
options.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        dropdownButton.textContent = event.target.textContent;

        options.style.display = "none";
    }
});

// Capturing phase: close dropdown when clicking outside.
document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
        options.style.display = "none";
    }
}, true);