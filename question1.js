// document.addEventListener("DOMContentLoaded", () => {
//    let userString = prompt("Let me get a string !")
// //    alert(userString)
// let header = document.querySelector("#top")
//     header.innerText = userString
// })

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
//question 3
// document.addEventListener("DOMContentLoaded", () => {

// })

// const numDub = () => {
//     document.querySelector("#result").innerText = num.value * 2;
//     num.value = document.querySelector("#result").innerText
//     alert(num.value)
// }
//question 4

document.addEventListener("DOMContentLoaded", () => {

 })


 const isPalindrome = () => {
     let str = document.querySelector("q4").value
     for(let i = 0; i < Math.floor(str.length/2); i++){
         if(str[str.length - 1- i] !== str[i])
             alert("This ain't it")
            return document.querySelector("#q4").innerText = "This ain't it"
     }
     alert("Hannnnnn")
    }
