"use strict";

const trackingBox = document.getElementById("trackingBox");
const coords = document.getElementById("coords");

// Track mouse movement inside the box.
trackingBox.addEventListener("mousemove", function (event) {
    coords.textContent =
        `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

// Place a red dot on double-click.
trackingBox.addEventListener("dblclick", function (event) {
    const boxPosition = trackingBox.getBoundingClientRect();

    const redDot = document.createElement("div");

    redDot.style.width = "10px";
    redDot.style.height = "10px";
    redDot.style.backgroundColor = "red";
    redDot.style.borderRadius = "50%";
    redDot.style.position = "absolute";

    // Convert client coordinates into box-relative coordinates.
    redDot.style.left = `${event.clientX - boxPosition.left}px`;
    redDot.style.top = `${event.clientY - boxPosition.top}px`;

    trackingBox.appendChild(redDot);
});