# **showListOfCourseNotRegistration**

ให้เขียนโปรแกรมในการแสดงรายวิชาที่นักเรียนไม่ได้ลงทะเบียน


## ให้สร้าง Class Student (student.js)

ภายใน Class Student ต้องมีข้อมูล

id รหัส นส

name ชื่อนักศึกษา

year ชั้นปีที่กำลังศึกษา

courses เป็น array รายวิชาที่ละทะเบียนเรียน


ต้องมี method ที่ใช้แสดงข้อมูลของนักศึกษาแต่ละข้อมูลและแสดงข้อมูลทั้งหมด


และต้อง export class เพื่อนำไปเรียกใช้ที่อื่น


## ให้สร้าง Class Course (course.js)


ภายใน Class Course ต้องมีข้อมูล

id รหัสวิชา

name ชื่อวิชา

desc รายละเอียดของวิชา


ต้องมี method ที่ใช้แสดงข้อมูลของนักศึกษาแต่ละข้อมูลและแสดงข้อมูลทั้งหมด

และต้อง export class เพื่อนำไปเรียกใช้ที่อื่น

## ให้สร้าง Function CourseManagement (main.js)

Function CourseManagement ใช้ในการจัดการ Courses ทั้งหมด โดยจะต้อง เพิ่ม แก้ไข ค้นหาโดย ชื่อ รหัส และ แสดง Course ทั้งหมดได้

## ให้สร้าง Function showListOfCourseNotRegistration (main.js)

Function showListOfCourseNotRegistration

ต้อง Return Array ของวิชาที่นักเรียน ที่ไม่ได้ลงทะเบียน (เพิ่มความท้าทาย เรียงตามรหัสวิชา)

โดยต้องเป็นของชั้นปีที่นักศึกษากำลังเรียนอยู่ สามารถเช็คได้จากตัวเลขตัวแรกของรหัสวิชา


ตัวอย่างคำตอบ

```
Student {
  id: '62130500102',
  name: 'Somchai',
  year: 2,
  courses: [
    { id: 'INT206', name: 'Web-based Server Side II', desc: 'no desc' },
    { id: 'INT205', name: 'Database Mgt', desc: 'no desc' }
  ]
}

```

```
[
  { id: 'INT201', name: 'Web based Client Side I', desc: 'no desc' },   
  { id: 'INT202', name: 'Server Side I', desc: 'no desc' },
  { id: 'INT207', name: 'Network I', desc: 'no desc' },
  { id: 'INT214', name: 'Statistics IT', desc: 'no desc' },
  { id: 'INT203', name: 'Web based Client Side II', desc: 'no desc' },  
  { id: 'INT204', name: 'Web Tech', desc: 'no desc' },
  { id: 'INT208', name: 'Network II', desc: 'no desc' },
  { id: 'INT209', name: 'DevOps', desc: 'no desc' },
  { id: 'INT210', name: 'Arch Int Deploy', desc: 'no desc' },
  { id: 'INT221', name: 'INT 221 Int IT Project I', desc: 'no desc' }
]

```
