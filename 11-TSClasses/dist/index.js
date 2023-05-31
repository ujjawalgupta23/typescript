"use strict";
class Player {
    constructor(first, last) {
        // Classfield type
        this.score = 0;
        this.first = first;
        this.last = last;
    }
    secretMethod() {
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
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.score = 0;
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get playerScore() {
        return this.score;
    }
    set playerScore(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be Negative");
        }
        this.score = newScore;
    }
}
class SuperPlayer extends PlayerShortHand {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this.score = 100; // only possible with 'protected'
    }
}
const p2 = new PlayerShortHand("Naman", "Gupta");
p2.fullName;
console.log(p2.playerScore);
p2.playerScore = 23;
console.log(p2.playerScore);
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Pajama {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
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
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Welcome Onboard ${this.name}`);
    }
}
class FullTimeEmp extends Employee {
    constructor(name, age, salary) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmp extends Employee {
    constructor(name, age, hourlyRate, hourlyWorked) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.hourlyRate = hourlyRate;
        this.hourlyWorked = hourlyWorked;
    }
    getPay() {
        return this.hourlyRate * this.hourlyWorked;
    }
}
const ujjawal = new FullTimeEmp("Ujjawal Gupta", 23, 1500000);
console.log(ujjawal.getPay());
const naman = new PartTimeEmp("Naman Gupta", 21, 5000, 40);
console.log(naman.getPay());
