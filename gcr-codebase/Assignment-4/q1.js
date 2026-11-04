"use strict";

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(discountPercent) {
        this.price = this.price - (this.price * discountPercent / 100);
    }

    displayDetails() {
        return `ID: ${this.id}
Name: ${this.name}
Price: ₹${this.price}
Category: ${this.category}`;
    }
}

const product1 = new Product(1, "Laptop", 50000, "Electronics");
const product2 = new Product(2, "Mobile", 15000, "Electronics");
const product3 = new Product(3, "Mouse", 800, "Accessories");
const product4 = new Product(4, "Keyboard", 1200, "Accessories");

product1.applyDiscount(10);

const products = [product1, product2, product3, product4];

console.log("All Products:");

products.forEach(product => {
    console.log(product.displayDetails());
});

const expensiveProducts = products.filter(product => product.price > 1000);

console.log("\nProducts with price greater than ₹1000:");

expensiveProducts.forEach(product => {
    console.log(product.displayDetails());
});