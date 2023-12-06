import poke from "./pokemon.json" assert { type: "json" };
import pokeImg from "./pokemon-images.json" assert { type: "json" };

let divPokedex = document.getElementById("pokedex");

// let newImgElement = document.createElement('img');
// newImgElement.className = 'pokeImg';
// newImgElement.src = pokeImg[poke[0].name.english];

// let pElement = document.createElement('p');
// pElement.className = 'pokeName';
// pElement.innerText = poke[0].name.japanese;

// newDiv.append(newImgElement);
// newDiv.append(pElement);

// divPokedex.append(newDiv);

function createPokeCard(pokeData) {
    let newDiv = document.createElement("div");
    newDiv.className = "pokeCard";

    let newImgElement = document.createElement("img");
    newImgElement.className = "pokeImg";
    newImgElement.src = pokeImg[pokeData.name.english];
    newImgElement.alt = pokeData.name.english;

    let pElement = document.createElement("p");
    pElement.className = "pokeName";
    pElement.innerText = pokeData.name.english;

    let pokeTypes = pokeData.type;
    if (pokeTypes.length > 1) {
        pokeTypes = pokeTypes.join(", ");
    }
    let pokeTypeElement = document.createElement("p");
    pokeTypeElement.className = "pokeType";
    pokeTypeElement.innerText = pokeTypes;

    let pokeStats = pokeData.base;
    let pokeStatsElement = document.createElement("p");
    pokeStatsElement.className = "pokeStats";
    pokeStatsElement.innerText = `HP: ${pokeStats.HP} | ATK: ${pokeStats.Attack} | DEF: ${pokeStats.Defense} | SP.ATK: ${pokeStats["Sp. Attack"]} | SP.DEF: ${pokeStats["Sp. Defense"]} | SPD: ${pokeStats.Speed}`;

    newDiv.append(newImgElement);
    newDiv.append(pElement);
    newDiv.append(pokeTypeElement);
    newDiv.append(pokeStatsElement);

    divPokedex.append(newDiv);
}

poke.forEach((pokeData) => {
    createPokeCard(pokeData);
});
