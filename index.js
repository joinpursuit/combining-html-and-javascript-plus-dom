document.addEventListener("DOMContentLoaded", () => {
    
    // question 1
    // let q1 = prompt("Enter a string:")
    // // alert(q1);
    // let header = document.querySelector("#q1")
    // header.innerText = q1;


    //question 2
    // let q2 = prompt("Enter a number:")
    // let header2 = document.querySelector("#q2");
    // if(q2 % 2 === 0){
    //     // alert("Number is EVEN");
    //     header2.innerText = "Number is EVEN";
    // } else {
    //     // alert("Number is NOT EVEN");
    //     header2.innerText = "Number is NOT EVEN";
    // }
    debugger

})

// question 3
const TimesTwo = () => {
  document.querySelector("#q3").innerText = num.value * 2;
  num.value = document.querySelector("#q3").innerText
}

//question 4
const isPalindrome = () => {
    let userInput = document.querySelector("#palInput").value
    for(let i = 0; i < Math.floor(userInput.length/2); i++){
        if(userInput[userInput.length - 1 - i] !== userInput[i]){
            // alert("Your string is NOT a palindrome");
            return document.querySelector("#resultPal").innerText = "Your string is NOT a pali";
        }
    }
    // alert("Your string IS a palindrome");
    return document.querySelector("#resultPal").innerText = "Your string IS a pali";  
}

//question 5
const upperCase = () => {
    let userInput = document.querySelector("#upperInput").value
    let uppercasedInput = userInput.toUpperCase();
    // alert(uppercasedInput);
    userInput = uppercasedInput;
    return document.querySelector("#resultUpper").innerText = uppercasedInput;
}

//question 6
const countCapitals = () => {
    let userInput = document.querySelector("#strCapital").value;
    let upperCased = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let count = 0;
    for(let i = 0; i < userInput.length; i++){
        if(upperCased.includes(userInput[i])){
            count++;
        }
    }
    // alert(counts);
    return document.querySelector("#resultCounts").innerText = count;
}

//question 7

