"use strict";

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const largeImage = document.getElementById("largeImage");
const closeButton = document.getElementById("closeModal");

// Event delegation for all gallery images.
gallery.addEventListener("click", function (event) {
    if (event.target.tagName !== "IMG") {
        return;
    }

    largeImage.src = event.target.src;
    largeImage.alt = event.target.alt;

    modal.style.display = "flex";
});

// Clicking inside the modal should not close it.
modalContent.addEventListener("click", function (event) {
    event.stopPropagation();
});

// Clicking outside the modal content closes it.
modal.addEventListener("click", function () {
    modal.style.display = "none";
});

closeButton.addEventListener("click", function () {
    modal.style.display = "none";
});