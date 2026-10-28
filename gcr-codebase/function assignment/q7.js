
function makeMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);

console.log(triple(5));
console.log(triple(4));

// Another example
const double = makeMultiplier(2);

console.log(double(5));
