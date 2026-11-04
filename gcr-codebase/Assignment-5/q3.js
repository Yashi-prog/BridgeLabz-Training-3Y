"use strict";

class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {

        if (this.isIssued === false) {

            this.isIssued = true;

            console.log(`${this.title} has been issued.`);

        } else {

            console.log(`${this.title} is already issued.`);
        }
    }

    returnBook() {

        if (this.isIssued === true) {

            this.isIssued = false;

            console.log(`${this.title} has been returned.`);

        } else {

            console.log(`${this.title} is already available.`);
        }
    }
}

const book1 = new Book(
    "JavaScript Basics",
    "John Smith",
    "101"
);

const book2 = new Book(
    "Python Programming",
    "James Brown",
    "102"
);

const book3 = new Book(
    "Web Development",
    "Robert Martin",
    "103"
);

const books = [book1, book2, book3];

function displayAvailableBooks() {

    console.log("\nAvailable Books:");

    const availableBooks = books.filter(book => !book.isIssued);

    availableBooks.forEach(book => {

        console.log(
            `${book.title} | ${book.author} | ISBN: ${book.ISBN}`
        );
    });
}

function issueBookByISBN(ISBN) {

    const book = books.find(book => book.ISBN === ISBN);

    if (book) {

        book.issueBook();

    } else {

        console.log("Book not found.");
    }
}

displayAvailableBooks();

issueBookByISBN("102");

displayAvailableBooks();