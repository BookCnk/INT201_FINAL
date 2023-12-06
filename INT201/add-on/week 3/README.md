# Movies Quize

###### ให้สร้าง Fuction ดังนี้

1. **addMovie(movies,...id)**
   ใช้สำหรับเพิ่มหนังเข้า array playlist โดยจะรับ parameter 2 ตัวได้แก่ array ของ movie และ id ของหนังโดยสามารถรับค่ามาได้มากกว่า 1 id
2. **deleteMovie(id)**
   ใช้สำหรับลบหนังออกจาก playlist โดยจะรับ parameter 1 ตัว คือ id ของหนัง
3. **swapMovie(index_one, index_two)**
   ใช้สำหรับสลับ item ที่อยู่ใน array playlist โดยจะรับ parameter 2 index_one และ index_two เป็น index ที่จะต้องสลับกัน


ตัวอย่างข้อมูล Array Movie

```
"id": 126,
"title": "Before Midnight",
"year": "2013",
"runtime": "109",
"genres": ["Drama","Romance"],
"director": "Richard Linklater",
"actors": "Ethan Hawke, Julie Delpy, Seamus Davey-Fitzpatrick, Jennifer Prior",
"plot": "We meet Jesse and Celine nine years on in Greece. Almost two decades have passed since their first meeting on that train bound for Vienna.",
"posterUrl": "http://ia.media-imdb.com/images/M/MV5BMjA5NzgxODE2NF5BMl5BanBnXkFtZTcwNTI1NTI0OQ@@._V1_SX300.jpg"
```