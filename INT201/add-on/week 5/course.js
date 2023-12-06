class Course {
    constructor(courseId = null, courseName = null, description = null) {
        this.courseId = courseId
        this.courseName = courseName
        this.description = description
    }

    getCourseInfo() {
        return {
            courseId: this.courseId,
            courseName: this.courseName,
            description: this.description === null ? 'No description' : this.description
        }
    }
}

module.exports = Course