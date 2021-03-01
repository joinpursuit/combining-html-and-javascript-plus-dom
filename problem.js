const stringMirror = () => {
    // get input from DOM
    const input = document.getElementById('mirror-input');
    // get value from the input tag
    const text = input.value
    // get mirror output from DOM
    const output = document.getElementById('mirror-output');
    output.textContent = text
    // change the textContent of mirror-output to match input value
}


const stringUpperCaser = () => {
    const input = document.getElementById('uppercaser-input');
    const text = input.value
    const output = document.getElementById('uppercaser-output');
    output.textContent = text.toUpperCase();
}

const isPalindrome = () => {
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


const isEvenChecker = () => {
    const input = document.getElementById('even-checker-input');
    const number = input.value;
    const output = document.getElementById('even-checker-output');

    if (number % 2 === 0 ) {
        output.textContent = `It is true that ${number} is even`
    } else
    output.textContent = `It is false that ${number} is even`
}

const doubler = () => {
    const input = document.getElementById('doubler-input')
    const number = input.value;
    const output = document.getElementById('doubler-output');

    output.textContent = `${number} doubled is ${number * 2}`
}

const average = () => {
    const num1 = parseInt(document.getElementById('average-input-1').value);
    const num2 = parseInt(document.getElementById('average-input-2').value);
    const num3 = parseInt(document.getElementById('average-input-3').value);

    const output = document.getElementById('average-output');

    output.textContent = `The average of ${num1}, ${num2}, and ${num3} is ${(num1 + num2 + num3) / 3}`
}

const remove = () => {
    let string = document.getElementById("vowel-remover-input").value
    let output = document.getElementById("vowel-remover-output")
    let checkbox = document.getElementById("y-is-vowel-checkbox")
    let vowel = "aeiouyAEIOUY";
    let newStr = "";
    if (checkbox.checked) {
      for (let i = 0; i < string.length; i += 1) {
        if (!vowel.includes(string[i])) {
          newStr = newStr + string[i];
        } else {
          newStr = newStr + ""
        }
      }
    } else {
      let vowelNoY = "aeiouAEIOU";
      for (let i = 0; i < string.length; i += 1) {
        if (!vowelNoY.includes(string[i])) {
          newStr = newStr + string[i];
        } else {
          newStr = newStr + ""
        }
      }
    }
    output.textContent = newStr;
}
