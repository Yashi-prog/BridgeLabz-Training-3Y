
function applyOperation(numbers, operation) {
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        result.push(operation(numbers[i]));
    }

    return result;
}

// Double each number
const double = num => num * 2;

// Square each number
const square = num => num * num;

console.log(applyOperation([1, 2, 3, 4], double));
console.log(applyOperation([1, 2, 3, 4], square));
