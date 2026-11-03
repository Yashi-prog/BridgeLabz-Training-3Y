let count = 0;

// Increment function
function increment() {
    count++;
    console.log("Count:", count);
}

// Decrement function
function decrement() {
    count--;
    console.log("Count:", count);
}

// Nested function example
function counterMessage() {
    let message = "Current Counter Value";

    function showMessage() {
        console.log(message, count);
    }

    showMessage();
}

// Simulating button clicks
increment();
increment();
decrement();

counterMessage();