"use strict";

const themeButtons = document.querySelectorAll("[data-theme-choice]");

themeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedTheme = button.getAttribute("data-theme-choice");

        // Apply theme using setAttribute().
        document.body.setAttribute("class", selectedTheme);

        // Store selected theme in custom attribute.
        document.body.setAttribute("data-theme", selectedTheme);

        document.getElementById("themeName").textContent = selectedTheme;
    });
});