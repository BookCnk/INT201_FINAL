const { template } = require('@babel/core')
//64130500034 Tanasit Aintakhan
class BookMark {
  constructor(isbn, totalPages = 0) {
    this.isbn = isbn
    this.totalPages = totalPages
    this.bookMarks = []
  }
  getBookMarks() {
    return this.bookMarks
  }

  addBookMark(pageNumber) {
    if (pageNumber > 1 && pageNumber <= this.totalPages) {
      this.bookMarks.push(pageNumber)
    }
    return this.bookMarks.length
  }

  removeBookMark(pageNumber) {
    if (pageNumber > 0 && pageNumber <= this.totalPages) {
      let index = this.bookMarks.indexOf(pageNumber)
      this.bookMarks.splice(index, 1)
      return pageNumber
    }
    return undefined
  }

  goToFirstBookMark() {
    if (this.bookMarks.length > 0) {
      return this.bookMarks[0]
    }
    return undefined
  }

  goToLastBookMark() {
    if (this.bookMarks.length > 0) {
      return this.bookMarks[this.bookMarks.length - 1]
    }
    return undefined
  }
}

module.exports = BookMark
