function stringMirror() {
    const input= document.getElementById('mirror-input')
    const text = input.value 
    const output = document.getElementById('mirror-output')
    output.textContent = text
}

function uppercaser () {
    const input = document.getElementById('uppercaser-input')
    const text = input.value
    const output = document.getElementById('uppercaser-output')
    output.textContent = text.toUpperCase()
}

function palindrome() {
    const input = document.getElementById('palindrome-input')
    const text = input.value 
    let output = document.getElementById('palindrome-output')
    let newString = ""
    for (let i = text.length -1; i >= 0; i--) {
        newString = newString + text[i]
    }
    if(text === newString) {
        output.textContent = `It is true that ${text} is a palindrome`
    } else {
        output.textContent = `It is false that ${text} is a palindrome`
    }
}

function even() {
    const input = document.getElementById('even-checker-input')
    const text = input.value
    const output = document.getElementById('even-checker-output')
    if( text % 2 === 0) {
        output.textContent = `It is true that ${text} is even`
    } else {
        output.textContent = `It is false that ${text} is even`
    }
}

function doubler () {
    const input = document.getElementById('doubler-input')
    const text = input.value 
    const output = document.getElementById('doubler-output')
    let doubledVal = text * 2
    output.textContent = `${text} doubled is ${doubledVal}`
}

function averageThree() {
    const input1 = document.getElementById('average-input-1')
    const text1 = Number(input1.value)
    const input2 = document.getElementById('average-input-2')    
    const text2 = Number(input2.value)
    const input3 = document.getElementById('average-input-3')
    const text3 = Number(input3.value)
    const output = document.getElementById('average-output')
    let totalAvg = (text1+text2+text3)/3
    output.textContent = `The average of ${text1}, ${text2}, and ${text3} is ${totalAvg}`
}




function bonus() {
    // get text input DOM element 
    const textInput = document.getElementById('vowel-remover-input')
    // get the checkbox DOM element 
    const checkbox= document.getElementById('y-is-vowel-checkbox').checked

    //get the text from the input DOM element!
    const text = textInput.value
    // see if the checkbox is checked!
    const isChecked = checkbox.checked

    // remove all the vowels from text!

    // Add the resulting string to p#vowel-remover-output

}

function removeVowels(text, yIsVowel) {
    
}