const displayStr = () => {
  const input = document.querySelector("#mirror-input");
  const p = document.getElementById("mirror-output");
  p.innerText = input.value;
};

const displayUpperCase = () => {
  const input = document.getElementById("uppercaser-input");
  const p = document.getElementById("uppercaser-output");
  p.innerText = input.value.toUpperCase();
};

const palChecker = () => {
  const input = document.getElementById("palindrome-input");
  const p = document.getElementById("palindrome-output");
  let i = 0;
  let j = input.value.length - 1;
  while (i < j) {
    if (input.value[i] !== input.value[j]) {
      p.innerText = `It is false that ${input.value} is a palindrome`;
      return;
    }
    i++;
    j--;
  }
  p.innerText = `It is true that ${input.value} is a palindrome`;
};

const evenChecker = () => {
  const input = document.getElementById("even-checker-input");
  const p = document.getElementById("even-checker-output");
  if (input.value % 2 === 0) {
    p.innerText = `It is true that ${input.value} is even`;
    return;
  }
  p.innerText = `It is false that ${input.value} is even`;
  return;
};

const doubleNum = () => {
  const input = document.getElementById("doubler-input");
  const p = document.getElementById("doubler-output");
  doubled = input.value * 2;
  p.innerText = `${input.value} doubled is ${doubled}`;
};

const getAverage = () => {
  const num1 = Number(document.getElementById("average-input-1").value);
  const num2 = Number(document.getElementById("average-input-2").value);
  const num3 = Number(document.getElementById("average-input-3").value);
  const p = document.getElementById("average-output");
  const average = (num1 + num2 + num3) / 3;
  p.innerText = `The average of ${num1}, ${num2}, and ${num3} is ${average}`;
};

const remVowels = () => {
  const input = document.getElementById("vowel-remover-input");
  const yVowel = document.getElementById("y-is-vowel-checkbox");
  const p = document.getElementById("vowel-remover-output");
  const vowels = "aeiouAEIOU";
  const y = "yY";
  let newStr = "";
  let newStr1 = ""
  for (const char of input.value) {
    if (!vowels.includes(char)) {
      newStr += char;
    }
  }
  if (yVowel.checked) {
    for (const char of newStr) {
      if (!y.includes(char)) {
        newStr1 += char;
      }
    }
    p.innerText = newStr1;
    return;
  }
  p.innerText = newStr;
};
