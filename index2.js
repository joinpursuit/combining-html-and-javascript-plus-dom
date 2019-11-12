// Question One
// a. Make a website that prompts the user for a string. Then show a popup that displays the string.
document.addEventListener("DOMContentLoaded", () => {
    let newName = (prompt("What is your name"))
    let alertOne = (alert(newName))
    alertOne.innerText = newName
})

// b. Instead of showing a popup, make the text appear on the screen.
document.addEventListener("DOMContentLoaded", () => {
    let newPassion = (prompt("What is your Passion"))
    let passionTag = document.querySelector("#top");
    passionTag.innerText = newPassion
})
//Question Two
// a. Make a website that prompts the user for a number, then alerts them of whether or not the number is even.
document.addEventListener("DOMContentLoaded", () => {
    let number = (prompt("Please enter a number to check if its even or not"))

    //b. Instead of showing a popup, make the text appear on the screen.
    let numTag = document.querySelector("#num");
    numTag.innerText = number
    const isEven = (num) => {
        if (num % 2 === 0) return true;
        if (num % 2 !== 0) return false;
    }
    if (isEven(Number(number))) {
        alert("Yay!! your number is EVEN!!")
    } else if (num % 2 === 1 || isNaN(num) === true) {
        // alert("please enter a number only")
    } else {
        // alert("Sorry, you are an ODD fellow!! ")
    }
})

// Question Three 
//a.Make a website with an input field and a button.Have a heading at the top that reads "Double your number below"
//When the user clicks on the button, display an alert showing that number times two.

// const multiplyTwo = () => {
//     let num = document.querySelector("#double").value
//     let inputNum = num.value

//     let double = Number(num) * 2
//     input.innerText = double
//     document.getElementById("double").value = Number(num) * 2
//}
//b.Instead of showing a popup, make the doubled number appear in a paragraph below.


//c.Make the doubled number instead appear inside the input
// const multiplyTwo = () => {
//     let num = document.querySelector("#double").value
//     num.innerText = Number(num) * 2
//     document.getElementById("double").value = Number(num) * 2
// }

// Question Four
// a.Make a website with a heading at the top that reads "Palindrome detector".Add an input field and a button.When the user clicks the button, display an alert that says whether or not the text in the input field is a palindrome(the same backwards and forwards).
const checkPali = () => {
    let newStr = "";
    let str = document.querySelector("#str").value;
    let i = str.length;
    for (let j = i; j >= 0; j--) {
        newStr = newStr + str.charAt(j);
    }
    if (str == newStr) {
        alert(str + " I am a Palindrome");
    } else {
        alert(str + "I am not a Palindrome");
    }
}

// b.Instead of showing a popup, have that information appear in a paragraph below the button.
const checkPali = () => {
    let newStr = "";
    let str = document.querySelector("#str").value;
    let para = document.querySelector("#paliPara")
    let i = str.length;
    for (let j = i; j >= 0; j--) {
        newStr = newStr + str.charAt(j);
    }
    if (str == newStr) {
        // alert(str + " I am a Palindrome");
        para.innerText = " I am a Palindrome"
    } else {
        //     alert(str + "I am not a Palindrome");
        para.innerText = " I am not a Palindrome"
        // }
    }
}

// Question Five
// a.Make a website with a heading at the top that reads "String Uppercaser".Add an input field and a button.When the user clicks the button, display an alert that contains the uppercased text of the input text field.

// b.Instead of showing a popup, have that information appear in a paragraph below the button.

// c.Have the uppercased overwrite the text that was there before.

// Question Six a.Make a website with a heading at the top that reads "String Capital Counter".Add an input field and a button.When the user clicks the button, display an alert that contains a count of how many capital letters are in the string.

// b.Instead of showing a popup, have that information appear in a paragraph below the button.

// Question Seven a.Make a website with a heading at the top that reads "String Capital Counter Comparer".Add 2 input fields and a button.When the user clicks the button, display an alert that shows which string has more capital letters in it.

// b.Instead of showing a popup, have that information appear in a paragraph below the button.

// Question Eight a.Make a website with a heading at the top that reads "Average of Three Numbers".Add 3 input fields and a button.When the user clicks the button, display an alert that shows the average of all 3 text fields.

// b.Instead of showing a popup, have that information appear in a paragraph below the button.

// c.If any of the text fields doesn 't have a number, show an error message that reads "All of the inputs must be numbers"

// Question Nine a.Make a website with a heading at the top that reads "Check Middle Number Sum".Add 3 input fields and a button.When the user clicks the button, display an alert that shows whether the number in the middle input field is equal to the sum of the left input field and the right input field.

// Sample input: 4, 14, 10 Sample output: true

// Sample input: 4, 9, 8 Sample output: false b.Instead of showing a popup, have that information appear in a paragraph below the button.

// Question Ten a.Make a website with a heading at the top that reads "Disemvoweler".Add 1 input field, a checkbox and a button.When the user clicks the button, display an alert that shows the text in the input field with the vowels removed.If the checkbox is checked, count y as a vowel.

// b.Instead of showing a popup, have that information appear in a paragraph below the button.