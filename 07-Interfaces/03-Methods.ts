interface Person {
    readonly id: number;
    name: string;
    nickname?: string;
    age: number;
    sayHi(): string;
    sayHello: (name: string) => string;
}

const ujj: Person = {
    id: 23,
    name: "Ujjawal Gupta",
    age: 23,
    sayHi() {
        return `Hi ${this.name}`;
    },
    sayHello: naam => `Hi ${naam}`,
};

console.log(ujj.sayHi());
console.log(ujj.sayHello("Naman"));
