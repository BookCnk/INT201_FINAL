import Pokemon from "./poke_class.js";

let pikachu = new Pokemon("Pikachu", 100, 10) // สร้าง object pokemon เพื่อมาต่อสู้
let charmander = new Pokemon("Charmander", 100, 50) // สร้าง object pokemon เพื่อมาต่อสู้
// let charmander = new Pokemon("Charmander", 100, 20)

function battle(pokemon1, pokemon2) {
    console.log("Battle start!")
    console.log(pokemon1.getInfo()) // แสดงข้อมูลก่อนต่อสู้
    console.log(pokemon2.getInfo()) // แสดงข้อมูลก่อนต่อสู้

    let round = 1 // สร้างตัวแปรเพื่อมาเก็บค่าว่าถึงรอบที่เท่าไหร่แล้ว
    while (round <= 10) { // โจทยฺ์ต้องการให้สู้มากที่สุด 10 รอบ
        let rand_atk = Math.floor(Math.random() * 10) + 1 // สุ่มเลข 1 - 10 ตามโจทย์

        console.log(`------ Round ${round} ------`)
        if (rand_atk % 2 === 0) { // ถ้าเป็นเลขคู่ pokemon1 จะได้ตี
            pokemon2.setHp(pokemon2.getHp() - pokemon1.getAtk()) // ทำการลด hp ของ pokemon2 ลงตามค่า atk ของ pokemon1
            console.log(`${pokemon1.getName()} attacks ${pokemon2.getName()}!`) // บอกว่าใครตี
            console.log(`${pokemon2.getName()} has ${pokemon2.getHp()} hp left!`) // บอกว่าเลือดตัวที่โดนตีเหลือเท่าไหร่

            if (pokemon2.getHp() <= 0) {
                break // ถ้าวนลูปมาเรื่อยๆ แล้ว pokemon1 ตี pokemon2 จน hp ของ pokemon2 หมด ให้หยุดการวนลูป
            }
        } else { // ถ้าเป็นเลขคี่จะเข้าเงื่อนไข else
            pokemon1.setHp(pokemon1.getHp() - pokemon2.getAtk()) // ทำการลด hp ของ pokemon1 ลงตามค่า atk ของ pokemon2
            console.log(`${pokemon2.getName()} attacks ${pokemon1.getName()}!`) // บอกว่าใครตี
            console.log(`${pokemon1.getName()} has ${pokemon1.getHp()} hp left!`) // บอกว่าเลือดตัวที่โดนตีเหลือเท่าไหร่

            if (pokemon1.getHp() <= 0) {
                break // ถ้าวนลูปมาเรื่อยๆ แล้ว pokemon2 ตี pokemon1 จน hp ของ pokemon1 หมด ให้หยุดการวนลูป
            }
        }
        round++
    }

    console.log('--------------')
    console.log(pokemon1.getInfo()) // แสดงข้อมูลหลังต่อสู้
    console.log(pokemon2.getInfo()) // แสดงข้อมูลหลังต่อสู้
    console.log('--------------')

    if (pokemon1.getHp() > pokemon2.getHp()) {
        console.log(`${pokemon1.getName()} wins!`) // ถ้า hp ของ pokemon1 มากกว่า pokemon2 ให้แสดงว่า pokemon1 ชนะ
    } else if (pokemon1.getHp() < pokemon2.getHp()) {
        console.log(`${pokemon2.getName()} wins!`) // ถ้า hp ของ pokemon2 มากกว่า pokemon1 ให้แสดงว่า pokemon2 ชนะ
    } else {
        console.log('Draw') // ถ้า hp ของ pokemon1 และ pokemon2 เท่ากัน ให้แสดงว่าเสมอ
    }
}

battle(pikachu, charmander) // ส่ง object ที่เราสร้างไว้บนสุดมาสู้กันใน function battle