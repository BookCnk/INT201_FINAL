# TodoList Requirements

### ไฟล์ ./lib/todo.js เพื่อจัดการกับ property และฟังก์ชันของแต่ละ todo

1. ให้เพิ่ม property done (Boolean) และให้กำหนดค่าเริ่มต้น done เป็น false ที่ constructor
2. ให้เพิ่ม property done ในการคืนค่า object ที่ฟังก์ชัน getTodo

### ไฟล์ ./lib/todoManagement.js เพื่อจัดการโครงสร้างข้อมูลและฟังก์ชันของ todo ทั้งหมด

1. ให้แก้ไขฟังก์ชัน addTodo(desc) ให้ return todo id แทนการ return length ของ array
2. ให้เพิ่มฟังก์ชัน getNumberOfDone เพื่อ return จำนวนของ Todo ที่อยู่ในสถานะ Done
3. ให้เพิ่มฟังก์ชัน getNumberOfNotDone เพื่อ return จำนวนของ Todo ที่อยู่ในสถานะ Not Done

### ไฟล์ ./UI/todoListUI.js เพื่อจัดการ dom ของเอกสาร HTML

1. ให้เพิ่มฟังก์ชันที่ชื่อ showTodoItem(newId, newDescription) โดยทำการรับค่า todo id และ description เป็นพารามิเตอร์ เพื่อทำการแสดงรายการ todo ภายใต้

```
<div id="listTodo"></div>
```

ของเอกสาร HTML โดยแต่ละรายการ todo ให้มีโครงสร้าง tags เรียงลำดับ ดังนี้

```
  <div class="todoItem" id="newId">
	  <p>newDescription</p>
	  <button>Not Done</button>
	  <button>remove</button>
  </div>

```

2. ให้เพิ่มฟังก์ชัน showNumberOfDone(numberOfDone) เพื่อแสดงเลขจำนวนของ Todo ที่อยู่ในสถานะ Done ต่อท้ายข้อความ ภายใน

```
<p id="done">Number of Done: </p>
```

3. ให้เพิ่มฟังก์ชัน showNumberOfNotDone(numberOfNotDone) เพื่อแสดงเลขจำนวนของ Todo ที่อยู่ในสถานะ Not Done ต่อท้ายข้อความ ภายใน

```
<p id="notDone">Number of Not Done:</p>
```

### ไฟล์ ./main.js

1. ให้ทดสอบเรียกใช้ addTodo() และรับ id ที่ return จากฟังก์ชัน เพื่อส่งต่อให้ฟังก์ชัน showTodoItem() เพื่อทำการสร้าง tags แสดงผลใน HTML File
2. ให้ทดสอบเรียกใช้ getNumberOfDone() และ getNubmerOfNotDone() และรับค่าจำนวนของ Todo ที่อยู่ในสถานะ Done และ NotDone เพื่อส่งต่อฟังก์ชัน showNumberOfDone() และ showNumberOfNotDone() เพื่อแสดงผลใน HTML File
