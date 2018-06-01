// q1
var oper1 = 20 + 4
 var oper2 = 26 - 2 
 var oper3 = 6 * 4 
 var oper4 = 144/6
 console.log(oper1,oper2,oper3,oper4)
// q2
var op1 = 6%3
var op2 = 10%2
var op3 = 5%2
console.log(op2 > op1)
console.log(op2 === op1)
// q3
var line1 = "test grades as folows: \n"
var line2 = "\t student1: 96 \n"
var line3 ="\t comment: \"none\ "

console.log(line1 + line2 + line3)
// q4
var numbers = [5,10,3,5,9,11,2,13,16,20]
console.log(numbers[5]+ numbers[9])
// q5
var me ={
    name: "david is tall",
    age: "old",
    height: '6"2',
}
console.log( `hi I am ${me.name}and i am ${me.age}. I am ${me.height}in height...`)
// q6
var num = 1
while(num<10){
    if(num % 2 === 0){
        console.log(num)
    }
    num++
}

// q7
for(var i=1; i<10; i++){
    if(i % 2 !== 0){
        console.log(i)
    }
}