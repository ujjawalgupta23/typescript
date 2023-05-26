// If I want to add multiple types to my array

const collection: any[] = ["Ujjawal", 23, true, {}];

// If I want to specify with limited types,
// it has to be inside parenthesis

// here it will think to get array of numbers or a string
// const arr: string | number[] = []

// here it will think that array should be either of string type of number type
const stuff: string[] | number[] = [1, 2, 3];

const coll1: (string | number)[] = ["Ujjawal", 23];

type Point = { x: number; y: number };
type Coordintes = { lat: number; long: number };

const position: (Point | Coordintes)[] = [{ x: 23, y: 22 }];
position.push({ lat: 23.22, long: 22.23 });
