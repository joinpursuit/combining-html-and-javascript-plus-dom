const displayString = () => {
  const input = document.querySelector("#mirror-input").value;
  const output = document.querySelector("#mirror-output");
  output.innerText = `${input}`;
};

const displayUppercase = () => {
  const input = document.querySelector("#uppercaser-input").value;
  const output = document.querySelector("#uppercaser-output");
  output.innerText = `${input.toUpperCase()}`;
};

const displayPalindrome = () => {
  const input = document
    .querySelector("#palindrome-input")
    .value.toLowerCase()
    .split("")
    .join("");
  const output = document.querySelector("#palindrome-output");
  let i = 0;
  let j = input.length - 1;
  while (i < j) {
    if (input[i] !== input[j]) {
      return (output.innerText = `It is false that ${input} is a palindrome.`);
    }
    i++;
    j--;
  }
  return (output.innerText = `It is true that ${input} is a palindrome.`);
};

const checkEvenNum = () => {
  const input = document.querySelector("#even-checker-input").value;
  const output = document.querySelector("#even-checker-output");
  if (input % 2 === 0) {
    output.innerText = `It is true that ${input} is even`;
  } else {
    output.innerText = `It is false that ${input} is even`;
  }
};

const getDoubleNum = () => {
  const input = document.querySelector("#doubler-input").value;
  const output = document.querySelector("#doubler-output");
  const numDub = input * 2;
  output.innerText = `${input} doubled is ${numDub}`;
};

const getThreeNumAvg = () => {
  const numOne = Number(document.querySelector("#average-input-1").value);
  const numTwo = Number(document.querySelector("#average-input-2").value);
  const numThree = Number(document.querySelector("#average-input-3").value);
  const output = document.querySelector("#average-output");
  const avgThreeNum = (numOne + numTwo + numThree) / 3;
  output.innerText = `The average of ${numOne}, ${numTwo}, and ${numThree} is ${avgThreeNum}`;
};

const removeVowel = () => {
  const string = document.querySelector("#vowel-remover-input").value;
  const checkbox = document.querySelector("#y-is-vowel-checkbox");
  const output = document.querySelector("#vowel-remover-output");
  if (checkbox.checked) {
      output.innerText = string.replace(/a|e|i|o|u|y/gi, "");
  } else {
    output.innerText = string.replace(/a|e|i|o|u/gi, "");
  }
};
