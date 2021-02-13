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
  const userInput = document.querySelector("#palindrome-input").value;
  const targetElement = document.querySelector("#palindrome-output");
  for (char in userInput) {
    if (userInput[char] !== userInput.slice(-1 -char)[0]) {
      targetElement.innerText = `It is false that ${userInput} is a palindrome`
      return
    }
  }
  targetElement.innerText = `It is true that ${userInput} is a palindrome`
};

const evenChecker = () => {
  const userInput = Number(document.querySelector("#even-checker-input").value);
  const targetElement = document.querySelector("#even-checker-output");
  return userInput % 2 === 0
    ? (targetElement.innerText = `It is true that ${userInput} is even`)
    : (targetElement.innerText = `It is false that ${userInput} is even`);
};

const numberDoubler = () => {
    const userInput = Number(document.querySelector("#doubler-input").value);
    const targetElement = document.querySelector("#doubler-output"); 
    targetElement.innerText =  `${userInput} doubled is ${userInput * 2}`;
}

const averageOfThreeNumbers = () => {
    const userInput1 = Number(document.querySelector("#average-input-1").value);
    const userInput2 = Number(document.querySelector("#average-input-2").value);
    const userInput3 = Number(document.querySelector("#average-input-3").value);
    const targetElement = document.querySelector("#average-output");
    let average = (userInput1 + userInput2 + userInput3) / 3
    targetElement.innerText = `The average of ${userInput1}, ${userInput2}, and ${userInput3} is ${average}`
}

const vowelRemover = () => {
  const userInput = document.querySelector("#vowel-remover-input").value;
  const targetElement = document.querySelector("#vowel-remover-output");
  if (document.querySelector("#vowel-remover-input[checked]")) {
    targetElement.innerText = !vowels.includes(userInput)
    return
  } else {
    targetElement.innerText = userInput
  }
}