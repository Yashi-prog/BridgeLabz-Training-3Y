"use strict";

const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addBtn");
const productList = document.getElementById("productList");

addButton.addEventListener("click", addProduct);

function addProduct() {
    const productName = productInput.value.trim();

    if (productName === "") {
        alert("Please enter a product name");
        return;
    }

    const listItem = document.createElement("li");

    const productText = document.createElement("span");
    productText.textContent = productName;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.dataset.action = "edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.dataset.action = "delete";

    listItem.append(productText, editButton, deleteButton);
    productList.appendChild(listItem);

    productInput.value = "";
}

// Event delegation: parent UL handles Edit and Delete clicks.
productList.addEventListener("click", function (event) {
    const button = event.target.closest("button");

    if (!button) return;

    const listItem = button.parentElement;
    const productText = listItem.querySelector("span");

    if (button.dataset.action === "delete") {
        listItem.remove();
    }

    if (button.dataset.action === "edit") {
        if (listItem.querySelector("input")) return;

        const editInput = document.createElement("input");
        editInput.value = productText.textContent;

        productText.style.display = "none";
        productText.after(editInput);

        button.textContent = "Save";

        function saveEdit() {
            productText.textContent =
                editInput.value.trim() || productText.textContent;

            productText.style.display = "";
            editInput.remove();
            button.textContent = "Edit";
        }

        button.dataset.action = "save";
        button.onclick = saveEdit;

        editInput.addEventListener("keydown", function (e) {
            if (e.key === "Enter") saveEdit();
        });
    }

    if (button.dataset.action === "save") {
        const editInput = listItem.querySelector("input");

        if (editInput) {
            productText.textContent =
                editInput.value.trim() || productText.textContent;

            productText.style.display = "";
            editInput.remove();
        }

        button.textContent = "Edit";
        button.dataset.action = "edit";
        button.onclick = null;
    }
});

// Clicking outside an edited item automatically saves it.
document.addEventListener("click", function (event) {
    document.querySelectorAll("#productList li input").forEach(function (input) {
        const listItem = input.parentElement;

        if (!listItem.contains(event.target)) {
            const productText = listItem.querySelector("span");
            const editButton = listItem.querySelector("button");

            productText.textContent =
                input.value.trim() || productText.textContent;

            productText.style.display = "";
            input.remove();

            editButton.textContent = "Edit";
            editButton.dataset.action = "edit";
            editButton.onclick = null;
        }
    });
});