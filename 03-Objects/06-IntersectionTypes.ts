// We can also intersect multiple types into one type

type Circle = {
    radius: number;
};

type Colorful = {
    color: string;
};

type ColorfulCirle = Circle & Colorful; // this will merge both types

const happyFace: ColorfulCirle = {
    radius: 4,
    color: "Blue",
};

// If we want to add new type in intersected one, then:
type Cat = {
    numLives: number;
};

type Dog = {
    breed: string;
};

type CatDog = Cat & Dog & { age: number };

const name1: CatDog = {
    numLives: 15,
    breed: "Golden Retriever",
    age: 2,
};
