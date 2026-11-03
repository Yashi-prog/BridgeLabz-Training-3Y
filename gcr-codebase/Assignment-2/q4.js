// Generate 8 random scores between 30 and 100
let scores = [];

for (let i = 0; i < 8; i++) {
    let score = Math.floor(Math.random() * 71) + 30;
    scores.push(score);
}

console.log("Scores:", scores);

// Highest and lowest score
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

// Calculate average using reduce
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;

// Count passing scores
let passingScores = scores.filter(score => score >= 50);
let passCount = passingScores.length;

console.log("Highest Score:", highestScore);
console.log("Lowest Score:", lowestScore);
console.log("Average Score:", average);
console.log("Passing Scores:", passingScores);
console.log("Number of Passing Students:", passCount);