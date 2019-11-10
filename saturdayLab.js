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

    document.getElementById("#upper").value= upp.toUpperCase()

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

    document.querySelector("#numCap").innerText= `${cap.length}`

}


