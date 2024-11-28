let userRole = "admin";
let accessLevel;

if(userRole === "admin"){
    accessLevel = "Full access granted";
}
else if (userRole === "manager"){
    accessLevel = "Limited access granted";
}
else{
    accessLevel = "No access granted";
}
console.log("Access level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);

let userType = "admin";
let userCategory;

switch (userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown"
    }

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated": "Not authenticated";
console.log("Authentication Status:", authenticationStatus);

let dietCustomer = "Employee";
let mssgAuthorization;
switch (dietCustomer){
    case "Employee":
        mssgAuthorization = "Dietary Services"
        console.log("You are allowed to:", mssgAuthorization)
        break;
    case "Enrolled Member":
        mssgAuthorization = "Dietary Services and one-on-one interaction with a dietician";
        console.log("You are allowed to:",mssgAuthorization);
        break;
    case "Subscriber":
        mssgAuthorization = "partial access to Dietary Services";
        console.log("You are allowed to:", mssgAuthorization);    
        break;
    default:
        console.log("You need to entroll or at least subscribe first to avail this facility")
        break;
    }
