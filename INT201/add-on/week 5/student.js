class Student {
    constructor(studentId, studentName, year, studentCourses) {
        this.studentId = studentId
        this.studentName = studentName
        this.year = year
        this.studentCourses = studentCourses
    }

    getStudentId() {
        return this.studentId
    }

    getStudentName() {
        return this.studentName
    }

    getYear() {
        return this.year
    }

    getStudentCourses() {
        return this.studentCourses
    }

    getStudentInfo() {
        return {
            studentId: this.studentId,
            studentName: this.studentName,
            year: this.year,
            studentCourses: this.studentCourses
        }
    }
}

module.exports = Student