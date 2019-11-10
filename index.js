//Problem 1

// document.addEventListener("DOMContentLoaded",() =>{
//     let name = prompt("What is your name? ")
//     document.querySelector("#yourName").innerText = `${name}`
// })

// alert(`${name}`)

//Problem 2

// document.addEventListener("DOMContentLoaded",() =>{
//     let number = prompt("Type a number: ")
//     if(number % 2 === 0){
//         return document.querySelector("#header").innerText = `${number} is even`
//     } else {
//         return document.querySelector("#header").innerText = `${number} is odd`
//     }
// })

//Problem 3
// function multipleTwo(){

//     document.querySelector("#num").value = `${num.value} Times Two Is ${Number(num.value)*2}`
// }

// Problem 4
// function pallindrome(){
//     let str = document.querySelector("#arr").value
//     for(let i = 0; i < Math.floor(str.length/2); i++){
//          if(str[str.length - 1 - i] !== str[i]){
//         //   alert("Your word or array is not a pallindrome");
//         return document.querySelector("#header").innerText = "Your word or string is not a pallindrome"
//          }
//     }
//     // alert("Your word or array is a pallindrome");
//     return document.querySelector("#header").innerText = "Your word or string is a pallindrome"
// }

// Problem 5
// const upperCase = () =>{
    
//     // string2.innerText = `${str.value.toUpperCase()}`
  
//     let str = document.querySelector("#str")
//     document.querySelector("#str").value = str.value.toUpperCase()
// }

//Problem 6
// document.addEventListener("DOMContentLoaded",() =>{

// let submit = document.querySelector("#upperCaseBtn")

// submit.addEventListener("click",() => {
//     let str = document.querySelector("#str").value
//     let num =0
//     let upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
//     for(let i = 0; i < str.length; i++){
//         if(upper.includes(str[i])) num++ 
//     }
//     document.querySelector("#result").innerText =  num
// })


// })

// Problem 7
// document.addEventListener("DOMContentLoaded",() =>{

//     const numUpper = (string) =>{
//         let num =0
//         // let upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
//         for(let i = 0; i < string.length; i++){
//             if(string[i] === string[i].toUpperCase()) num++ 
//         }
//         return num

//     }

//     let submit = document.querySelector("#upperCaseBtn")

//     submit.addEventListener("click",() => {

//         let stringone = document.querySelector("#strone").value
//         let stringtwo = document.querySelector("#strtwo").value
        
//         if(numUpper(stringone) > numUpper(stringtwo)){
//             return  document.querySelector("#result").innerText = "First string has more capital letters"
//         } else if (numUpper(stringone) < numUpper(stringtwo)) {
//             return document.querySelector("#result").innerText = "Second string has more capital letters"
//         } else{
//             return document.querySelector("#result").innerText = "Both strings have equal amounts of capital letters"
//         }

//     })

// })

// Problem 7 doesnt work for even
// document.addEventListener("DOMContentLoaded",() =>{

//     const numUpper = (string) =>{
//         let num =0
//         for(let letter of string) if(letter === letter.toUpperCase()) num++ 
//         return num
//     }
    
//     let submit = document.querySelector("#upperCaseBtn")
   
//     submit.addEventListener("click",() => {

//         let stringone = document.querySelector("#strone").value
//         let stringtwo = document.querySelector("#strtwo").value
//         let resultText = document.querySelector("#result")

//         return  resultText.innerText = (numUpper(stringone) > numUpper(stringtwo) )?  "First string has more capital letters" : "Second string has more capital letters"

//     })
// })

// Problem 8
// document.addEventListener("DOMContentLoaded",() =>{

// const Avg  = (... numArr) => {
//     let avg = 0
//     for(let i = 0; i< numArr.length; i++){
//         avg += numArr[i]
//     }
//     return avg = (avg/numArr.length)
// }
// let submit = document.querySelector("#AvgBtn")

// submit.addEventListener("click",() => {

//     let numONE =  Number(document.querySelector("#numone").value)
//     let numTWO =  Number(document.querySelector("#numtwo").value)
//     let numTHREE = Number( document.querySelector("#numthree").value)
    
    
//     debugger
//     if (Number (numONE) &&  Number (numTWO)&& Number (numTHREE)){
//         document.querySelector("#result").innerText = Avg(numONE,numTWO,numTHREE)

//     } else {

//         alert("All of the inputs must be numbers")
//          document.querySelector("#result").innerText = "Please type in numbers"
        
//         document.querySelector("#numone").value = ""
//         document.querySelector("#numtwo").value = ""
//         document.querySelector("#numthree").value = ""

//     }

// })

// })

//Problem 9
// document.addEventListener("DOMContentLoaded",() =>{

// const sum = (...sumArr) =>{
//     let sum = 0
//     for(let i = 0; i< sumArr.length; i++){
//                 sum += sumArr[i]
//     }
                
//     return sum
// }

// let submit = document.querySelector("#sumBtn")

// submit.addEventListener("click",() => {

//     let numONE =  Number(document.querySelector("#numone").value)
//     let numTWO =  Number(document.querySelector("#numtwo").value)
//     let numTHREE = Number( document.querySelector("#numthree").value)
    
    
//     if (Number (numONE) &&  Number (numTWO)&& Number (numTHREE)){
//         document.querySelector("#result").innerText = sum(numONE,numTHREE) === numTWO

//     } else {

//         alert("All of the inputs must be numbers")
//          document.querySelector("#result").innerText = "Please type in numbers"
        
//         document.querySelector("#numone").value = ""
//         document.querySelector("#numtwo").value = ""
//         document.querySelector("#numthree").value = ""

//     }

// })

// })


//Problem 10
document.addEventListener("DOMContentLoaded",() =>{

    const disemvowel = (string) => {
        vowels = ["a", "e", "i", "o", "u"]
        newString = ""

        for(let i = 0; i < string.length; i++){
            if(!vowels.includes(string[i])){
                newString += string[i]
            }
        }
        return newString
    }

    const disemvowelY = (string) => {
        vowels = ["a", "e", "i", "o", "u", "y"]
        newString = ""
        for(let i = 0; i < string.length; i++){
            if(!vowels.includes(string[i])){
                newString += string[i]
            }
        }
        return newString
    }
    
    let button = document.querySelector("#disemvowel")
    let CheckboxY = document.querySelector("#disY");
    
    button.addEventListener("click",() => {
        let string =  document.querySelector("#str").value
        
        if(CheckboxY.checked){
            return document.querySelector("#result").innerText = disemvowelY(string)
        } else{
            return document.querySelector("#result").innerText = disemvowel(string)
        }
       
    
    })
})