const poke = require("./pokeList.js").pokeList;

function fire_type(arr) {
    let fire = [];
    for (let obj of arr) {
        if (obj !== null && obj.type === "fire") {
            fire.push(obj);
        }
    }
    return fire.sort((a, b) => a.id - b.id);
}

function most_atk(arr) {
    let all = [];
    let maxFireArr = [];
    let maxGrassArr = [];
    let maxElectricArr = [];
    let maxFire = 0;
    let maxGrass = 0;
    let maxElectric = 0;

    for (let obj of arr) {
        if (obj !== null) {
            if (obj.type === "fire") {
                if (obj.atk > maxFire) {
                    maxFire = obj.atk;
                    maxFireArr = [obj];
                } else if (obj.atk === maxFire) {
                    maxFireArr.push(obj);
                }
            } else if (obj.type === "grass") {
                if (obj.atk > maxGrass) {
                    maxGrass = obj.atk;
                    maxGrassArr = [obj];
                } else if (obj.atk === maxGrass) {
                    maxGrassArr.push(obj);
                }
            } else if (obj.type === "electric") {
                if (obj.atk > maxElectric) {
                    maxElectric = obj.atk;
                    maxElectricArr = [obj];
                } else if (obj.atk === maxElectric) {
                    maxElectricArr.push(obj);
                }
            }
        }
    }
    all = all.concat(maxFireArr, maxGrassArr, maxElectricArr);
    return all.sort((a, b) => a.atk - b.atk);       
}

console.log(most_atk(poke));
