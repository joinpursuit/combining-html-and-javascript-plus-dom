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
  function stringUppercaser(){
  let input = document.getElementById('uppercaser-input').value
  let output = document.getElementById('uppercaser-output')
  output.innerText = input.toUpperCase()
  }

 function palindrome() {
   
  const input = document.getElementById("palindrome-input");
  const string = input.value;
  const output = document.getElementById("palindrome-output");
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
      newString += string[i];
  }
  if (string === newString) {
      output.textContent = `It is true that ${string} is a palindrome`;
  } 
  else {
      output.textContent = `It is false that ${string} is a palindrome`;
  }

 }