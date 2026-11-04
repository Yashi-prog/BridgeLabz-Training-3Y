"use strict";

// Design stage
function design(callback) {

    setTimeout(() => {

        console.log("Design completed");

        callback();

    }, 1000);
}

// Build stage
function build(callback) {

    setTimeout(() => {

        console.log("Build completed");

        callback();

    }, 1000);
}

// Test stage
function test(callback) {

    setTimeout(() => {

        console.log("Testing completed");

        callback();

    }, 1000);
}

// Deploy stage
function deploy(callback) {

    setTimeout(() => {

        console.log("Deployment completed");

        callback();

    }, 1000);
}

// Celebrate stage
function celebrate() {

    setTimeout(() => {

        console.log("Celebration time!");

    }, 1000);
}

// Nested callbacks
design(() => {

    build(() => {

        test(() => {

            deploy(() => {

                celebrate();

            });

        });

    });

});