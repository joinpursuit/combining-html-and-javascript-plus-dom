const mirrorStr = () => {
  const inputTag = document.querySelector("#mirror-input");
  const pTag = document.querySelector("#mirror-output");
  pTag.innerText = inputTag.value;
};

const stringUpperCaser = () => {
  const upperCaserInput = document.querySelector("#uppercaser-input").value;
  const upperCaserOutput = document.querySelector("#uppercaser-output");
  upperCaserOutput.innerText = upperCaserInput.toUpperCase();
};

const palindromeDetector = () => {
  const userInput = document.querySelector("#palindrome-input").value;
  let pTag = document.querySelector("#palindrome-output");
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] !== userInput.slice(-1 - i)[0]) {
      pTag.innerText = `It is false that ${userInput} is a palindrome`;
      return;
    }
  }
  pTag.innerText = `It is true that ${userInput} is a palindrome`;
};

const evenChecker = () => {
  let userNum = document.getElementById("even-checker-input").value;
  let isEven = document.getElementById("even-checker-output");

  if (userNum % 2 === 0) {
    isEven.innerText = `It is true that ${userNum} is even`;
  } else {
    isEven.innerText = `It is false that ${userNum} is even`;
  }
};
