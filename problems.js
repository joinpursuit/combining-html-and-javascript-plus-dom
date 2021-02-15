function stringMirror(){
    //get input from DOM
    const input = document.getElementById("mirror-input")
    //get value from input tag
    const text = input.value

    // get mirror-output from DOM
    const output = document.getElementById("mirror-output")
    // change the textContent of mirror-output to match input value
    output.textContent = text
}

function stringUpperCaser(){
    let input = document.getElementById('uppercaser-input');
    let text = input.value
    let output = document.getElementById('uppercaser-output');
    output.textContent = text.toUpperCase();
}

function isPalindrome() {
    let input = document.getElementById('palindrome-input');
    let text = input.value
    let output = document.getElementById('palindrome-output');
    let string = ""
    let trueFalse = false
    for ( let i = text.length - 1; i >= 0; i--) {
        string += text[i]
    }

    if(text === string) {
        trueFalse = true
    }
    output.textContent = `It is ${trueFalse} that ${text} is a palindrome`
}


const isEvenChecker = () => {
    let input = document.getElementById('even-checker-input');
    let number = input.value;
    let output = document.getElementById('even-checker-output');

    if(number % 2 === 0) {
        output.textContent = `It is true that ${number} is even`
    }
    else{
        output.textContent = `It is false that ${number} is even`
    }
}

const doubler = () => {
    let input = document.getElementById('doubler-input')
    let number = input.value;
    let output = document.getElementById('doubler-output');

    output.textContent = `${number} doubled is ${number * 2}`
}

const average = () => {
    let num1 = parseInt(document.getElementById('average-input-1').value);
    let num2 = parseInt(document.getElementById('average-input-2').value);
    let num3 = parseInt(document.getElementById('average-input-3').value);

    let output = document.getElementById('average-output');

    output.textContent = `The average of ${num1}, ${num2}, and ${num3} is ${(num1 + num2 + num3) / 3}`
}