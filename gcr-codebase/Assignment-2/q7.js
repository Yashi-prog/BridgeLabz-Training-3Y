let feedback =
    "Great product! Fast delivery and amazing sound quality!";

let words = feedback.split(" ");
let wordCount = words.length;

let hasBad = feedback.toLowerCase().includes("bad");
let hasPoor = feedback.toLowerCase().includes("poor");

console.log("Feedback:", feedback);
console.log("Word Count:", wordCount);

if (!hasBad && !hasPoor) {
    console.log("Feedback is Positive");
} else {
    console.log("Feedback Needs Improvement");
}