// To declare array with a specific type

const activeUsers: string[] = ["Ujjawal"];
activeUsers.push("Naman");
activeUsers.push("Nihal");
activeUsers.push("Nihal");

// activeUsers.push(23);  // this is not allowed

console.log(activeUsers);

const ageList: number[] = [23, 21];
ageList[1] = 22;
// ageList[0] = 'Ujjawal' // this is not allowed

// Alternative Syntax
const bools: Array<boolean> = [];
// const bool: boolean[] = []

// We can create Array of custom type
type Points = { x: number; y: number };

const coords: Points[] = [];
coords.push({ x: 1, y: 2 });
coords.push({ x: 23, y: 9 });
