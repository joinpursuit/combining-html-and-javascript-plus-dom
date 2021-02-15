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