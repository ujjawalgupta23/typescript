interface Person {
    name: string;
}

interface Employee {
    readonly id: number;
}

interface Engineer extends Person, Employee {
    level: string;
    skills: string[];
}

const ujjawal: Engineer = {
    name: "Ujjawal Gupta",
    id: 23,
    level: "SDE 1",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "React"],
};
