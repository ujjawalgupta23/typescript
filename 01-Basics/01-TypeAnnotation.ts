// We can declare the type of a variable using Type Annotation

// Strings
let movieTitle: string = "Baahubali";
movieTitle = "RRR";

// If don't comment this, it will not stop TS converting it to JS
// It will just show error while compiling
// movieTitle = 23;  // This is not allowed in TS

// movieTitle.upper() // Property 'upper' does not exist on type 'string'

// Number
let myAge: number = 23;
myAge++;
// myAge = "Ujjawal"; // This is not allowed

// Booleans
let hasDrivingLicense: boolean = false
hasDrivingLicense = true
// hasDrivingLicense = 'Yes' // Not Valid

// After compiling to JS, it will convert let/const to var and remove all the annotations

// Type Inference
/**
 * Most of the time, Type Annotation is not needed
 * TS can remember a value's type during variable declaration,
 *  even if we don't provide a type annotation,
 * and it will enforce that type moving forward
 */

let personName = 'Ujjawal'
// personName = 23 // Type 'number' is not assignable to type 'string'

let holdsLicense = true
// holdsLicense = 'no'  // not allowed
