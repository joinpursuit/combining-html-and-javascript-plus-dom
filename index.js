const string = () => {

const str = document.getElementById("mirror-input")
const p = document.getElementById("mirror-output")
const button = document.getElementById("mirror-button")
p.innerText = str.value

}

const upperCaseString = () => {
    const str = document.getElementById("uppercaser-input")
    const p = document.getElementById("uppercase-output")
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