"use strict";

const score = 50;
const status = "ready";

const announce = () => {
    console.log("Game started");
};

const startGame = () => {
    console.log(status);
};

console.log(score);
announce();
startGame();