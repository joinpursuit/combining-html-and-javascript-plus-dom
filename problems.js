function stringMirror() {
    // get input from DOM
    const input = document.getElementById('mirror-input');
    // get value from input 
    const text = input.value
    // get mirror output from DOM
    const output = document.getElementById('mirror-output');
    // change the textContent of mirror-output to match input value
    output.textContent = text;
}

function stringUppercaser() {
    const input = document.getElementById('uppercaser-input');
    const text = input.value
    const output = document.getElementById('uppercaser-output')
    output.textContent = text.toUpperCase()
}

function palindromeDetector() {
    const input = document.getElementById('palindrome-input');
    let string = input.value
    let output = document.getElementById('palindrome-output');
    let newString = ""
    for ( let i = string.length - 1; i >= 0; i--) {
        newString += string[i]
    }
        if (string === newString) {
        output.textContent = `It is true that ${string} is a palindrome`;
        } else {
        output.textContent = `It is false that ${string} is a palindrome`;
        }
}

function evenChecker() {
    const input = document.getElementById('even-checker-input')
    let string = input.value
    let output = document.getElementById('even-checker-output')
    let newString = ""
    for (let i = string.length - 1; i>= 0; i--){
        newString + string[i]
    }
        if (string.length % 2 === 0) {
            output.textContent = `It is true that ${string} is even`;
        } else {
            output.textContent = `It is false that ${string} is even`;
        }
}


function numberDoubler() {
    const input = document.getElementById('doubler-input')
    let enteredNumber = input.value
    let output = document.getElementById('doubler-output')
    let doubledVal = (enteredNumber * 2)
    output.textContent = `${enteredNumber} doubled is ${doubledVal}`
}

function averageCalc() {
    let number1 = Number(document.getElementById('average-input-1').value)
    let number2 = Number(document.getElementById('average-input-2').value)
    let number3 = Number(document.getElementById('average-input-3').value)
    let output = document.getElementById('average-output')

    let average = Math.floor((number1 + number2 + number3) / 3)
    output.textContent = `The average of ${number1}, ${number2}, and ${number3} is ${average}`
}

// function disemvowel() {
//     let word = document.getElementById('vowel-remover-input').value
//     let sometimesY = document.getElementById('y-is-vowel-checkbox').checked
//     let vowelArr = ["a","e", "i", "o", "u","A", "E", "I", "O", "U"]
//     let newWord = "";
//     let output = document.getElementById('vowel-remover-output')
  
//     for(let i = 0; i < word.length; i++) {
//       if(!vowelArr.includes(word[i])) {
//         newWord += word[i];
//       }
//     }
//       return newWord
//     output.textContent = 
//   }

