class Pokemon {
    #atk // เป็น private variable 
    #hp // เป็น private variable 

    constructor(name = undefined, hp = 0, atk = 0) {
        this.name = name
        this.#hp = hp
        this.#atk = atk
    }

    getName() {
        return this.name
    }

    getHp() {
        return this.#hp
    }

    getAtk() {
        return this.#atk
    }

    setHp(newHp) {
        this.#hp = newHp
    }

    getInfo() {
        return `Name: ${this.name}, HP: ${this.#hp}, ATK: ${this.#atk}`
    }
}

export default Pokemon