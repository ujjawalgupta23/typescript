// TypeScript can automatically infer which type is being returned
// We mention the return type annotation after the function parameter list

function square(num: number): number {
    // num * num  // I have to return somethig from here, otherwise it will show error
    return num * num;
}

square(2);
square;

// TS can also assume multiple return types

function rand(num: number) {
    // string | number
    if (Math.random() > 0.5) {
        return num.toString();
    } else return num;
}
