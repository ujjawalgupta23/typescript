/**
 * Objects can be typed by declaring what the object should look like in the annotation
 * Accessing the property that isn't defined or performing operations without keeping types in mind
 * will throw errors!
 */

function printName(person: { first: string; last: string }): void {
    console.log(`Hi ${person.first} ${person.last}`);
}

const obj1 = {
    first: "Ujjawal",
    last: "Gupta",
};

printName(obj1);

let coordinate: { x: number; y: number } = { x: 20.23, y: 23.2 };

function getCoordinate(): { x: number; y: number } {
    return { x: 23, y: 14 };
}

// Excess Properties
// printName({first: 'Naman', last: 'Gupta', 23})  // Not allowed as extra object property passed in argument

const info = { first: "Ujjawal", age: 23, last: "gupta" };
printName(info); // here it is allowed
