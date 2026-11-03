"use strict";

for (var i = 1; i <= 4; i++) {
    var row = "";

    for (var j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row);
}

console.log("Final i:", i);
console.log("Final j:", j);