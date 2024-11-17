class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    exercise() {
        console.log("Running is fun! said no one ever.");
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);
    }
}

class Programmer extends Person {
    // Default value for busy is set to true
    busy = true;

    constructor(name, job, age, languages = []) {
        super(name, job, age);
        this.languages = languages;
    }

    completeTask() {
        this.busy = false;
        console.log(`${this.name} has completed the task.`);
    }

    offerNewTask() {
        if (this.busy) {
            console.log(`${this.name} can't accept any new tasks right now.`);
        } else {
            console.log(`${this.name} would love to take a new responsibility.`);
        }
    }

    learnLanguage(language) {
        if (!this.languages.includes(language)) {
            this.languages.push(language);
            console.log(`${this.name} has learned ${language}.`);
        } else {
            console.log(`${this.name} knows ${language}.`);
        }
    }

    listLanguages() {
        console.log(`${this.name} knows these languages: ${this.languages.join(', ')}`);
    }
}

const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "Janitor", 55, ["HTML", "SASS", "Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);

c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");

c1.listLanguages();
c2.listLanguages();
c3.listLanguages();

console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);

person1.exercise();
person1.fetchJob();

