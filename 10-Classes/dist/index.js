class Player {
    static description = "Player In Our Game";
    #score = 0;
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.#secret();
    }
    static randomPlayer() {
        return new Player("Ujjawal", "Gupta");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    set fullName(newName) {
        cosnt[(first, last)] = newName.split("");
        this.first = this.first;
        this.last = this.last;
    }
    get score() {
        return this.#score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score must be positive");
        }
        this.#score = newScore;
    }
    updateScore(newScore) {
        this.#score = newScore;
    }
    taunt() {
        console.log("Yess!!");
    }
    #secret() {
        console.log("Secret!!");
    }
}

class AdminPlayer extends Player {
    constructor(first, last, powers) {
        super(first, last);
        this.powers = powers;
    }
    isAdmin = true;
}

const admin = new AdminPlayer("ujjawal", "gupta", ["delete, restore"]);
