// We can use 'readonly' and optional with Interfaces

interface Person {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string;
}

const p1: Person = {
    id: 23,
    first: "Ujjawal",
    last: "Gupta",
    nickname: "ujju",
};

// p1.id = 22 // invalid
p1.first = "Naman";
