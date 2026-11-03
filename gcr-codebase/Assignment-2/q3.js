let x = 16.75;
let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let cube = Math.pow(x, 3);
let randomNumber = Math.floor(Math.random() * 41) + 10;

let summary = `
Original Value: ${x}
Rounded Value: ${roundedValue}
Square Root: ${squareRoot}
Cube: ${cube}
Random Number: ${randomNumber}
`;

console.log(summary);