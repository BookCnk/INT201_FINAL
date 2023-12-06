let arr_str = ["hi", "random", "Sawaddee", "kub", "adobe", "Adobe", "Good luck"]
let arr_num =  [324, 65, 2323, 50, 1, 71]

// Syntax
// Functionless
sort()

// Arrow function
sort((a, b) => { /* … */ } )

// Compare function
sort(compareFn)

// Inline compare function
sort(function compareFn(a, b) { /* … */ })


// default ของ sort ถ้าเราไม่ใส่ parameter มันจะเรียงตาม ASCII character order

// console.log(arr_str.sort())
//expected output: [ 'Adobe', 'Good luck', 'Sawaddee', 'adobe', 'hi', 'kub', 'random' ]
// ถ้าอยากเรียงตามตัวอักษรจากมากไปน้อยให้ใช้ reverse()

// console.log(arr_num.sort())
//expected output: [1, 2323, 324, 50, 65, 71]
//เนื่องจาก sort() จะเทียบตามลำดับของ ASCII ดังนั้น "2323" เลยมาก่อน "324" เพราะตัวแรกสุดคือ 2 ซึ่งมาก่อน 3
//ถ้าเราอยากจะให้ sort() เทียบตามค่าของตัวเลข ต้องใช้ callback function

arr_num.sort(function (a, b) {
    return a - b
    // ถ้ามันได้ค่าติดลบ a จะอยู่ด้านหน้า b (a น้อยกว่า b)
    // ถ้ามันได้ค่าเป็น 0 มันจะไม่เปลี่ยนตำแหน่ง
    // ถ้ามันได้ค่าบวก b จะอยู่ด้านหน้า a (b น้อยกว่า a)

    // ถ้าอยากเรียงจากมากไปน้อย ให้เปลี่ยนเป็น b - a
});
// console.log(arr_num)
//expected output: [1, 50, 65, 71, 324, 2323]


//การใช้ sort() นั้นมันจะทับ array เดิม ถ้าเราอยากให้มันไม่ทับ array เดิม ต้องทำยังไง?
//ในตัวอย่างนี้ก็จะนำการ spread มาช่วย
// let copy_of_arr_str = [...arr_str].sort()
// console.log(copy_of_arr_str)
// console.log(arr_str)

//sort() สามารถใช้กับ array ที่มี object ได้
let arr_obj = [
    {name: "A", age: 20},
    {name: "C", age: 30},
    {name: "B", age: 10},
    {name: "D", age: 40}
]

console.log(arr_obj)
console.log(arr_obj.sort())
//จะสังเกตได้ว่าถ้าเราไม่ใช่ parameter เข้าไป มันจะไม่ทำการ sort ให้ เพราะว่ามันไม่รู้ว่าจะต้อง sort ตาม property ไหน

// arr_obj.sort(function (a, b) {
//     return a.age - b.age
// });
// console.log(arr_obj)