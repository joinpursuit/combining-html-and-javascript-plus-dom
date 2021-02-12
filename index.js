const stringMirror = () => {
  const userInput = document.querySelector("#mirror-input").value;
  const targetElement = document.querySelector("#mirror-output");
  targetElement.innerText = userInput;
};

const stringUppercaser = () => {
  const userInput = document.querySelector("#uppercaser-input").value;
  const targetElement = document.querySelector("#uppercaser-output");
  targetElement.innerText = userInput.toUpperCase();
};

const palindromeDetector = () => {
  // const userInput = document.querySelector("#palindrome-input").value;
  // const targetElement = document.querySelector("#palindrome-output");
  // const userInputArr = userInput.split(" ")
  // targetElement.innerText = userInputArr;
};

const evenChecker = () => {
  const userInput = document.querySelector("#even-checker-input").value;
  const targetElement = document.querySelector("#even-checker-output");
  return userInput % 2 === 0
    ? (targetElement.innerText = `It is true that ${userInput} is even`)
    : (targetElement.innerText = `It is false that ${userInput} is even`);
};
