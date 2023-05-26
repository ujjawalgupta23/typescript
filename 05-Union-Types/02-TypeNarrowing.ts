function printAge(age: number | string): void {
    console.log(`You are ${age} years old!`);
}

printAge(23);
printAge("Twenty Three");

function calcTax(price: number | string, tax: number) {
    // it will show error here becuase TS is not sure whether it will be number or string
    // return price * tax

    // That is why we have to add if condition, comparing to type

    // if (typeof price === "string") {
    //     price.replace("$", "");
    // } else {
    //     return price * tax; // now it has no problem
    // }
    // OR

    if (typeof price === "string") {
        price = parseFloat(price.replace("₹", ""));
    }
    return price * tax; // at this point it knows it is number that is why no problem
}

console.log(calcTax(90000, 2.5));
console.log(calcTax("₹90000", 2.5));
