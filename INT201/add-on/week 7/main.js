import poke from './pokemon.json' assert { type: "json" };
import pokeImg from './pokemon-images.json' assert { type: "json" };

let imageCount = 0
const divPokeCard = document.getElementById('poke_card')
const divPokeInfo = document.getElementById('poke_info')
const divContainer = document.getElementsByClassName('container')

const imageTag = document.createElement('img')
const pTag = document.createElement('p')
const divButton = document.createElement('div')
const nextButton = document.createElement('button')
const prevButton = document.createElement('button')

pTag.textContent = poke[imageCount].name.english
imageTag.src = pokeImg[poke[imageCount].name.english]
divButton.className = 'button_container'
nextButton.textContent = 'Next'
prevButton.textContent = 'Prev'
nextButton.className = 'next_button'
prevButton.className = 'prev_button'

divPokeCard.appendChild(imageTag)
divPokeCard.insertBefore(imageTag, divPokeInfo)
divPokeInfo.appendChild(pTag)
divContainer[imageCount].appendChild(divButton)
divButton.appendChild(prevButton)
divButton.appendChild(nextButton)

const isImageFound = (image) => {
    if (poke[imageCount].name.english in pokeImg) {
        image.src = pokeImg[poke[imageCount].name.english]
        image.alt = poke[imageCount].name.english
    } else {
        image.src = 'https://bitsofco.de/content/images/2018/12/broken-1.png'
        image.alt = 'Image not found'
    }
}

nextButton.addEventListener('click', () => {
    imageCount++
    if (imageCount >= poke.length) {
        imageCount = 0
    }
    pTag.textContent = poke[imageCount].name.english
    isImageFound(imageTag)
})

prevButton.addEventListener('click', () => {
    imageCount--
    if (imageCount < 0) {
        imageCount = poke.length - 1
    }
    pTag.textContent = poke[imageCount].name.english    
    isImageFound(imageTag)
})

// imageTag.addEventListener('error', () => {
//     imageTag.src = 'https://bitsofco.de/content/images/2018/12/broken-1.png'
//     imageTag.alt = 'pokemon image not found'
// })