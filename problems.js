function mirror() {
const input = document.getElementById('mirror-input')

const text = input.value 

const output = document.getElementById('mirror-output')

output.textContent = text

}

function upperCaser() {
const strInput = document.getElementById('uppercaser-input')

const newText = strInput.value

const strOutput = document.getElementById('uppercaser-output')

strOutput.innerText = newText.toUpperCase()

}

function palindrome() {
    const stringInput = document.getElementById('palindrome-input')
    const str = stringInput.value

    const stringOutput = document.getElementById('palindromeoutput')

    output.textContent = `It is ${true/false} that ${enteredString} is a palindrome`
}

function isEven() {
    const input = document.getElementById('even-checker-input')
    const num = input.value 
    let output = document.getElementById('even-checker-output')
    let result = false
    if(num % 2 === 0) {
        result = true
    }
    output.textContent = `It is ${result} that ${num} is even`
}

function doubler() {
    const input = document.getElementById('doubler-input')
    const num = input.value 
    let output = document.getElementById('doubler-output')
    const doubleNum = num * 2
    output.textContent = `${num} doubled is ${doubleNum}`
}

function avgOfthree() {
    const inputOne = document.getElementById('average-input-1')
    const inputTwo = document.getElementById('average-input-2')
    const inputThree = document.getElementById('average-input-3')
    const num = Number(inputOne.value)
    const numTwo = Number(inputTwo.value)
    const numThree = Number(inputThree.value)
    let totalNum = (num +numTwo + numThree)/3
    let output = document.getElementById('average-output')
    output.textContent = `The average of ${num}, ${numTwo}, and ${numThree} is ${totalNum}`
}
