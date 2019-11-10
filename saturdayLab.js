document.addEventListener("DOMContentLoaded",()=>{
    
    let userName= prompt (
        "what would you like your new name to be?"
    );
    document.querySelector("#top").innerText = `${userName}`

    const isEven = (num) => {
        if (num % 2 === 0) return (`${userInput}, Your Number is Even!`);
        if (num % 2 !== 0) return (`${userInput}, Your Number is ODD!`);
    }
let userInput = prompt("Enter a number, please!");

document.querySelector("#number").innerText = `${isEven(Number(userInput))}`


}
)
const multiplyTwo = () => {
    let num = document.querySelector("#double").value

     document.querySelector("#result").innerText= Number(num)*2
     document.getElementById("double").value= Number(num)*2

}


const isPalindrome = () => {
    let str = document.querySelector("#palindrome").value

    let reverseWrd = str.toLowerCase().split("").reverse().join("")
    if (str === reverseWrd){
        alert(`${str}, your word is a palindrome`);
    }else{
        alert(`${str}, your word is not a palindrome`);
    }


 }


const isUpperCase = () =>{

    let upp = document.querySelector("#upper").value

    let newStr = "";

    for(let i = 0; i < upp.length; i++){
        if(upp[i] === (upp[i]).toUpperCase()){
            newStr += upp[i]
        }
    }
    alert(newStr)

    document.querySelector("#newStr").innerText=`${newStr}`

    document.querySelector("#upper").value = upp.toUpperCase()

}

const howManyCap = () =>{
    let wrd = document.querySelector("#cap").value
    let cap = "";
    for(let i = 0; i < wrd.length; i++){
        if(wrd[i] === (wrd[i]).toUpperCase()){
            cap += wrd[i]
        }
    }
    alert(cap.length)

    document.querySelector("#numCap").innerText = `${cap.length}`
    document.querySelector("#cap").value = `${cap.length}`

}

const moreCap = () =>{
    let caps1 = document.querySelector("#caps1").value
    let caps2 = document.querySelector("#caps2").value
    let counter1 = "";
    let counter2 = "";

    for(let i = 0; i < caps1.length; i++) {
        if(caps1[i] === (caps1[i]).toUpperCase()) {
            counter1 += caps1[i]
        }
    }
    for(let i = 0; i < caps2.length; i++) {
        if(caps2[i] === (caps2[i]).toUpperCase()) {
            counter2 += caps2[i]
        }
    }
    if(counter1.length > counter2.length) {
        alert(caps1)
        document.querySelector("#counterComparer").innerText = caps1
    } else {
        alert(caps2)
        document.querySelector("#counterComparer").innerText = caps2
    }
    
}


const aveOfThree = () => {
    let num1 = document.querySelector("#num1").value
    let num2 = document.querySelector("#num2").value
    let num3 = document.querySelector("#num3").value
    let sum = num1 + num2 + num3
    let ave = sum/3
        document.querySelector("#answerOfThree").innerText = ave
    }