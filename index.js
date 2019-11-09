//Problem 1

// document.addEventListener("DOMContentLoaded",() =>{
//     let name = prompt("What is your name? ")
//     document.querySelector("#yourName").innerText = `${name}`
// })

// alert(`${name}`)

//Problem 2

// document.addEventListener("DOMContentLoaded",() =>{
//     let number = prompt("Type a number: ")
//     if(number % 2 === 0){
//         return document.querySelector("#header").innerText = `${number} is even`
//     } else {
//         return document.querySelector("#header").innerText = `${number} is odd`
//     }
// })

//Problem 3
// function multipleTwo(){

//     document.querySelector("#num").value = `${num.value} Times Two Is ${Number(num.value)*2}`
// }

//Problem 4
// function pallindrome(){
//     let str = document.querySelector("#arr").value
//     for(let i = 0; i < Math.floor(str.length/2); i++){
//          if(str[str.length - 1 - i] !== str[i]){
//         //   alert("Your word or array is not a pallindrome");
//         return document.querySelector("#header").innerText = "Your word or string is not a pallindrome"
//          }
//     }
//     // alert("Your word or array is a pallindrome");
//     return document.querySelector("#header").innerText = "Your word or string is a pallindrome"
// }

//Problem 5
function upperCase(){
    let str = document.querySelector("#str")
    string2.innerText = `${str.value.toUpperCase()}`
}