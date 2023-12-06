const books = require('./bookList').bookList;

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
    date = new Date(date)
    for (let book of arr) {
        for (let key in book) {
            if (key === 'publishedDate') {
                let bookDate = new Date(book[key].$date)
                if (bookDate.getFullYear() === date.getFullYear() && bookDate.getMonth() === date.getMonth() && bookDate.getDate() === date.getDate()) {
                    books.push(book)
                }
            }
        }
    }
    return books
}
console.log(findByDate(books, '2009-04-01'))