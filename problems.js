function stringMirror () {
    
    //Get input from DOM
    const input = document.getElementById('mirror-input')
    //get value from the input tag
    let value = input.value
    //get mirror-output from DOM
    let output = document.getElementById('mirror-output')
    // change the textContent of mirror-output 
    output.textContent = value
}



function upperCase() {
    
    const input = document.getElementById('uppercaser-input')
    let value = input.value
    let output = document.getElementById('uppercaser-output')
    output.textContent = value.toUpperCase()
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

function evenChecker() {
  const input = document.getElementById("even-checker-input");
  let number = input.value;
  let output = document.getElementById("even-checker-output");
  if (isNaN(number)) {
    output.textContent = "Please enter a number";
  } else {
    if (number % 2 === 0) {
      output.textContent = `It is true that ${number} is even`;
    } else {
      output.textContent = `It is false that ${number} is even`;
    }
  }
}


function doubleIt() {
  const input = document.getElementById("doubler-input");
  let number = input.value;
  let output = document.getElementById("doubler-output");
  if (isNaN(number)) {
    output.textContent = "Please enter a number";
  } else {
    doubleVal = number * 2;

    output.textContent = `${number} doubled is ${doubleVal}`;
  }
}

function averageIt() {
  const input1 = document.getElementById("average-input-1");
  const input2 = document.getElementById("average-input-2");
  const input3 = document.getElementById("average-input-3");
  let number1 = parseInt(input1.value);
  let number2 = parseInt(input2.value);
  let number3 = parseInt(input3.value);
  let output = document.getElementById("average-output");
  if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
    output.textContent = "Please enter a number";
  } else {
    total = (number1 + number2 + number3);
    average = total / 3;

    output.textContent = `The average of ${number1}, ${number2}, and ${number3} is ${average}`;
  }
}