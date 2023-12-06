const Course = require('./course.js')
const Student = require('./student.js')

const CourseCourseManagement = () => {
    let courses = []

    const addCourse = (courseId, courseName, description) => {
        courses.push(new Course(courseId, courseName, description).getCourseInfo())
    }

    const removeCourse = (courseId) => {
        courses = courses.filter(course => course.courseId !== courseId)
    }

    const updateCourse = (courseId, newCourseId, newCourseName, newDescription) => {
        const index = courses.findIndex(course => course.courseId === courseId)
        courses[index] = new Course(newCourseId, newCourseName, newDescription).getCourseInfo()
    }

    // const updateCourse = (id, newCourse) =>{
    //     courses[courses.findIndex(course => course.id === id)] = newCourse
    // }

    const getCourseById = (courseId) => {
        return courses.find(course => course.courseId === courseId)
    }
    
    const getCourseByName = (courseName) => {
        return courses.find(course => course.courseName === courseName)
    }

    const getAllCourses = () => {
        return courses
    }

    return [addCourse, removeCourse, updateCourse, getCourseById, getCourseByName, getAllCourses]
}

const [addCourse, removeCourse, updateCourse, getCourseById, getCourseByName, getAllCourses] = CourseCourseManagement()

addCourse('INT100', 'IT Fund')
addCourse('INT101', 'Program Fund')
addCourse('INT102', 'Web Tech')
addCourse('INT114', 'Discrete')
addCourse('INT103', 'Advance Prog')
addCourse('INT105', 'Basic SQL')
addCourse('INT104', 'User Experience')
addCourse('INT201', 'Web based Client Side I')
addCourse('INT202', 'Server Side I')
addCourse('INT205', 'Database Mgt')
addCourse('INT207', 'Network I')
addCourse('INT214', 'Statistics IT')
addCourse('INT203', 'Web based Client Side II')
addCourse('INT204', 'Web Tech')
addCourse('INT206', 'Web-based Server Side II')
addCourse('INT208', 'Network II')
addCourse('INT209', 'DevOps')
addCourse('INT210', 'Arch Int Deploy')
addCourse('INT221', 'INT 221 Int IT Project I')
addCourse('INT305', 'Un-and Semi Structured Data')
addCourse('INT307', 'Security I')
addCourse('INT314', 'Applied Mathematics for Data Science')
addCourse('INT319', 'IT Pro Comm')
addCourse('INT321', 'DevOps')
addCourse('INT308', 'Security II')
addCourse('INT339', 'Prep Career Training')
addCourse('INT340', 'Career Training')
addCourse('INT365', 'Capstone IT Proj I')
addCourse('INT314', 'Applied Mathematics for Data Science')
addCourse('INT319', 'IT Pro Comm')

// removeCourse('INT100')
// updateCourse('INT101', 'INT101', 'Test', 'Fundamental of programming')
// console.log(getCourseById('INT101'))
// console.log(getCourseByName('Test'))
// console.log(getCourseByName('Discrete'))
// console.log(getAllCourses())

const showListOfCourseNotRegistration = (student, courses) => {
    const studentCourses = student.getStudentCourses()
    const getStudentYearCourses = courses.filter(course => course.courseId.startsWith(`INT${student.getYear()}`))
    return getStudentYearCourses.filter(allCourse => !studentCourses.some(studentCourse => studentCourse.courseId === allCourse.courseId))
}

let course1 = getCourseById('INT201')
let course2 = getCourseById('INT214')
let student = new Student('64130500034', 'Tanasit', 2, [course1, course2])
// console.log(student)

// test showListOfCourseNotRegistration
// console.log(showListOfCourseNotRegistration(student, getAllCourses()))
console.log(showListOfCourseNotRegistration(student, getAllCourses()))