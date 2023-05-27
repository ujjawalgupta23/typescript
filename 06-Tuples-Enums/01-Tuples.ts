/**
 * Tuples are a special type exclusive to TS (does not exist in JS)
 * Tuples are arrays of fixed lengths and ordered with specific types
 */

let myTuple: [string, number];
myTuple = ["Ujjawal", 23];
// myTuple = [9, 'Naman']  // this is invalid

// If I want an input of RGB color, which only allow 3 numbers
const color: [number, number, number] = [255, 0, 255];

// If I want to store an HTTP response with (status, message) e.g. [404, 'Not Found']
type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];
// goodRes[0] = '404' // not allowed

// LIMITATION: This can be done
goodRes.push(403);
goodRes.pop();
goodRes.pop();
goodRes.pop();

// Instead, we can use object with types.

// To create an array of HTTP response
const responses: HTTPResponse[] = [
    [404, "Not Found"],
    [200, "OK"],
];
