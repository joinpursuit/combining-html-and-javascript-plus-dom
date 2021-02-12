function mirrorOutput() {
    document.getElementById("mirror-output").textContent = document.getElementById("mirror-input").value
}
function uppercaseOutput() {
    document.getElementById("uppercaser-output").textContent = document.getElementById("uppercaser-input").value.toUpperCase()
}
function palindromeOutput() {
    let val = document.getElementById("palindrome-input").value
    let fVal = val.split("").filter(e => e !== " ").join("")
    let palindrome = true
    for(let i = 0; i < Math.floor(fVal.length / 2); i++){
        if(fVal[i] !== fVal[fVal.length - 1 - i]){
            palindrome = false
            break
        }
    }
    document.getElementById("palindrome-output").textContent = `It is ${palindrome ? "true" : "false"} that ${val} is a palindrome` 
}
function evenCheckerOutput() {
    let val = document.getElementById("even-checker-input").value
    let bool = val % 2 === 0
    document.getElementById("even-checker-output").textContent = `It is ${bool ? "true" : "false"} that ${val} is even`
}
function doublerOutput() {
    let val = document.getElementById("doubler-input").value
    document.getElementById("doubler-output").textContent = `${val} doubled is ${val * 2}`
}
function averageOutput() {
    let num1 = Number(document.getElementById("average-input-1").value)
    let num2 = Number(document.getElementById("average-input-2").value)
    let num3 = Number(document.getElementById("average-input-3").value)
    let average = Math.floor((num1 + num2 + num3) / 3)
    document.getElementById("average-output").textContent = `The average of ${num1}, ${num2}, and ${num3} is ${average}`
}
function vowelRemoverOutput() {
    let val = document.getElementById("vowel-remover-input").value
    let yBool = document.getElementById("y-is-vowel-checkbox").checked
    let vowels = yBool ? "aeiouyAEIOUY" : "aeiouAEIOU"
    document.getElementById("vowel-remover-output").textContent = val.split("").filter(e => !vowels.includes(e)).join("")
}