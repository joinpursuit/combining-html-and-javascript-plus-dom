function stringMirror () {
  //get input from DOM
  const input = document.getElementById('mirror-input')
  // get value from the input tag
  const text = input.value
  // get mirror-output from DOM
  const output = document.getElementById('mirror-output')
  //change the textContent of mirror-output to match
  output.textContent = text
}

function stringUppercaser () {
  //get input from DOM
  const input = document.getElementById('uppercaser-input')
  // get value from the input tag
  const str = input.value
  // get uppercaser-output from DOM
  const output = document.getElementById('uppercaser-output')
  //change the textContent of uppercaser-output to match
  output.textContent = str.toUpperCase()
}

function isPalindrome () {
  let newStr = ''
  const input = document.getElementById('palindrome-input')
  const str = input.value

  const output = document.getElementById('palindrome-output')
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }

  output.textContent = `It is ${newStr === str} that ${str} is a palindrome`
}



function isEvenNumber () {
  
  const input = document.getElementById('even-checker-input')
  const number = input.value

  const output = document.getElementById('even-checker-output')
  

  output.textContent = `It is ${((number % 2) === 0) } that ${number} is even`
}


function doubledNumber () {
  
  const input = document.getElementById('doubler-input')
  const number = input.value

  const output = document.getElementById('doubler-output')
  

  output.textContent = `${number} doubled is ${number*2}`
}


function averageNumber () {
  
  const input = document.getElementById('average-input-1')
  const number1 = parseInt(input.value)

  const input2 = document.getElementById('average-input-2')
  const number2 = parseInt(input2.value)

  const input3 = document.getElementById('average-input-3')
  const number3 = parseInt(input3.value)

  const average = (number1 + number2 + number3)/3
  const output = document.getElementById('average-output')
  

  output.textContent = `The average of ${number1}, ${number2}, and ${number3} is ${average.toFixed(0)}`
}
