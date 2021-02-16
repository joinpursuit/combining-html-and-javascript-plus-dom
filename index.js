const mirrorString = () => {
  const input = document.querySelector("#mirror-input");
  const p = document.getElementById("mirror-output");
  p.innerText = input.value;
};

const upperCaseString = () => {
  const input = document.querySelector("#uppercaser-input");
  const p = document.getElementById("uppercaser-output");
  p.innerText = input.value.toUpperCase();
};

const palindromeDetector = () => {
  const input = document.querySelector("#palindrome-input");
  const p = document.getElementById("palindrome-output");
  p.innerText = input.value;
};

const checkPalindrome = () => {
  const input = document.querySelector("#palindrome-input");
  const p = document.getElementById("palindrome-output");
  const str = input.value;
  // let output = "";
  let revStr = str.split("").reverse("").join("");
  if (str === revStr) {
    p.innerText = `It is true that ${input.value} is a palindrome`;
  } else {
    p.innerText = `It is false that ${input.value} is a palindrome`;
  }
};

const checkEven = () => {
  const input = document.querySelector("#even-checker-input");
  const p = document.getElementById("even-checker-output");
  const num = input.value;
  if (num % 2 === 0) {
    p.innerText = `It is true that ${input.value} is even`;
  } else {
    p.innerText = `It is false that ${input.value} is even`;
  }
};

const doubleNumber = () => {
  const input = Number(document.querySelector("#doubler-input").value);
  const p = document.getElementById("doubler-output");
  p.innerText = `${input} doubled is ${input * 2}`;
};

const displayAverage = () => {
  const input1 = Number(document.querySelector("#average-input-1").value);
  const input2 = Number(document.querySelector("#average-input-2").value);
  const input3 = Number(document.querySelector("#average-input-3").value);
  const p = document.getElementById("average-output");
  const avg = ((input1 + input2 + input3 )/ 3);
  // debugger;
  p.innerText = `The average of ${input1}, ${input2}, and ${input3} is ${avg}`;
};
