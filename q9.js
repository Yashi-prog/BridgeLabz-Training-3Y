let number1 = Math.floor(Math.random() * 20) + 1;
let number2 = Math.floor(Math.random() * 20) + 1;

let operators = ["+", "-", "*", "/"];

let randomIndex = Math.floor(Math.random() * operators.length);
let operator = operators[randomIndex];

let correctAnswer;

switch (operator) {

    case "+":
        correctAnswer = number1 + number2;
        break;

    case "-":
        correctAnswer = number1 - number2;
        break;

    case "*":
        correctAnswer = number1 * number2;
        break;

    case "/":
        correctAnswer = number1 / number2;
        correctAnswer = correctAnswer.toFixed(2);
        break;

    default:
        console.log("Invalid operator");
}

console.log(`Question: ${number1} ${operator} ${number2}`);
console.log(`Correct Answer: ${correctAnswer}`);
