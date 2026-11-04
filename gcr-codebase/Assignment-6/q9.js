"use strict";

/*
Predicted Output:

Script start
Script end
Promise callback
Timeout callback

Explanation:

1. Synchronous statements execute first.
2. Promise.then() callback is a microtask.
3. setTimeout() callback is a macrotask.
4. Microtasks execute before macrotasks after
   the synchronous code completes.
*/

console.log("Script start");

// Macrotask
setTimeout(() => {

    console.log("Timeout callback");

}, 0);

// Microtask
Promise.resolve().then(() => {

    console.log("Promise callback");

});

console.log("Script end");