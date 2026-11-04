"use strict";

const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("reset");

const maxCharacters = 100;

message.addEventListener("input", updateCounter);

// Prevent typing beyond 100 characters.
message.addEventListener("beforeinput", function (event) {
    if (
        message.value.length >= maxCharacters &&
        event.data &&
        event.inputType.startsWith("insert")
    ) {
        event.preventDefault();
    }
});

function updateCounter() {
    const remaining = maxCharacters - message.value.length;

    counter.textContent = `${remaining} characters remaining`;

    if (remaining === 0) {
        counter.style.color = "red";
    } else if (remaining <= 20) {
        counter.style.color = "yellow";
    } else {
        counter.style.color = "green";
    }
}

resetButton.addEventListener("click", function () {
    message.value = "";
    updateCounter();
});