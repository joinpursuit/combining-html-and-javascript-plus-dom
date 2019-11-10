// question 1
// document.addEventListener("DOMContentLoaded", () => {
//    let userString = prompt("Let me get a string !")
// //    alert(userString)
// let header = document.querySelector("#top")
//     header.innerText = userString
// })
// 
// question 2 
// document.addEventListener("DOMContentLoaded", () => {
//    let userNumber = prompt("Give me a number ")
//    let header = document.querySelector("#top")
//    if(userNumber % 2 === 0){
//         alert("Your number is even")
//         header.innerText = "Your number is even"
//    } else {
//        alert("Clipped")
//        header.innerText = "Clipped"
//    }

// })
// 
//question 3
// document.addEventListener("DOMContentLoaded", () => {

// })

// const numDub = () => {
//     document.querySelector("#result").innerText = num.value * 2;
//     num.value = document.querySelector("#result").innerText
//     alert(num.value)
// }

//question 4

// const isPalindrome = () => {
//     // let output = ""
//     let strElement = document.querySelector("#word")
//     let str = strElement.value
//     let header = document.querySelector("#result") 
//     for(let i = 0; i < Math.floor(str.length/2); i++){
//         if(str[str.length - 1- i] !== str[i]){
//             strElement.value = "is not a palindrome"
//             // alert("is not a palindrome")
//             header.innerText = "is not a plaindrome"
//         } else {
//             strElement.value = "is a palindrome"
//             // alert("is a palindrome")
//             header.innerText= "is a palindrome"
//         }
//     }
//     strElement.value
// }

// document.addEventListener("DOMContentLoaded", () => {

//     let submitButton = document.querySelector("#submitButton");
//    submitButton.addEventListener("click", isPalindrome)
// })

// Question 5

// const strToUpperCase = () => {
//     let strElement = document.querySelector("#string")
//     let str = strElement.value.toUpperCase()
//     // let paragraph = document.querySelector("#upper")
//     let header = document.querySelector("#uppers")
//     // alert(str)
//     // paragraph.innerText = str
//     debugger
//     header.innerText = str
// }

// document.addEventListener("DOMContentLoaded",() => {
//     let button = document.querySelector("#submitButton");
//     button.addEventListener("click", strToUpperCase)
// }) 

// Question 6
// const strCapCount = () => {
//     let count = 0
//     let strElement = document.querySelector("#string")
//     let str = strElement.value
//     let caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let para = document.querySelector("#count")
//     for(let i = 0; i < str.length; i++){
//         if(caps.includes(str[i])){
//             count++
//         }
//     }
//     alert(count)
//     para.innerText = count
// }

// document.addEventListener("DOMContentLoaded",() => {
//     let button = document.querySelector("#submitButton");
//     button.addEventListener("click", strCapCount)
// }) 

// Question 7
// const strCapCountComp = () => {
//     let count1 = 0
//     let count2 = 0
//     let strElement1 = document.querySelector("#string")
//     let strElement2 = document.querySelector("#stringdos")
//     let str1 = strElement1.value
//     let str2 = strElement2.value
//     let caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let para = document.querySelector("#count")
//     for(let i = 0; i < str1.length; i++){
//         for(let j = 0; j < str2.length; j++){
//             if(caps.includes(str2[j])){
//                 count2++
//             }
//         }
//         if(caps.includes(str1[i])){
//             count1++
//         }
//     }
//     if(count1 > count2){
//         alert("String 1 has more capitals")
//         para.innerText = "String 1 has more capitals"
//     } else {
//         alert("String 2 has more capitals")
//         para.innerText = "String 2 has more capitals"
//     }
// }

// document.addEventListener("DOMContentLoaded",() => {
//     let button = document.querySelector("#submitButton");
//     button.addEventListener("click", strCapCountComp)
// }) 

// Question 8
const average = () => {
    let numElement1 = document.querySelector("#num1")
    let numElement2 = document.querySelector("#num2")
    let numElement3 = document.querySelector("#num3")
    let avg = document.querySelector("#avg")
    let num1 = Number(numElement1.value)
    let num2 = Number(numElement2.value)
    let num3 = Number(numElement3.value)
    debugger
    let average = Math.floor((num1 + num2 + num3)/3)
    if(Number.isNaN(average)){
        alert("All of the inputs must be numbers")
    } else {
        alert(average)
        avg.innerText = average
    }
}

document.addEventListener("DOMContentLoaded",() => {
    let button = document.querySelector("#submitButton");
    button.addEventListener("click", average)
}) 