// ******************* PART 1 *******************
// Create an empty array of numbers called "ages":
const ages: number[] = [];

// ******************* PART 2 *******************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard: string[][] = [];

// ******************* PART 3 *******************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Product = { name: string; price: number };

// ******************* PART 4 *******************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(...products: Product[]): number {
    let totalSum = 0;
    for (const { price } of products) {
        totalSum += price;
    }
    return totalSum;
}

const prod1: Product = { name: "S23 Ultra", price: 110000 };
const prod2: Product = { name: "14 Pro Max", price: 120000 };

console.log(getTotal(prod1, prod2));
