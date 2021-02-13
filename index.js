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
    let string = palindrome(input)   
    if(input === string) {
    p.innerText = `It is ${true} that ${input} is a palindrome`
} else {
    p.innerText = `It is ${false} that ${input} is a palindrome`
}  
}

const palindrome = (input) => {
let string = "";
for(let i = (input.length - 1); i >=0; i--) {
     string += input[i]
}
return string
}

const ifNumberIsEven = () => {
    const input =  document.getElementById("even-checker-input").value
    const p = document.getElementById("even-checker-output")
    if(input % 2 === 0) {
        p.innerText = `It is ${true} that ${input} is even`
    } else {
        p.innerText = `It is ${false} that ${input} is even`
    }
}

const doubler = () => {
    const input =  document.getElementById("doubler-input").value
    const p = document.getElementById("doubler-output")
    p.innerText = `${input} doubled is ${input * 2}`
}

const average = () => {
    const input1 =  Number(document.getElementById("average-input-1").value)
    const input2 =  Number(document.getElementById("average-input-2").value)
    const input3 =  Number(document.getElementById("average-input-3").value)
    const p = document.getElementById("average-output")
    p.innerText = `The average of ${input1}, ${input2}, and ${input3} is ${(input1 + input2 + input3) / 3}`
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
