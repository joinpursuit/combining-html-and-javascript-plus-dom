const displayString = () => {
    const input =  document.getElementById("mirror-input").value
    const p = document.getElementById("mirror-output")
    p.innerText = input
}

const displayUppercaseString = () => {
    const input =  document.getElementById("uppercaser-input").value
    const p = document.getElementById("uppercaser-output")
    p.innerText = input.toUpperCase()
}

const displayPalindrome = () => {
    const input = document.getElementById("palindrome-input").value
    const p = document.getElementById("palindrome-output")
    const reverseP = input.split("").reverse().join("")
    let isSame = (reverseP === input)
    p.innerText = `It is ${isSame} that ${input} is a palindrome`
}

const isEven = () => {
    const input = document.getElementById("even-checker-input").value
    const p = document.getElementById("even-checker-output")
    const tOrF = input%2 === 0
    p.innerText = `It is ${tOrF} that ${input} is even`
}

const timesTwo = () => {
    const input = document.getElementById("doubler-input").value
    const p = document.getElementById("doubler-output")
    const doubledVal = input*2
    p.innerText = `${input} doubled is ${doubledVal}`
}

const avg = () => {
    const numberOne = Number(document.getElementById("average-input-1").value)
    const numberTwo = Number(document.getElementById("average-input-2").value)
    const numberThree = Number(document.getElementById("average-input-3").value)
    const p = document.getElementById("average-output")
    const add = numberOne+numberTwo+numberThree
    const average = add/3
    p.innerText = `The average of ${numberOne}, ${numberTwo}, and ${numberThree} is ${average}`
}

const vowelRemover = () => {
    const input =  document.getElementById("vowel-remover-input").value
    const p = document.getElementById("vowel-remover-output")
    const yChecker = document.getElementById("y-is-vowel-checkbox")
    p.innerText = yChecker.checked ? vowelRemover1(input, "aeiouy") : vowelRemover1(input, "aeiou")
}

const vowelRemover1 = (input, vowels) => {
    let string = ""
    for(const char of input) {
        if(!vowels.includes(char.toLowerCase())) {
            string += char
        }
    }
    return string
}