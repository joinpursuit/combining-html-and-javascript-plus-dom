const userMirror = () => {
    const userText = document.getElementById('mirror-input');
    const output = userText.value;
    const userOutput = document.getElementById('mirror-output');
    
    userOutput.textContent = output;
}

const upperCaseButton = () => {
    const input = document.getElementById('uppercaser-input');
    const output = input.value;
    const display = document.getElementById('uppercaser-output');

    display.textContent = output.toUpperCase()
}

const ifPalindrome = () => {
    const input = document.getElementById('palindrome-input').value;
    let display = document.getElementById('palindrome-output');

    let reverse = '';
    for (let i = input.length -1; i >= 0; i--){
        reverse += input[i];
    }   
    if (reverse === input){
        display.textContent = `It is ${true} that ${input} is a palindrome!`
    } else {
        display.textContent = `It is ${false} that ${input} is a palindrome!`
    }
}

const evenChecker = () => {
    const input = document.getElementById('even-checker-input').value;
    let output = document.getElementById('even-checker-output');
    let string = '';

    for (let i = input.length -1; i >= 0; i--){
        string + input[i];
    }
    if (input.length % 2 === 0){
        output.textContent = `It is ${true} that ${input} is even`;
    } else {
        output.textContent = `It is ${false} that ${input} is even`
    }
}

const numberDoubler = () => {
    const input = document.getElementById('doubler-input').value;
    const output = document.getElementById('doubler-output');       
    const byTwo = (input * 2);

    output.textContent = `${input} doubled is ${byTwo}`
}

function averageCalc() {
    let number1 = Number(document.getElementById('average-input-1').value)
    let number2 = Number(document.getElementById('average-input-2').value)
    let number3 = Number(document.getElementById('average-input-3').value)
    let output = document.getElementById('average-output')
    let average = Math.floor((number1 + number2 + number3) / 3)
    output.textContent = `The average of ${number1}, ${number2}, and ${number3} is ${average}`
}