"use strict";

const steps = document.querySelectorAll(".step");
const form = document.getElementById("multiForm");

let currentStep = 0;

function showStep(stepNumber) {
    steps.forEach(function (step, index) {
        step.style.display = index === stepNumber ? "block" : "none";
    });

    currentStep = stepNumber;
}

function validateStep() {
    const inputs = steps[currentStep].querySelectorAll("input");

    for (const input of inputs) {
        if (!input.checkValidity()) {
            input.reportValidity();
            return false;
        }
    }

    return true;
}

document.getElementById("next1").addEventListener("click", function () {
    if (validateStep()) {
        showStep(1);
    }
});

document.getElementById("next2").addEventListener("click", function () {
    if (validateStep()) {
        showStep(2);
    }
});

document.getElementById("back2").addEventListener("click", function () {
    showStep(0);
});

document.getElementById("back3").addEventListener("click", function () {
    showStep(1);
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validateStep()) return;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    form.style.display = "none";

    document.getElementById("summary").innerHTML = `
        <h3>Form Summary</h3>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Password: Submitted</p>
    `;
});

// Initially show only Step 1.
showStep(0);