// 1. String Mirror

const mirrorInput = document.getElementById("mirror-input");
const mirrorOutput = document.getElementById("mirror-output");
const mirrorSubmit = document.querySelector("#mirror-form button");

mirrorSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  mirrorOutput.textContent = mirrorInput.value;
});

// 2. String Uppercaser

const uppercaserInput = document.getElementById("uppercaser-input");
const uppercaserOutput = document.getElementById("uppercaser-output");
const uppercaserSubmit = document.querySelector("#uppercaser-form button");

uppercaserSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  uppercaserOutput.textContent = uppercaserInput.value.toUpperCase();
});

// 3. Palindrome Detector

const palindromeInput = document.getElementById("palindrome-input");
const palindromeOutput = document.getElementById("palindrome-output");
const palindromeSubmit = document.querySelector("#palindrome-form button");

const isPalindrome = (value) => {
  for (let i = 0; i < Math.floor(value.length / 2); i += 1) {
    if (value[i] !== value[value.length - i - 1]) {
      return false;
    }
  }

  return true;
};

palindromeSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const value = palindromeInput.value;
  palindromeOutput.textContent = `It is ${isPalindrome(value)} that ${value} is a palindrome`;
});

// 4. Even Checker

const evenCheckerInput = document.getElementById("even-checker-input");
const evenCheckerOutput = document.getElementById("even-checker-output");
const evenCheckerSubmit = document.querySelector("#even-checker-form button");

evenCheckerSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const value = evenCheckerInput.value;
  evenCheckerOutput.textContent = `It is ${value % 2 === 0} that ${value} is even`;
});

// 5. Number Doubler

const numberDoublerInput = document.getElementById("doubler-input");
const numberDoublerOutput = document.getElementById("doubler-output");
const numberDoublerSubmit = document.querySelector("#doubler-form button");

numberDoublerSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const value = numberDoublerInput.value;
  numberDoublerOutput.textContent = `${value} doubled is ${value * 2}`;
});

// 6. Average of Three Numbers

const averageInput1 = document.getElementById("average-input-1");
const averageInput2 = document.getElementById("average-input-2");
const averageInput3 = document.getElementById("average-input-3");
const averageOutput = document.getElementById("average-output");
const averageSubmit = document.querySelector("#average-form button");

averageSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  let averageValue1 = Number(averageInput1.value);
  let averageValue2 = Number(averageInput2.value);
  let averageValue3 = Number(averageInput3.value);
  const average = (averageValue1 + averageValue2 + averageValue3) / 3;
  averageOutput.textContent = `The average of ${averageValue1}, ${averageValue2}, and ${averageValue3} is ${average}`;
});

// Bonus: Vowel Remover

const vowelInput = document.getElementById("vowel-remover-input");
const vowelCheckbox = document.getElementById("y-is-vowel-checkbox");
const vowelOutput = document.getElementById("vowel-remover-output");
const vowelSubmit = document.querySelector("#vowel-remover-form button");

vowelSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  const yIsVowel = vowelCheckbox.checked;
  const value = vowelInput.value;

  const result = yIsVowel 
    ? value.replace(/a|e|i|o|u|y/gi, "")
    : value.replace(/a|e|i|o|u/gi, "");

  vowelOutput.textContent = result;
});
