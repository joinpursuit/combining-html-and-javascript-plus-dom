function stringMirror() {
    // get input from DOM
    const input = document.getElementById('mirror-input')
    // get value from input tags
    const text = input.value

    // get mirror-output from DOM
    const output=document.getElementById('mirror-output')
    output.textContent = text
    // change textContent of mirror-output to match the input value
}

function stringUpperCase() {
    const input = document.getElementById('uppercaser-input')
    const text = input.value
    const output = document.getElementById('uppercaser-output')
    output.textContent = text.toUpperCase()
}

function checkPalindrome() {
    const input = document.getElementById('palindrome-input')
    const str = input.value
    const output = document.getElementById('palindrome-output')
    let newStr = ''
    for(let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    if(str === newStr) {
        output.innerHTML = `It is true that ${str} is a palindrome`
    } else {
        output.innerHTML = `It is false that ${str} is a palindrome`
    }
}

function checker() {
    const input = document.getElementById('even-checker-input');
    const evenOrOdd = input.value
    const output = document.getElementById('even-checker-output');

    if( evenOrOdd % 2 === 0 ) {
        output.innerHTML = `It is true that ${evenOrOdd} is even`
    } else {
        output.innerHTML = `It is false that ${evenOrOdd} is even`
    }
}

function numDoubler() {
    const input = document.getElementById('doubler-input')
    const num = input.value
    const output = document.getElementById('doubler-output')

    output.innerHTML = `${num} doubled is ${num * 2}`
}

function averageNum() {
    const num1 = Number(document.getElementById('average-input-1').value)
    const num2 = Number(document.getElementById('average-input-2').value)
    const num3 = Number(document.getElementById('average-input-3').value)
    const output = document.getElementById('average-output')

    let avg = Math.floor((num1 + num2 + num3) / 3)

    output.innerHTML = `The average of ${num1}, ${num2}, and ${num3} is ${avg}`
}