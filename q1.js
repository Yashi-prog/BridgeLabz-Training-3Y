// Declare user name
let userName = "Yashi";

// Get the current hour (0 to 23)
let currentHour = new Date().getHours();

// Check the time and display the greeting
if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
}
else if (currentHour >= 12 && currentHour <= 17) {
    console.log(`Good Afternoon ${userName}!`);
}
else {
    console.log(`Good Evening ${userName}!`);
}
