let a = 1
let b = 2

if (a === 1 && b === 2) {
  console.log('a is 1 and b is 2')
} else {
    console.log('a is not 1 or b is not 2')
    }
//&&是且的意思，a和b都必須是1和2才會輸出a is 1 and b is 2
let c = 3
let d = 4
if (c === 3 || d === 5) {
  console.log('c is 3 or d is 5')
} else {
    console.log('c is not 3 or d is not 5')
    }
//||是或的意思，c和d只要有一個是3和5就會輸出c is 3 or d is 5

//for循環
for (let i = 0; i <= 10; i++) {
  console.log(`i is ${i}`)
}
/*for(初始值;條件;遞增值) {程式碼}
i是初始值，i<=10是條件，i++是遞增值，i++是i=i+1的縮寫
i是0，當i<=10時，i+1，直到i=10時停止
*/

//break 跳出迴圈
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break
  }
  console.log(`i is ${i}`)
}
//i=5時，跳出迴圈

//continue 跳過迴圈
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue
  }
  console.log(`i is ${i}`)
}
//i=5時，跳過i=5，繼續迴圈

//while迴圈
let i = 0
while (i <= 10) {
  console.log(`i is ${i}`)
  i++
}
/*while(條件) {程式碼}
i是0，當i<=10時，i+1，直到i=10時停止
*/

//do while迴圈
i = 0
do {
  console.log(`i is ${i}`)
  i++
} while (i <= 10)
/*do {程式碼} while(條件)
i是0，當i<=10時，i+1，直到i=10時停止
*/


//array陣列
let arr = ['a', 'b', 'c', 'd', 'e']
console.log(arr)
console.log(arr.length)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
//陣列arr有5個元素，長度是5，arr[0]是a，arr[1]是b，arr[2]是c，arr[3]是d，arr[4]是e
arr[0] = 'f'
console.log(arr[0])
//arr[0]是a，改成f
arr.push('g')
console.log(arr)
//arr.push('g')是在arr陣列最後面加上g
arr.push('h', 'i')
console.log(arr)
//arr.push('h', 'i')是在arr陣列最後面加上h和i
arr.unshift('z')
console.log(arr)
//arr.unshift('z')是在arr陣列最前面加上z
arr.pop()
console.log(arr)
//arr.pop()是刪除arr陣列最後面的元素
arr.shift()
console.log(arr)
//arr.shift()是刪除arr陣列最前面的元素

//function函數
function hello() {
  console.log('Hello World')
}
//hello()是呼叫函數hello，輸出Hello World
hello()

function add(a, b) {
  return a + b
}
console.log(add(1, 2))
/*add(1, 2)是呼叫函數add，輸出3
return a + b是回傳a+b的值
執行完return就會結束函數*/