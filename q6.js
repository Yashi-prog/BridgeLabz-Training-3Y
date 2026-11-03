let purchaseAmount = Number(prompt("Enter total purchase amount:"));

let discountPercentage = 0;

if (purchaseAmount >= 10000) {
    discountPercentage = 25;
}
else if (purchaseAmount >= 5000) {
    discountPercentage = 15;
}
else if (purchaseAmount >= 2000) {
    discountPercentage = 5;
}
else {
    discountPercentage = 0;
}

let discountAmount = purchaseAmount * discountPercentage / 100;

let finalPrice = purchaseAmount - discountAmount;

purchaseAmount = Math.round(purchaseAmount);
discountAmount = Math.round(discountAmount);
finalPrice = Math.round(finalPrice);

console.log("Original Total: ₹" + purchaseAmount);
console.log("Discount Percentage: " + discountPercentage + "%");
console.log("Discount Amount: ₹" + discountAmount);
console.log("Final Price: ₹" + finalPrice);
