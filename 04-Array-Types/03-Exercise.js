// ******************* PART 1 *******************
// Create an empty array of numbers called "ages":
var ages = [];
// ******************* PART 2 *******************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// ******************* PART 4 *******************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal() {
    var product = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        product[_i] = arguments[_i];
    }
    var totalSum = 0;
    for (var _a = 0, product_1 = product; _a < product_1.length; _a++) {
        var price = product_1[_a].price;
        totalSum += price;
    }
    return totalSum;
}
var prod1 = { name: 'S23 Ultra', price: 110000 };
var prod2 = { name: '14 Pro Max', price: 120000 };
console.log(getTotal(prod1, prod2));
