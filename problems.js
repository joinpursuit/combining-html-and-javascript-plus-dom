function stringMirror() {
    // get input from DOM
    const input = document.getElementById('mirror-input');
    // get value from input 
    const text = input.value;
    // get mirror output from DOM
    const output = document.getElementById('mirror-output');
    // change the textContent of mirror-output to match input value
    output.textContent = text;
}

function upperCaser() {
    const input = document.getElementById('uppercaser-input');
    const text = input.value;
    const output = document.getElementById('uppercaser-output');
    output.textContent = text.toUpperCase();
}

function palindromeChecker() {
    const input = document.getElementById('palindrome-input');
    const text = input.value;
    const output = document.getElementById('palindrome-output');
    if (text === text.split('').reverse().join('')) {
        output.textContent = `It is true that ${text} is a palindrome`
    } else {
        output.textContent = `It is false that ${text} is a palindrome`
    }
}

function evenChecker() {
    const input = document.getElementById('even-checker-input');
    const number = input.value;
    const output = document.getElementById('even-checker-output');
    if (number % 2 === 0) {
        output.textContent = `It is true that ${number} is even`
    } else {
        output.textContent = `It is false that ${number} is even`
    }
}


function doubler() {
    const input = document.getElementById('doubler-input');
    const number = input.value;
    const output = document.getElementById('doubler-output');
    const doubledVal = (number * 2);
    output.textContent = `${number} doubled is ${doubledVal}`
}

function avgChecker() {
    const input1 = Number(document.getElementById('average-input-1').value);
    const input2 = Number(document.getElementById('average-input-2').value);
    const input3 = Number(document.getElementById('average-input-3').value);
    const output = document.getElementById('average-output');
    const avg = (Math.floor(input1 + input2 + input3)/3);
    output.textContent = `The average of ${input1}, ${input2}, and ${input3} is ${avg}`
}

function vowelRemover() {
    
}