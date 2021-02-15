function stringMirror() {
    //get input from DOM
    const input = document.getElementById('mirror-input')
    //get value from input tag
    const text = input.value
    //get mirror-output from DOM
    const output = document.getElementById('mirror-output')
    //change textContent of mirror-output to match input value
    output.textContent = text
}   

function stringToUpper() {
    //get input from DOM
    const input = document.getElementById('uppercaser-input')
    //get value from input tag
    const text = input.value
    //get output from DOM
    const output= document.getElementById('uppercaser-output')
    //change value of input tag to all uppercase
    output.textContent = text.toUpperCase()
    
}

function palindromeDec() {
    //get input Dom
    const input = document.getElementById('palindrome-input')
    //get value from input tag
    const text= input.value
    //get output from Dom
    const output = document.getElementById('palindrome-output')
    //
    for (let i = 0; i < text.length; i++) {
        if (text[i] === text[text.length-1-i]) {
            return false
        }
    }
    console.log(text)
}