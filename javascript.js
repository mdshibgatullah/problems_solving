// 1-6 random number print

// method 1
// const getRandomNum = Math.floor(Math.random() * 6) + 1;
// console.log(getRandomNum)

// method 2
// function getRandomNum(){
//     return Math.floor(Math.random() * 6) + 1
// }
// console.log(getRandomNum())



// sokol name alpabetically sajanu
// const studsents = ["Jashim", 'Rahim', 'Karim', 'Ahona', 'Bilay'];
// console.log(studsents.sort())

// sokol number serially sajanu

// const numbers  = [4,5,1,9,8,4,0]
// numbers.sort((a,b)=> a-b) // b-a dile discending akare asbe
// console.log(numbers)


// leap year check
// function leap_year(year){
//     if(year % 4 === 0 || ((year % 400 === 0 && year % 100 !== 0))){
//         return 'This is leap year'
//     }else{
//         return 'This is not leap year'
//     }
// }
// console.log(leap_year(2027))

// ৪ দ্বারা বিভাজ্য হলে Leap Year,
// কিন্তু ১০০ দ্বারা বিভাজ্য হলে Leap Year নয়,
// তবে ৪০০ দ্বারা বিভাজ্য হলে আবার Leap Year।


// even or odd number
// function evenOrodd(num){
//     if(num % 2 == 0){
//         return 'Even'
//     }else{
//         return 'Odd'
//     }
// }
// console.log(evenOrodd(4680))


// power of number
// let num = 3
// console.log(num ** 2)

// let str = "JavaScript"
// console.log(str.length)



// Reverse String 

// let text = "JavaScript";
// console.log(text.split('').reverse().join(''))

// function rev(str){
//     return str.split('').reverse().join('')
// }
// console.log(rev('Hello'))


// Find biggest number
// const number = [35,35,574,456,6784,467]
// console.log(Math.max(...number))

// function maxNum(...number){
//     return Math.max(...number)
// }
// console.log(maxNum(24,56,7,4))



// array er all numbers jug kora 
// let numbers = [23,57,46,467]
// let sum = 0
// for(i=0; i < numbers.length; i++){
//     sum += numbers[i]
// }
// console.log(sum)


// find a Number negative or positive 
// const num = 10.90
// if(num > 0){
//     console.log('Positive')
// }else{
//     console.log('Negative')
// }


// Day cheker using switch 
const dayNumber = 5;
switch(dayNumber){
    case 1:
        console.log('Saturday');
        break;
    case 2:
        console.log('Sunday');
        break;
    case 3:
        console.log('Monday');
        break;
    case 4:
        console.log('Tuesday');
        break;
    case 5:
        console.log('Wednesday');
        break;
    case 6:
        console.log('Thusday');
        break;
    case 7:
        console.log('Friday');
        break;
    default: console.log("Invalid day number! Please enter a number between 1 and 7.")

} 


// print 1-100 
// for (i=0; i <= 100; i++){
//     console.log(i)
// }


// 1-100 jug 
// let sum = 0;
// for (i=0; i <= 100; i++){
//     sum += i
// }
// console.log(sum)


// multification 
let number = 7;
for(i=1; i <=10 ; i++){
    console.log(`${number} x ${i} = ${number * i}`)
}


// greating funtion 
function greate(name){
    console.log(`Hello, ${name}`)
}
greate('Sifat')

const student = {
  name: "Sifat",
  age: 22,
  department: "CSE",
  marks: 85
};
console.log(student)


// second largest number ber kori
// let numbers = [23,56,36,467,468]
// let sortNum = numbers.sort((a,b)=> b-a)
// console.log(sortNum[1])


// second smallest number ber kori
// let numbers = [23,56,36,467,468]
// let sortNum = numbers.sort((a,b)=> a-b)
// console.log(sortNum[1])


// count even and odd number 

let numbers = [24,74,46,25,96,457,46,89]
let count = {even: 0, odd: 0}
for(let num of numbers){
    num % 2 == 0 ? count.even++ : count.odd++
}
console.log(count)


const numb = [1, 2, 3, 2, 4, 5, 1, 6, 3];
const removeDup = numb.filter((num, index)=> numb.indexOf(num) !==index)
console.log(removeDup)