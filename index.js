const mirrorInput = () => {
    const input = document.querySelector("#mirror-input")
    const output = document.querySelector("#mirror-output")
    output.innerText = input.value;
}

const upperCaser = () => {
    const anyCaseText = document.getElementById("uppercaser-input")
    const upperCaseText = document.getElementById("uppercaser-output")
    upperCaseText.innerText = anyCaseText.value.toUpperCase();
}

const isPalindrome = () => {
    const input = document.getElementById("palindrome-input")
    const output = document.getElementById("palindrome-output")
    let reverseStr = input.value.toLowerCase().split('').reverse().join('')
    output.innerText = `It is ${reverseStr === input.value.toLowerCase()} that ${input.value} is a palindrome`;
}
    

const checkEven = () => {
    const input = document.getElementById("even-checker-input")
    const output = document.getElementById("even-checker-output")
    output.innerText = `It is ${input.value % 2 === 0} that ${input.value} is even`
}

const doubleNum = () => {
    const input = document.getElementById("doubler-input")
    const output = document.getElementById("doubler-output")
    output.innerText = `${input.value} doubled is ${input.value * 2}`
}

const numsAverage = () => {
    const input = document.getElementById("average-button")
    const output = document.getElementById("average-output")
    numOne = Number(document.getElementById("average-input-1").value)
    numTwo = Number(document.getElementById("average-input-2").value)
    numThree = Number(document.getElementById("average-input-3").value)
    output.innerText = `The average of ${numOne}, ${numTwo}, and ${numThree} is ${(numOne + numTwo + numThree)/3}`
}

const vowelRemove = () => {
    const input = document.getElementById("palindrome-input")
    const output = document.getElementById("palindrome-output")
}