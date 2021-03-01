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
    //chech if input is palindrome
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== text[text.length-1-]) {
            output.textContent = ``
        }
    }
    
}

function evenCheck() {
    //get input Dom
    const input = document.getElementById('even-checker-input').value
    
    //get output Dom
    const output = document.getElementById('even-checker-output')
    //check to see if input number is even
    
    if (input % 2 === 0) {
       let evenOdd = true
        output.textContent = `It is ${evenOdd} that ${numberToCheck} is even`
    } else if (input % 2 !==0) {
        let evenOdd = false
        output.textContent = `It is ${evenOdd} that ${numberToCheck} is even`
    }
    //assign a parameter through function to return true or false
}


function doublefunk() {
    const userNumber = document.getElementById('doubler-input').value

    const doubleNum = document.getElementById('doubler-output')

    let doubler = userNumber * 2

    doubleNum.textContent = `${userNumber} doubled is ${doubler}`
}

function averager () {
    const firstNum = document.getElementById('average-input-1').value

    const secondNum = document.getElementById('average-input-2').value

    const thridNum = document.getElementById('average-input-3').value

    const myAverage = document.getElementById('average-output')

    let avg = (firstNum + secondNum + thridNum) / 3 

    myAverage.textContent = `The average of ${firstNum}, ${secondNum}, and ${thridNum} is ${avg}`
}

function bonus() {
    //get text input DOM element
    const textInput = document.getElementById("vowel-remover-input")
    //get checkbox DOM element
    const checkbox = document.getElementById("y-is-vowel-checkbox")
    //get text from the input DOM element
    const text = textInput.value
    //see if checkbox is checked
    const yIsVowel = checkbox.checked

    //remove all the vowels from text
    removeVowels(text,yIsVowel)
    //add resulting string to p#vowel-rmover-output


}


//text is string
//yIsVowel is boolean
//return a string without vowels
function removeVowels(text, yIsVowel) {
    //make an array of vowels: lower and uppercase vowels
    const vowels = [
        'a', 'A'
        'e', 'E'
        'i', 'I'
        'o', 'O'
        'u', 'U'
    ]
    //if yIsVowel, push y and Y
    if (yIsVowel) {
        vowels.push('y', 'Y')
    }
    //create new array to store output characters
    const arr = []
    //iterate through text
    for (let char of text) {
        console.log(char)
        if (!vowels.includes(char)) {
            arr.push(char)
        }
    }
        //check if each character is NOT a vowel
        //push into a new array
    //join array back to string
    //return string
    return arr.join('')
}