// const input_number = () => {
//     return (num * 2)
// }

document.addEventListener("DOMContentLoaded",() => {

    document.getElementById("submit").addEventListener("click",() => { 
        let element = document.getElementById("input_number").value * 2
        //console.log(element)
        // return element * 2  
        alert(element)
    }) 
 }) 

// document.addEventListener("DOMContentLoaded",() => {

//     document.getElementById("submit").addEventListener("click",() => { 
//         let element = document.getElementById("submit")
//         alert(element)
//     }) 
//  })
//  let promptStr = Prompt(enter your string)
//     for(let i =0; i < promptStr.length; i++) {
//         if (i % 2 === 0) {
//             promptStr[i] = ""
//         }
//         return promptStr
//     }


    

// let str = prompt("Enter your name to continue")
// alert(`All right ${str}, you are about to receive street knowledge`)

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