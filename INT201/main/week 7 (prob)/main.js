class Person {
    constructor(firstName = 'N/A', lastName = 'N/A', dateOfBirth = new Date(Date.now())) {
        this.firstName = firstName
        this.lastName = lastName
        this.dateOfBirth = dateOfBirth
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    getAge() {
        return Math.floor((Date.now() - this.dateOfBirth) / 31536000000)
    }

    toString() {
        return `Person: ${this.getFullName()}, ${this.getAge()}`
    }

    static fromString(personString) {
        let [firstName, lastName, dateOfBirth] = personString.split(', ')
        return new Person(firstName, lastName, new Date(dateOfBirth))
    }
    
}

function isEqual(person2) {
    return this.firstName.toUpperCase() === person2.firstName.toUpperCase() &&
    this.lastName.toUpperCase() === person2.lastName.toUpperCase()
}

Person.prototype.isEqual = isEqual

const p1 = new Person('Snot', 'Bartlett', new Date(2003, 06, 15))

console.log(p1.getFullName())
console.log(p1.getAge())
console.log(p1.toString())
console.log(Person.fromString('Snot, Bartlett, 2003-07-15'))
console.log(p1.isEqual(Person.fromString('Snot, Bartlett, 2003-07-15')))
console.log(p1.isEqual(Person.fromString('Pual, Bartlett, 2003-07-16')))