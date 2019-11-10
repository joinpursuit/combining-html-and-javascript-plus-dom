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
    let userInput = prompt("Insert Palindrome")
    
    
}) 
// // Problem 3

//     const doubleNum = () =>{
    //         let doubleNum = Number(document.getElementById("userNum").value) * 2
    //     alert (doubleNum)
    //     document.querySelector("#input2").innerText = (doubleNum)
    //     document.querySelector("#userNum").value = doubleNum
    //     }

const isPalindrome = () => {
    reverseString = document.querySelector("#textBox").value.reverse() 
    alert (reverseString === document.querySelector("#textBox").value)
}  