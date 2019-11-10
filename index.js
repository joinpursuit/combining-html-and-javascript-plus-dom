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
const countCapitals1 = () => {
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

document.addEventListener("DOMContentLoaded", () => {
    const countCapitals = (string) => {
        let upperCased = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let count = 0;
        for(let i = 0; i < string.length; i++){
            if(upperCased.includes(string[i])){
                count++;
            }
        }
        return count;
    }

    let submit = document.querySelector("#capitalComparer")

    submit.addEventListener("click", () => {
        let str1 = document.querySelector("#str1").value
        let str2 = document.querySelector("#str2").value
        if(countCapitals(str1) > countCapitals(str2)){
            //alert("Input String 1 has more CAPITALS")
            return document.querySelector("#resultCapitals").innerText = `Input String 1 has more CAPITALS`
        } else if(countCapitals(str2) > countCapitals(str1)){
            // alert(`Input String 2 has more CAPITALS`)
            return document.querySelector("#resultCapitals").innerText = `Input String 2 has more CAPITALS`
        } else {
            // alert(`Both string have equal amount of CAPITALS`)
            return document.querySelector("#resultCapitals").innerText = `Both string have equal amount of CAPITALS`
        }
    })
})


//question 8
const average = () => {
    let num1 = document.querySelector("#num1").value
    let num2 = document.querySelector("#num2").value
    let num3 = document.querySelector("#num3").value
    let total = Number(num1) + Number(num2) + Number(num3);
    let avg = Math.round(total / 3)
    !Number(num1) || !Number(num2) || !Number(num3) ? alert("All inputs must be numbers") : alert(avg);
}

