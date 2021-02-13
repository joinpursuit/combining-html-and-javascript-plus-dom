const string = () => {

const str = document.getElementById("mirror-input")
const p = document.getElementById("mirror-output")
const button = document.getElementById("mirror-button")
p.innerText = str.value

}

const upperCaseString = () => {
    const str = document.getElementById("uppercaser-input")
    const p = document.getElementById("uppercaser-output")
    p.innerText = str.value.toUpperCase()
}

const palindrome = () => {
    const str = document.getElementById("palindrome-input")
    const p = document.getElementById("palindrome-output")
    let str2 = str.value 
    let palindrome = "";
    for(let i = str2.length - 1; i >= 0; i--){
        palindrome += str2[i]
    }
    if(str2 === palindrome){
        p.innerText = `It is ${true} that ${str2} is a palindrome`
    }
    else{
        p.innerText = `It is ${false} that ${str2} is a palindrome`
    }
}

const evenChecker = () => {
    const num = document.getElementById("even-checker-input")
    const p = document.getElementById("even-checker-output")
    let num2 = num.value
    if(num2 % 2 === 0){
        p.innerText=`It is true that ${num2} is even`
    } else {
        p.innerText=`It is false that ${num2} is even`
    }

}

const double = () => {
    const num = document.getElementById("doubler-input")
    const p = document.getElementById("doubler-output")
    let num2 = num.value * 2
    p.innerText = `${num.value} doubled is ${num2}`
}

const average = () =>{
    const num1 = document.getElementById("average-input-1").value
    const num2 = document.getElementById("average-input-2").value
    const num3 = document.getElementById("average-input-3").value
    const p = document.getElementById("average-output")
    
    let sum = Number(num1 ) + Number(num2) + Number(num3)
    let avg = sum/3

 
    p.innerText = `The average of ${num1}, ${num2}, and ${num3} is ${avg}`
}


const removeVowels = () => {
    (document.getElementById("y-is-vowel-checkbox").checked) ? removeY() :  doNotRemoveY()
}

const removeY = () => {
    const str = document.getElementById("vowel-remover-input").value
    const p = document.getElementById("vowel-remover-output")
    
    let vowels = "aeiouy"
    let newStr =""
    for (letter of str){
        if(!vowels.includes(letter)){
            newStr += letter
        }
    }
    p.innerText =`${newStr}`
}

const doNotRemoveY =() => {
    const str = document.getElementById("vowel-remover-input").value
    const p = document.getElementById("vowel-remover-output")

        let vowels = "aeiou"
        let newStr =""
        for (letter of str){
            if(!vowels.includes(letter)){
               newStr += letter
             }
         }
    p.innerText =`${newStr}`
}