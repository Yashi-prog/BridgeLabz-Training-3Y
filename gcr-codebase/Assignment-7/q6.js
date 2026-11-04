"use strict";

const searchInput = document.getElementById("search");
const rows = document.querySelectorAll("#studentRows tr");
const emptyMessage = document.getElementById("empty");

searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase().trim();

    let visibleRows = 0;

    rows.forEach(function (row) {
        const rowText = row.textContent.toLowerCase();

        if (rowText.includes(searchValue)) {
            row.style.display = "";
            visibleRows++;
        } else {
            row.style.display = "none";
        }
    });

    if (visibleRows === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
});