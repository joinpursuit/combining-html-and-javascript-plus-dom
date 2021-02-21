function stringMirror() {
  //get input from DOM
  const input = document.getElementById("mirror-input");
  //get value from the input tag
  const text = input.value;
  //get mirror-output element from DOM
  const output = document.getElementById("mirror-output");
  //change the textContent fof mirro-output to match input value
  output.textContent = text;
  //lets change the textContent of
}

function stringUppercaser() {
  const input = document.getElementById("uppercaser-input");
  const text = input.value;
  const output = document.getElementById("uppercaser-output");
  output.textContent = text.toUpperCase();
}

const palindromeDetector = () => {
  const input = document.getElementById("palindrome-input");
  const text = input.value;
  const output = document.getElementById("palindrome-output");

  let reversedText = text.split("").reverse("").join("");
  if (text === reversedText) {
    output.textContent = `It is true that ${text} is a palindrome`;
  } else {
    output.textContent = `It is false that ${text} is a palindrome`;
  }
};

function evenChecker() {
  const input = document.getElementById("even-checker-input");
  const output = document.getElementById("even-checker-output");
  const num = input.value;
  if (num % 2 === 0) {
    output.textContent = `It is true that ${num} is even`;
  } else {
    output.textContent = `It is false that ${num} is even`;
  }
}
function numberDoubler() {
    const input = document.getElementById("doubler-input")
    const output = document.getElementById("doubler-output")
    const num = input.value
    const doubled = num * 2 

    output.textContent = `${num} doubled is ${doubled}`

}
function averageThreeNumbers() {
const num1 = document.getElementById("average-input-1").value
const num2 = document.getElementById("average-input-2").value
const num3 = document.getElementById("average-input-3").value
const output = document.getElementById("average-output")

const avg = ((num1 + num2 + num3)/3) 

output.textContent = `The average of ${num1}, ${num2}, and ${num3} is ${avg}`


    
}

function vowelRemover() {
  //get text input DOM element
  const textInput = document.getElementById("vowel-remover-input");
  // get checkbox DOM element
  const checkbox = document.getElementById("y-is-vowel-checkbox");

  // get teh text from the input DOM element!
  const text = textInput.value; //string datatype
  //see if checkbox is checked!
  const isChecked = checkbox.checked; //boolean datatype

  //remove all the vowels from text!
  removeVowels(text, isChecked);
  //add vowel-removed string to p#vowel-remover-input
  const output = document.getElementById("vowel-remover-output");
  output.innerText = removeVowels(text, isChecked);
}

/**
 *
 * @param {string} text - the text to remove vowels from
 * @param {boolean} yIsVowel - determines whether y is a vowel
 * @returns {string} - vowel-less string!
 */
function removeVowels(text, yIsVowel) {
  // make an array of vowels: lower and uppercase vowels; dont include y yet
  const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  //if yIsVowel, push y and Y
  if (yIsVowel) {
    vowels.push("y", "Y");
  }
  console.log(`The vowels are:${vowels}`);
  ///create new areray to store otuput characters
  const arr = [];

  // iterate through text
  for (let char of text) {
    // for each character,, check if that character is not a vowel!
    if (!vowels.includes(char)) {
      arr.push(char);
    }
    //push it into our array
  }
  // join our array back into a string
  //return that string
  return arr.join("");
}
