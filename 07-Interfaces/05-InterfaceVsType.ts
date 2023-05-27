/**
 * Once a type is defined, we cannot redefine it again,
 * or, we cannot re-open them
 * With type, we cannot use 'extends', instead we use '&'
 */

type Person = { name: string };

// Now I cannot redefine it
// type Person = { age: number }; // it will give error (Duplicate Identifier)

/**
 * On the other hand, interface can be defined again, or re-opened,
 * and it will consider it as adding more property.
 * 
 * Interface can only describe the shape of an object only,
 * 
 */

interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): string;
}

const rio: Dog = {
    name: "Rio",
    age: 3,
    breed: "Labra",
    bark() {
        return "Woof";
    },
};
