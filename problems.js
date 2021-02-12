function stringMirror() {
    const input = document.getElementById('mirror-input')
    const text = input.value
    const output = document.getElementById('mirror-output')
    output.textContent = text
}

function upperCaser () {
    const input = document.getElementById('uppercaser-input').value
    const output = document.getElementById('uppercaser-output')
    output.textContent = input.toUpperCase()
}

function palindrome () {
    const input = document.getElementById('palindrome-input').value
    const output = document.getElementById('palindrome-output')
    let compareInput = input
    function checker() {
        return compareInput === compareInput.split('').reverse().join('')
    }
    return output.textContent = `It is ${checker()} that ${input} is a palindrome`
}

function evenChecker () {
    const input = document.getElementById('even-checker-input').value
    const output = document.getElementById('even-checker-output')
    function numChecker () {
        return input % 2 === 0
    }
    return output.textContent = `It is ${numChecker()} that ${input} is even`
}

function numDoubler () {
    const input = document.getElementById('doubler-input').value
    const output = document.getElementById('doubler-output')
    function doubled () {
        return input * 2
    }
    return output.textContent = `${input} doubled is ${doubled()}`
}

function averageNum () {
    const input1 = document.getElementById('average-input-1').value
    const input2 = document.getElementById('average-input-2').value
    const input3 = document.getElementById('average-input-3').value
    const output = document.getElementById('average-output')
    function average () {
        return (Number(input1) + Number(input2) + Number(input3))/3
    }
    return output.textContent = `The average of ${input1}, ${input2}, and ${input3} is ${average()}`
}