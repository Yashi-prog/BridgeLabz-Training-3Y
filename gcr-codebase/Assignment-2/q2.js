let productName = " wireless headphones PRO ";

let cleanedName = productName.trim();

cleanedName = cleanedName.toLowerCase();

cleanedName = cleanedName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

cleanedName = cleanedName.replace("Pro", "Pro Edition");

console.log("Cleaned Product Name:", cleanedName);
console.log("String Length:", cleanedName.length);