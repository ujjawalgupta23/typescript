// Basically any turns off the type checking for the variables

let myName: any = "Ujjawal";
// Here it will allow everything, and we'll get to know abut the error at runtime
myName = 23;
myName = true;
myName();
myName.toUpperCase();

// Delayed Initialization & Implicit Any
const movies = ["Arrival", "Harry Potter", "Mission Impossible", "F&F"];
let foundMovie1; // this will be 'any'

for (const movie of movies) {
    if (movie === "F&F") {
        foundMovie1 = movie; // this will still be type of any
    }
}

let foundMovie2: string; // this will only allow string
for (const movie of movies) {
    if (movie === "Harry Potter") {
        foundMovie2 = movie; // this will only contain string, nothing else
    }
}

// foundMovie2 = 23;  // this will not be allowed
