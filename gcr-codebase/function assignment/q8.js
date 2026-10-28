
Array.prototype.myMap = function(callback) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};

// Example 1: Double each number
console.log([1, 2, 3].myMap(num => num * 2));

// Example 2: Square each number
console.log([1, 2, 3, 4].myMap(num => num * num));
