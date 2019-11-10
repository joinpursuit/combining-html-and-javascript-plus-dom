/*#Question One

a.Make a website that prompts the user
for a string.Then show a popup that displays the string.*/
document.addEventListener("DOMContentLoaded", () => {
    let strOne = prompt("What is your name?")
    let alertOne = (alert(strOne))
    alertOne.innerText = strOne
})
// b.Instead of showing a popup, make the text appear on the screen.
document.addEventListener("DOMContentLoaded", () => {
    let newPassion = (prompt("What is your Passion"))
    let passionTag = document.querySelector("#Cooking");
    passionTag.innerText = newPassion
})
/* #Question Two
 a. Make a website that prompts the user for a number, then alerts them of whether or not the number is even.*/
document.addEventListener("DOMContentLoaded", () => {
    let number = (prompt("give me a number and make it even"))
    let numTag = document.querySelector("#num");
    numTag.innerText = number
    const isEven = (num) => {
        if (num % 2 === 0) return true;
        if (num % 2 !== 0) return false;
    }
    if (isEven(Number(number))) {
        alert("your number is even")
    } else {
        alert("you are an odd fellow ")
    }
})
/* b.Instead of showing a popup, make the text appear on the screen.*/

// a.Make a website with a heading at the top that reads 
// "String Uppercaser".Add an input field and a button.
// When the user clicks the button, display an alert that contains 
//the uppercased text of the input text field.
document.addEventListener("DOMContentLoaded", () => {
    let strtwo = document.querySelector("#headerOne")




})

b.Instead of showing a popup, have that information appear in a paragraph below the button.

c.Have the uppercased overwrite the text that was there before.