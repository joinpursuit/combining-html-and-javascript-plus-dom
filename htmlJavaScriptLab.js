document.addEventListener("DOMContentLoaded", () => {
        //          QUESTION 1
            // let newString = prompt("Please enter string")
            // alert(newString);
            // let popText = document.querySelector("#top")
            // popText.innerText = newString

            //       QUESTION 2
            // let userNum = prompt("Enter a number:");
            // if(userNum % 2 === 0) {
            //     alert("This number is even.")
            // } else {
            //     alert("This number is odd.")
            // }
            // numText.innerText = userNum;
            //      QUESTION 3  
    // const timesTwo = () => {
    //     let num = document.querySelector("#double").value
    //     document.querySelector("#result").innerText= Number(num)*2
    //     document.getElementById("#double").value= Number(num)*2
    // }
})

// const timesTwo = () => {
//     let num = document.querySelector("#double").value
//     document.querySelector("#result").innerText= Number(num)*2
//     document.querySelector("#resultnum").innerText= Number(num)*2
//     alert(Number(num)*2);
// }

const palindrome = () => {
    let string = document.querySelector("#input").value;
    let backwards = "";
    for(let i = string.length - 1; i >= 0; i--) {
        backwards += string[i];
    }
    if(backwards === string){
        alert(`${string} is a palindrome.`);
        document.querySelector("#pali").innerText = `${string} is a palindrome.`
    } else {
        alert(`${string} is not a palindrome.`);
        document.querySelector("#pali").innerText = `${string} is not a palindrome.`
    }
}
const strUppercase = () => {
let string = document.querySelector("#uppercase").value;
    alert(string.toUpperCase());
    // document.querySelector("#top").innerText = string.toUpperCase()
     document.querySelector("#uppercase").value = string.toUpperCase();
}

const capitalCounter = () => {
    let string = document.querySelector("#capital").value;
    let counter = 0;
    for(let char of string) {
        if(char === char.toUpperCase()) {
            counter++;
        }
    }
    alert(counter);
    document.querySelector("#capitalCount").innerText = counter;
}

const capCountComp = () => {
    let string1 = document.querySelector("#str1").value;
    let string2 = document.querySelector("#str2").value;
    let counter1 = 0;
    let counter2 = 0;
    for(let char1 of string1) {
        if(char1 === char1.toUpperCase()) {
            counter1++
        }
    }
    for(let char2 of string2) {
        if(char2 === char2.toUpperCase()) {
            counter2++
        }
    }
    if(counter1 > counter2) {
        alert(string1)
        document.querySelector("#counterComparer").innerText = string1
    } else {
        alert(string2)
        document.querySelector("#counterComparer").innerText = string2
    }
}

// const averageOfThree = () => {
//     let num1 = document.querySelector("#num1").value;
//     let num2 = document.querySelector("#num2").value;
//     let num3 = document.querySelector("#num3").value;
//     average = (Number(num1) + Number(num2) + Number(num3)) / 3
//     alert(average);
//     document.querySelector("#averageOfThree").innerText = average;
// }
const middleSum = () => {
    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;
    let num3 = document.querySelector("#num3").value;
    if(Number(num2) === Number(num1) + Number(num3)) {
        alert("true");
        document.querySelector("#middleSum").innerText = "true";
    } else {
        alert("false")
        document.querySelector("#middleSum").innerText = "false";
    }
}
const disemvowel = () => {
    let vowels = "aAeEiIoOuU"
    let novowels = ""
    let str = document.querySelectofor("#novowels").value
    let checkbox = document.querySelector("#yes");
    if(checkbox.checked) {
        vowels += "yY"
    }
    for(let i = 0; i < str.length; i++) {
        if(!vowels.includes(str[i])) {
            novowels += str[i]
        } 
    }
    alert(novowels);
    document.querySelector("#novowels").value = novowels;
}
