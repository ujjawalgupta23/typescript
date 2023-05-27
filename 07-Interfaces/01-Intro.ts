/**
 * Interfaces serve alomst the exact same purpose as 'type' aliases,
 * with slightly different syntax.
 * We can use them to create reusable,
 * modular types that describe the shapes of objects
 */

// Just like type
// type Point = { x: number; y: number };
// const pt: Point = { x: 23, y: 9 };

// Interface

interface Point {  // This is not object
    x: number;
    y: number;
}

const pt: Point = { x: 22, y: 21 };
