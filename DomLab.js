 // QUESTION 1  

// let str = prompt("Enter your name to continue")
// alert(`All right ${str}, you are about to receive street knowledge`)


//QUESTION 2

// let evenNum = prompt("enter your age")
// if(evenNum %2 === 0){
//     alert("your age is even")
// } else {
//     alert("your age is Odd")
// }

// let nameInputElement = document.getElementById("input_number")

//  let input_number = (num) => {
//      alert(num * 2)
//  }


// Question 3
// document.addEventListener("DOMContentLoaded",() => {

//     document.getElementById("submit").addEventListener("click",() => { 
//         let element = document.getElementById("input_number").value * 2
//         //console.log(element)
//         // return element * 2  
//         alert(element)
//     }) 
//  }) 

//QUESTION 3B


// document.addEventListener("DOMContentLoaded",() => {

//     document.getElementById("submit").addEventListener("click",() => { 
//         let element = document.getElementById("input_number").value * 2
//         document.getElementById("doubled").innerText = element
//     }) 
//  }) 

//  QUESTION 3C

document.addEventListener("DOMContentLoaded",() => {

    document.getElementById("submit").addEventListener("click",() => { 
        let element = document.getElementById("input_number")
        let output = element.value * 2
        element.value = output
        
        
        
        // debugger
    }) 
 }) 





