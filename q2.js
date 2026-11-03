let userName = "Yashi";                 
let userAge = 20;                       
let isActive = true;                    
let userSkills = ["HTML", "CSS", "JS"]; 
let userDetails = {                     
    city: "Mathura",
    course: "B.Tech"
};
let userAddress = null;                 
let userEmail;  
let report = [
    {
        Label: "User Name",
        Value: userName,
        Type: typeof userName
    },
    {
        Label: "User Age",
        Value: userAge,
        Type: typeof userAge
    },
    {
        Label: "Active Status",
        Value: isActive,
        Type: typeof isActive
    },
    {
        Label: "User Skills",
        Value: userSkills,
        Type: Array.isArray(userSkills) ? "Array" : typeof userSkills
    },
    {
        Label: "User Details",
        Value: userDetails,
        Type: typeof userDetails
    },
    {
        Label: "User Address",
        Value: userAddress,
        Type: userAddress === null ? "Null" : typeof userAddress
    },
    {
        Label: "User Email",
        Value: userEmail,
        Type: typeof userEmail
    }
];
console.table(report);
