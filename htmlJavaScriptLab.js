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
    let newString = 0;
    for(let char of string) {
        if(char === char.toUpperCase()) {
            newString++;
        }
    }
    alert(newString);
    document.querySelector("#capitalCount").innerText = newString;
}