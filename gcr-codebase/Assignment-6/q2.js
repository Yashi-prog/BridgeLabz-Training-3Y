"use strict";

console.log("Start");

// Macrotask
setTimeout(() => {

    console.log("setTimeout callback");

}, 0);

// Microtask
Promise.resolve().then(() => {

    console.log("Promise callback");

});

// Synchronous log
console.log("Synchronous log");

console.log("End");