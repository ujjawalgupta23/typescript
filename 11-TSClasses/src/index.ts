class Player {
    first: string;
    readonly last: string; // now it cannot be modified after assignment
    // Classfield type
    private score = 0;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    private secretMethod(): void {
        console.log("This is private method");
    }
}

const p1 = new Player("Ujjawal", "Gupta");
// p1.last = 'Gupta'  // cannot assign due to readonly
// p1.score = 1 // not possible due to private
// p1.secretMethod()

/**
 * If we assign puclic to any property of method,
 * it can be accessed from anywhere,
 * by default everything is public
 */

/**
 * If we don't want our variable to be accessed outside the class,
 * then we can use private access modifier
 */

class PlayerShortHand {
    protected score = 0;
    constructor(public first: string, public last: string) {}

    get fullName() {
        return `${this.first} ${this.last}`;
    }

    get playerScore(): number {
        return this.score;
    }

    set playerScore(newScore: number) {
        if (newScore < 0) {
            throw new Error("Score cannot be Negative");
        }
        this.score = newScore;
    }
}

class SuperPlayer extends PlayerShortHand {
    isAdmin: boolean = true;
    maxScore() {
        this.score = 100; // only possible with 'protected'
    }
}

const p2 = new PlayerShortHand("Naman", "Gupta");
p2.fullName;
console.log(p2.playerScore);
p2.playerScore = 23;
console.log(p2.playerScore);

/**
 * Using Interface, so that any class which implements it,
 * will have to implement that property
 */

interface Colorful {
    color: string;
}

interface Printable {
    print(): void;
}

class Bike implements Colorful {
    constructor(public color: string) {}
}

class Pajama implements Colorful, Printable {
    constructor(public brand: string, public color: string) {}

    print() {
        console.log(`Pajama is of brand ${this.brand} and color ${this.color}`);
    }
}

const b1 = new Bike("Gunmetal Grey");

const paj = new Pajama("UCB", "grey");

/**
 * Abstract Class
 * We cannot instantiate an abstract class,
 * If i mark method as abstract, then I have to implement it,
 * whereever i'm inheriting it
 */

abstract class Employee {
    constructor(public name: string, public age: number) {}

    abstract getPay(): number;

    greet() {
        console.log(`Welcome Onboard ${this.name}`);
    }
}

class FullTimeEmp extends Employee {
    constructor(
        public name: string,
        public age: number,
        private salary: number
    ) {
        super(name, age);
    }
    getPay(): number {
        return this.salary;
    }
}

class PartTimeEmp extends Employee {
    constructor(
        public name: string,
        public age: number,
        private hourlyRate: number,
        private hourlyWorked: number
    ) {
        super(name, age);
    }
    getPay(): number {
        return this.hourlyRate * this.hourlyWorked;
    }
}

const ujjawal = new FullTimeEmp("Ujjawal Gupta", 23, 1500000);
console.log(ujjawal.getPay());

const naman = new PartTimeEmp("Naman Gupta", 21, 5000, 40);
console.log(naman.getPay());
