const movies = require('./movise.json').movies
let playList = []

let addMovie = (movie, ...id) => {
    // for (let i = 0; i < id.length; i++) {
    //     playList.push(movie.find(movie => movie.id === id[i]))
    // }

    id.forEach(id => playList.push(movie.find(movie => movie.id === id)))
    return playList
}

let deleteMovie = (id) => {
    let index = playList.findIndex(movie => movie.id === id)
    playList.splice(index, 1)
    return playList
}

let swapMovie = (id1, id2) => {
    let index1 = playList.findIndex(movie => movie.id === id1)
    let index2 = playList.findIndex(movie => movie.id === id2)
    let temp = playList[index1]
    playList[index1] = playList[index2]
    playList[index2] = temp
    return playList
}

addMovie(movies, 13, 12, 11)
// console.log(deleteMovie(12))
console.log(swapMovie(12, 11))




