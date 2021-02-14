const stringMirror = () => {
    let input = document.getElementById('mirror-input').value
    let output = document.getElementById('mirror-output')
    
    output.innerText = input
}

const stringUppercaser = () => {
    let input = document.getElementById('uppercaser-input').value
    let output = document.getElementById('uppercaser-output')
    
    output.innerText = input.toUpperCase()
}

const isPalindrome  = () => {
    let input = document.getElementById('palindrome-input').value
    let output = document.getElementById('palindrome-output')
    
    if(input === input.split("").reverse().join("")){
        output.innerText = `It is true that ${input} is a palindrome`
    } else {
        output.innerText = `It is false that ${input} is a palindrome`
    }
}

const evenChecker = () => {
    let input = document.getElementById('even-checker-input').value
    let output = document.getElementById('even-checker-output')

    if(input % 2 === 0) {
        output.innerText = `It is true that ${input} is even`
    } else {
        output.innerText = `It is false that ${input} is even`
    }
}

const doubler = () => {
    let input = document.getElementById('doubler-input').value
    let output = document.getElementById('doubler-output')
    
    let doubledVal = input * 2
    output.innerText = `${input} doubled is ${doubledVal}`
}

const averageInput = () => {
    let input1 = Number(document.getElementById('average-input-1').value)
    let input2 = Number(document.getElementById('average-input-2').value)
    let input3 = Number(document.getElementById('average-input-3').value)
    let output = document.getElementById('average-output')

    let average = (input1 + input2 + input3) / 3
    output.innerText = `The average of ${input1}, ${input2}, and ${input3} is ${average}`
}