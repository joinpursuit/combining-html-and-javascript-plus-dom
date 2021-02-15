function mirrorString() {
    const mirrorValue = document.getElementById('mirror-input');
    const text = mirrorValue.value
    const output = document.getElementById('mirror-output');
    output.textContent = text;
}

function stringUppercase() {
    const stringValue = document.getElementById('uppercaser-input')
    const text = stringValue.value
    const output = document.getElementById('uppercaser-output')
    output.textContent = text.toUpperCase()
}

function palindromeDetector() {
    const stringValue = document.getElementById('palindrome-input');
    let text = stringValue.value
    let output = document.getElementById('palindrome-output');
    let newString = ""
    for ( let i = text.length - 1; i >= 0; i--) {
        newString += text[i]
    }
    if (text === newString) {
        output.textContent = `It is true that ${text} is a palindrome`;
    }
    else {
        output.textContent = `It is false that ${text} is a palindrome`;
    }
}

function evenChecker() {
    const inputNumber = document.getElementById('even-checker-input')
    let stringNumber = inputNumber.value
    let output = document.getElementById('even-checker-output')
    let newString = ""
    for (let i = stringNumber.length - 1; i>= 0; i--){
        newString + stringNumber[i]
    }
    if (stringNumber.length % 2 === 0) {
        output.textContent = `It is true that ${stringNumber} is even`;
    }
    else {
        output.textContent = `It is false that ${stringNumber} is even`;
    }
}


function numberDoubler() {
    const inputNumber = document.getElementById('doubler-input')
    let enteredNumber = inputNumber.value
    let output = document.getElementById('doubler-output')
    let doubledValue = (enteredNumber * 2)
    output.textContent = `${enteredNumber} doubled is ${doubledValue}`
}

function average() {
    let number1 = Number(document.getElementById('average-input-1').value)
    let number2 = Number(document.getElementById('average-input-2').value)
    let number3 = Number(document.getElementById('average-input-3').value)
    let output = document.getElementById('average-output')
    let averageNumber = Math.floor((number1 + number2 + number3) / 3)
    output.textContent = `The average of ${number1}, ${number2}, and ${number3} is ${averageNumber}`
}
