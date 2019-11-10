/*#Question One

a.Make a website that prompts the user
for a string.Then show a popup that displays the string.*/
document.addEventListener("DOMContentLoaded", () => {
    let strOne = prompt("What is your name?")
    let alertOne = (alert(strOne))
    alertOne.innerText = strOne
})