alert("Hello World!")
/*let是一個變數，可以被重新賦值*/
/*const是一個常數，不能被重新賦值*/
let a
a = 10
console.log(a)
a = 30
console.log(a)
const b = 5

/* Number 可以是整數、浮點數或負數*/
let number = 10
number = 10.1
number = -10

/*特殊數值: Infinity, -Infinity, NaN*/
console.log(10/0)
console.log("Hello"-2)

/*數值過大時，會失去精度*/
console.log(9999999999999999)

/*此時可以使用BigInt*/
let bigNumber = 9999999999999999n

/*string就是文字*/
let string = "Hello World!"

/*`可以用來包住多行文字，以及在文字中插入變數*/
let age = 69
console.log(`I am ${age} years old`)
/*也可以用+來串接字串*/
console.log("I am " + age + " years old")

/*Boolean只有true和false*/
let isTrue = true
let isFalse = false

/*null代表空值*/
let empty = null
console.log(empty)

/*undefined代表未定義*/
let notDefined
console.log(notDefined)

/*object是一個物件，可以包含多個key-value pair*/
let person = {
    name: "John",
    age: 30,
    isMale: true
}
console.log(person)
console.log(person.name)

/*array是一個陣列，可以包含多個元素*/
let fruits = ["apple", "banana", "cherry"]
console.log(fruits)
console.log(fruits[0])
console.log(fruits.length)


/*%是取餘數*/
console.log(10 % 3) //1

/* **是次方*/
console.log(2 ** 3) //8

let plus = 10 + 5
console.log(`"10+5 = ${plus}`)
let minus = 10 - 5
console.log(`10-5 = ${minus}`)
let multiply = 10 * 5
console.log(`10*5 = ${multiply}`)
let divide = 10 / 5
console.log(`10/5 = ${divide}`)

console.log(0.1+0.2) //0.30000000000000004
//why? https://stackoverflow.com/questions/588004/is-floating-point-math-broken

/*+=是加等於，-=是減等於，*=是乘等於，/=是除等於*/
//example: x += 5 is the same as x = x + 5
let x = 10
x += 5
console.log(x) //15
x -= 5
console.log(x) //10

/*++是加1，--是減1*/
let y = 10
y++ //y = y + 1
//y++是先取y的值，再加1
//++y是先加1，再取y的值
console.log(y++) //11
console.log(++y) //13

y=10
y-- //y = y - 1
//y--是先取y的值，再減1
//--y是先減1，再取y的值
console.log(y--) //9
console.log(--y) //7

/*比較運算子: >, <, >=, <=, ==, ===, !=, !==*/
console.log(10 > 5) //true
console.log(10 < 5) //false
console.log(10 >= 10) //true
console.log(10 <= 10) //true
console.log(10 == 5) //false
console.log(10 === 10) //true
/*文字比較是比較字典順序(unicode)*/
console.log("apple" > "banana") //false
console.log("apple" < "banana") //true
"a".charCodeAt(0) //97(unicode)
//== 和 === 的差別是，===會比較型態

/*if是一個條件判斷式，如果條件成立，就會執行{}裡的程式碼*/
if (10 > 5) {
    console.log("10 > 5")
}
/*else是if不成立時的情況*/
if (10 < 5) {
    console.log("10 < 5")
} else {
    console.log("10 >= 5")
}
/*else if是if不成立時的另一個條件*/
if (10 < 5) {
    console.log("10 < 5")
} else if (10 === 5) {
    console.log("10 === 5")
} else {
    console.log("10 > 5")
}