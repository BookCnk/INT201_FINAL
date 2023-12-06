const books = require('./bookListV2').bookListV2;

function findByTitle(arr, name) {
    let books = []
    for (let book of arr) {
        if (book.title.includes(name)) {
            books.push(book)
        }
    }
    return books
}

function findByAuthor(arr, name) {
    let books = []
    for (let book of arr) {
        if (book.authors.includes(name)) {
            books.push(book)
        }
    }
    return books
}

const findByCategory = (arr, category) => {
    let books = []
    for (let book of arr) {
        if (book.categories.includes(category)) {
            books.push(book)
        }
    }
    return books
}

function findByDate(arr, date) {
    let books = []
    for (let book of arr) {
        for (let key in book) {
            if (key === "publishedDate") {
                let isMatch = new RegExp(date).test(book[key].$date)
                if (isMatch) {
                    books.push(book)
                }
            }
        }
    }
    return books
}
console.log(findByDate(books, '2009-04-01'))