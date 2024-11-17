class Patient {
    #name;
    #ssn;

    constructor(name, ssn) {
        this.#name = name;
        this.#ssn = ssn;
    }

    getName() {
        return this.#name;
    }

    getSsn() {
        return this.#ssn;
    }
}

const patient2 = new Patient("John", "123-45-6789");

console.log(patient2.getName()); 
console.log(patient2.getSsn());  

// console.log(patient2.#name); 
// console.log(patient2.#ssn); 
