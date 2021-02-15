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
const numberDoubler = () => {
    const input = document.getElementById("doubler-input")
    const inputVal = input.value
    let doubledNum = inputVal * 2 
    const textLocation = document.getElementById("doubler-output") 
    textLocation.textContent = `${inputVal} doubled is ${doubledNum}`

}
const averageOfThreeNumbers = () => {
    const inputOne = document.getElementById("average-input-1")
    const inputValOne = inputOne.value 
    const inputTwo = document.getElementById("average-input-2")
    const inputValTwo = inputTwo.value 
    const inputThree = document.getElementById("average-input-3")
    const inputValThree = inputThree.value 
    const average = (Number(inputValOne) + Number(inputValTwo) + Number(inputValThree))/3
    const textLocation = document.getElementById("average-output")
    textLocation.textContent = `The average of ${inputValOne}, ${inputValTwo}, and ${inputValThree} is ${average}`
}