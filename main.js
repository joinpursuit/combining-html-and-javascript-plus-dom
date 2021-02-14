const stringMirror = () => {
    const input = document.getElementById("mirror-input")
    const inputValue = input.value
    const textLocation = document.getElementById("mirror-output")
    textLocation.textContent = inputValue
}
const stringUppercaser = () => {
    const input = document.getElementById("uppercaser-input")
    const inputValue = input.value
    const upperCaseString = inputValue.toUpperCase()
    const textLocation = document.getElementById("uppercaser-output")
    textLocation.textContent = upperCaseString
}
const palindromeDetector = () => {
    const input = document.getElementById("palindrome-input")
    const inputValue = input.value
    let backWardInput = []
    let boolVal = false 
    for (i = inputValue.length - 1; i >= 0; i--) {
        backWardInput.push(inputValue[i])
    }
    if (backWardInput.join("") === inputValue){
        boolVal = true
    }
    const textLocation = document.getElementById("palindrome-output")
    textLocation.textContent = `It is ${boolVal} that ${inputValue} is a palindrome`
}
const evenChecker = () => {
    const input = document.getElementById("even-checker-input")
    const inputValue = input.value
    let boolVal = true 
    if(inputValue % 2 === 1){
        boolVal = false
    }
    const textLocation = document.getElementById("even-checker-output")
    textLocation.textContent = `It is ${boolVal} that ${inputValue} is even`
}
