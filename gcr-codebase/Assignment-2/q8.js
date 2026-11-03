let cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let totalBeforeDiscount = 0;
let totalAfterCategoryDiscount = 0;

for (let product of cart) {
    totalBeforeDiscount += product.price;

    let price = product.price;

    if (product.category === "electronics") {
        price = price - (price * 0.10);
    } else if (product.category === "fashion") {
        price = price - (price * 0.05);
    }

    totalAfterCategoryDiscount += price;
}

let finalTotal = totalAfterCategoryDiscount;

if (totalBeforeDiscount > 50000) {
    finalTotal = finalTotal - (finalTotal * 0.05);
}

console.log("Total Before Discount:", totalBeforeDiscount);
console.log("Total After Category Discounts:", totalAfterCategoryDiscount);
console.log("Final Cart Total:", finalTotal);