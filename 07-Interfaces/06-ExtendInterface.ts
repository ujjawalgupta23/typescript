/**
 * Suppose we want to add a functionality to interface,
 * but we don't want to modify current interface
 */

interface Dog {
    breed: string;
    age: number;
}

interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "guide";
}

const rosco: ServiceDog = {
    breed: "Labrador Retriever",
    age: 4,
    job: "drug sniffer",
};
