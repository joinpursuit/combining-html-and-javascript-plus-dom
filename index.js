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
    let userInput = document.querySelector("#palInput").innerText
    let result = document.querySelector("#resultPal")
    for(let i = 0; i < Math.floor(userInput.length/2); i++){
        if(userInput[userInput.length - 1 - i] !== userInput[i]){
            result.innerText = "FALSE";
            
        } 
    }
    result.innerText = "TRUE";
}