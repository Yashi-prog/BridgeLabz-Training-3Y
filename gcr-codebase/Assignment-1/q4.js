let marks = [85, 90, 78, 88, 92];

let totalMarks = 0;

for (let mark of marks) {
    totalMarks += mark;
}

let average = totalMarks / marks.length;

let percentage = (totalMarks / (marks.length * 100)) * 100;

let hasFailed = marks.some(mark => mark < 35);

console.log("Average Marks: " + average.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) + "%");

if (hasFailed || percentage < 50) {
    console.log("Detained");
}
else if (percentage >= 85) {
    console.log("Promoted with Distinction");
}
else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
}
