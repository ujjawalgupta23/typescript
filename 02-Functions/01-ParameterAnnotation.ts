function calcSquare(number) {
    // this parameter has type any, so I can pass anything to is
    number.toUpperCase(); // here TS will not say anythind due to "any" type
    number();
    return number * number;
}

calcSquare(2);
calcSquare(true);
calcSquare("Ujjawal");

function calcSq(num: number) {
    // num()
    // num = 'ujjawal'  // now this is not allowed
    return num * num;
}

calcSq(2);
// calcSq('ujjawal')  // invalid arg
// calcSq(true) // invalid arg

function greet(name) {
    // same here, I can pass any type
    name = 23;
    name();
    console.log(`Hi ${name}!!`);
}

greet("Ujjawal");
greet(23);
greet(true);

function greetPerson(name: string) {
    // name * name // TS will not allow this with arithmetic operator
    console.log(`Hi ${name}`);
}

greetPerson("Ujjawal");
// greetPerson(23) // invalid argument

const doSomething = (name: string, age: number, isFunny: boolean) => {};

doSomething("Ujjawal", 23, true); // I have to provide exactly 3 arguments
