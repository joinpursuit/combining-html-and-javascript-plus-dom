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
