// a. Make a website that prompts the user for a string. Then show a popup that displays the string.
document.addEventListener("DOMContentLoaded",()=> {
    let newName =(prompt("What is your name"))
 let alertOne = (alert(newName))
    alertOne.innerText = newName


})

// b. Instead of showing a popup, make the text appear on the screen.
document.addEventListener("DOMContentLoaded",()=> {

    let newPassion =(prompt("What is your Passion"))
    let passionTag = document.querySelector("#Cooking");
   passionTag.innerText = newPassion

})

// a. Make a website that prompts the user for a number, then alerts them of whether or not the number is even.
document.addEventListener("DOMContentLoaded",()=> {

    let number =(prompt("give me a number and make it even"))
    //b. Instead of showing a popup, make the text appear on the screen.
    let numTag = document.querySelector("#num");
    numTag.innerText = number
 const isEven = (num) => {
     if (num %2 === 0)return true;
     if (num %2 !== 0)return false;
 }
if (isEven(Number(number))){
    alert ("your numbern is even")
} else {
    alert("you are an odd fellow ")
}
    })




 

const multiplyTwo = () => {
    let num = document.querySelector("#double").value
     document.querySelector("#result").innerText= Number(num)*2
     document.getElementById("double").value= Number(num)*2
}






    // <form>
    // <p id = "num2>"  <label for"number">Enter your number </label>
    //   <input id= "name" type="text" placeholder="name"><br>







//     document.getElementById("demo").innerHTML = "Hello World";
//   }

 

    // a. Make a website with an input field and a button. 
    //  Have a heading at the top that reads "Double your number below"  
    //  When the user clicks on the button, display an alert showing that number times two.
 



//b. Instead of showing a popup, make the text appear on the screen.



const multiplyTwo = () => {
        let num = document.querySelector("#double").value
         document.querySelector("#result").innerText= Number(num)*2
         document.getElementById("double").value= Number(num)*2
    }
    