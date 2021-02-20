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
    let string = input.value;
    let output = document.getElementById("palindrome-output");
    let newStr = "";
    for (let i = string.length - 1; i >= 0; i--) {
      newStr += string[i];
    }
    if (string === newStr) {
      output.textContent = `It is true that ${string} is a palindrome`;
    } else {
      output.textContent = `It is false that ${string} is a palindrome`;
    }
  }

 function evenChecker(){
  const input = document.getElementById("even-checker-input");
  const output = document.getElementById("even-checker-output");
  output.innerText = `It is ${input.value % 2 === 0} that ${input.value} is even`
 }

 function doubler() {
    const input = document.getElementById("doubler-input");
    const output = document.getElementById("doubler-output");
    output.innerText = ` ${input.value} doubled is ${input.value * 2}`
 }

 function average() {
    const input1 = document.getElementById("average-input-1");
    const number1 = Number(input1.value)
    const input2 = document.getElementById("average-input-2");
    const number2 = Number(input2.value)
    const input3 = document.getElementById("average-input-3");
    const number3 = Number(input3.value)
    
    const average = (number1 + number2 + number3)/3
    const output = document.getElementById("average-output");
    output.innerText = `The average of ${number1}, ${number2}, and ${number3} is ${average}`
 }