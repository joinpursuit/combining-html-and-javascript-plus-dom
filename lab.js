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