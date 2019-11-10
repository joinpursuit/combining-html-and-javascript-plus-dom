document.addEventListener("DOMContentLoaded",() =>{
    // PROBLEM 1
    // let userInput = prompt("Hello World");
    // alert(userInput);
    // document.querySelector("#input").innerHTML = userInput; 

    // PROBLEM 2
    // let userInput = prompt("Input a number");
    // const isEven = (num) => {
    //     return num % 2 ? false : true;
    // }
    // alert(isEven(Number(userInput)));
    // document.querySelector("#input").innerHTML = isEven(Number(userInput));  
    
    
}) 
// // Problem 3

//     const doubleNum = () =>{
    //         let doubleNum = Number(document.getElementById("userNum").value) * 2
    //     alert (doubleNum)
    //     document.querySelector("#input2").innerText = (doubleNum)
    //     document.querySelector("#userNum").value = doubleNum
    //     }

// Problem 4
// a
// const isPalindrome = () => {

//     let reverseString = document.querySelector("#textBox").value
//     reverseString = reverseString.split("").reverse().join("")
//     alert (reverseString === document.querySelector("#textBox").value)
// }  
// b
// const isPalindrome = () => {
//     let output = document.querySelector("#value")
    
//     let string = document.querySelector("#textBox").value
//     let reverseString = string.split("").reverse().join("")
//     output.innerText = reverseString === string
// }  

// Problem 5
//a 
// const upperCase = () => {
//     let textBox = document.querySelector("#text")
//     let string = textBox.value
//     alert(string.toUpperCase())
// }
// b
// const upperCase = () => {
//     let output = document.querySelector("#value")
//     let textBox = document.querySelector("#text")
//     let string = textBox.value
//     output.innerText = string.toUpperCase()
// }

// const upperCase = () => {
//     let textBox = document.querySelector("#text")
//     let string = textBox.value
//     textBox.value = string.toUpperCase() 
// }

// Problem 6

// const capitalCounter = () => {
//     let textBox = document.querySelector("#input")
//     let string = textBox.value
//     let count = 0
//     for(i = 0; i < string.length; i++) {
//         if(string[i] === string[i].toUpperCase()) {
//             count ++
//         }
//     }
//     alert (count)
// }

// const capitalCounter = () => {
//     let output = document.querySelector("#paragraph")
//     let textBox = document.querySelector("#input")
//     let string = textBox.value
//     let count = 0
//     for(i = 0; i < string.length; i++) {
//         if(string[i] === string[i].toUpperCase()) {
//             count ++
//         }
//     }
//     output.innerText = (count)
// }

// Question 7 
// a
// const capitalCount = (string) => {
//     let count = 0
//     for(i = 0; i < string.length; i++) {
//         if(string[i] === string[i].toUpperCase()) {
//             count ++
//         }
//     }
//     return count
// }

// const stringCompare = () => {
//     let textBoxOne = document.querySelector("#input1")
//     let textBoxTwo = document.querySelector("#input2")
//     let stringOne = textBoxOne.value
//     let stringTwo = textBoxTwo.value
//     let countOne = capitalCount(stringOne)
//     let countTwo = capitalCount(stringTwo)
//     if(countOne > countTwo) {
//         alert (stringOne)
//     } else {
//         alert (stringTwo)
//     }
// }
// b
// const capitalCount = (string) => {
//     let count = 0
//     for(i = 0; i < string.length; i++) {
//         if(string[i] === string[i].toUpperCase()) {
//             count ++
//         }
//     }
//     return count    
// }

// const stringCompare = () => {
//     let output = document.querySelector("#paragraph")
//     let textBoxOne = document.querySelector("#input1")
//     let textBoxTwo = document.querySelector("#input2")
//     let stringOne = textBoxOne.value
//     let stringTwo = textBoxTwo.value
//     let countOne = capitalCount(stringOne)
//     let countTwo = capitalCount(stringTwo)
//     if(countOne > countTwo) {
//         output.innerText = stringOne
//     } else {
//         output.innerText = stringTwo
//     }
// }

// Problem 8

// const averageOfThreeNumbers = () => {
//     let textBoxOne = document.querySelector("#text1")
//     let textBoxTwo = document.querySelector("#text2")
//     let textBoxThree = document.querySelector("#text3")
//     let sum = Number(textBoxOne.value) + Number(textBoxTwo.value) + Number(textBoxThree.value) 
//     alert (sum/3)
// }

// const doesContainNums = (string) => {
//     let nums = ("1234567890") 
//     for(i = 0; i < string.length; i++) {
//         if(nums.includes(string[i])) {
//             return true
//         } 
//     } 
//     return false
// }

// const averageOfThreeNumbers = () => {
//     let output = document.querySelector("#paragraph")
//     let textBoxOne = document.querySelector("#text1")
//     let textBoxTwo = document.querySelector("#text2")
//     let textBoxThree = document.querySelector("#text3")
//     if(!doesContainNums(textBoxOne.value) || (!doesContainNums(textBoxTwo.value)) || (!doesContainNums(textBoxThree.value))) {
//         alert ("All inputs must be numbers") 
//     } else {
//         let sum = Number(textBoxOne.value) + Number(textBoxTwo.value) + Number(textBoxThree.value)
//         output.innerText = (sum/3)
//     }
// }

// Problem 9

const checkMiddle = () => {
    let textBoxOne = document.querySelector("#text1")
    let textBoxTwo = document.querySelector("#text2")
    let textBoxThree = document.querySelector("text3")
    let sum = Number(textBoxOne.value) + Number(textBoxThree.value)
    if(sum === textBoxTwo) {

    }
}