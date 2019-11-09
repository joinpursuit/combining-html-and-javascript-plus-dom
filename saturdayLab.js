// document.addEventListener("DOMContentLoaded",()=>{
    
//     let userName= prompt (
//         "what would you like your new name to be?"
//     );
//     document.querySelector("#top").innerText = `${userName}`

//     const isEven = (num) => {
//         if (num % 2 === 0) return (`${userInput}, Your Number is Even!`);
//         if (num % 2 !== 0) return (`${userInput}, Your Number is ODD!`);
//     }
// let userInput = prompt("Enter a number, please!");

// document.querySelector("#number").innerText = `${isEven(Number(userInput))}`


// }
// )
// const multiplyTwo = () => {
//     let num = document.querySelector("#double").value

//      document.querySelector("#result").innerText= Number(num)*2
//      document.getElementById("double").value= Number(num)*2

// }


const isPalindrome = () => {
    let str = document.querySelector("#palindrome").value

    let reverseWrd = str.toLowerCase().split("").reverse().join("")
    if (str === reverseWrd){
        alert(`${str}, your word is a palindrome`);
    }else{
        alert(`${str}, your word is not a palindrome`);
    }


 }



