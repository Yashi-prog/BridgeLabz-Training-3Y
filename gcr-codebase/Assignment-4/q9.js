"use strict";

class Cart {

    constructor() {

        this.items = [];
    }

    
    addItem(name, price, quantity) {

        const item = {
            name: name,
            price: price,
            quantity: quantity
        };

        this.items.push(item);
    }

    
    getTotal() {

        return this.items.reduce(
            (total, item) => {

                return total + (item.price * item.quantity);

            },
            0
        );
    }

    applyCoupon(coupon) {

        const couponPattern = /^(SAVE|DISC)(\d{1,2})$/;

        
        if (!couponPattern.test(coupon)) {

            console.log("Invalid Coupon Code!");

            return this.getTotal();
        }

        
        const match = coupon.match(couponPattern);

        const discountPercent = Number(match[2]);

        if (discountPercent < 1 || discountPercent > 100) {

            console.log("Invalid Discount Percentage!");

            return this.getTotal();
        }

        const total = this.getTotal();

        const discountAmount =
            total * discountPercent / 100;

        const finalTotal = total - discountAmount;

        console.log(`Original Total: ₹${total}`);

        console.log(`Discount: ${discountPercent}%`);

        console.log(`Discount Amount: ₹${discountAmount}`);

        console.log(`Final Total: ₹${finalTotal}`);

        return finalTotal;
    }
}

const cart = new Cart();

cart.addItem("Laptop", 50000, 1);

cart.addItem("Mouse", 1000, 2);

cart.addItem("Keyboard", 2000, 1);

console.log("Shopping Cart:");

cart.items.forEach(item => {

    console.log(
        `${item.name} - ₹${item.price} × ${item.quantity}`
    );
});

console.log("\nCart Total: ₹" + cart.getTotal());

console.log("\nApplying Coupon:");

cart.applyCoupon("SAVE20");