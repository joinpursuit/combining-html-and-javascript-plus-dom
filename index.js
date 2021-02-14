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

// const displayPalindrome = () => {
//   const input = document.querySelector("#palindrome-input").value;
//   const output = document.querySelector("#palindrome-output");
//   let palindrome = input.split("").reverse().join("");
//   console.log(palindrome)
//   if (palindrome === input) {
//     output.innerText = `It is true that ${input} is a palindrome.`;
//   } else {
//     output.innerText = `It is false that ${input} is a palindrome.`;
//   }
// };

const displayPalindrome = () => {
  const input = document.querySelector("#palindrome-input").value.toLowerCase().split("").join("");
  const output = document.querySelector("#palindrome-output");
  let i = 0;
  let j = input.length - 1;
  console.log(input);
  while (i < j) {
    if (input[i] !== input[j]) {
      return output.innerText = `It is false that ${input} is a palindrome.`
    }
    i++;
    j--;
  }
  return output.innerText = `It is true that ${input} is a palindrome.`
};

const checkEvenNum = () => {
  const input = document.querySelector("#even-checker-input").value;
  const output = document.querySelector("#even-checker-output");
  if (input % 2 === 0) {
    output.innerText = `It is true that ${input} is even`
  } else {
    output.innerText = `It is false that ${input} is even`
  }
}

const getDoubledValue = () => {
  const input = document.querySelector("#doubler-input").value;
  const output = document.querySelector("#doubler-output");
  output.innerText = `${input} doubled is ${input * 2}`
}

const averageSum = () => {
  const num1 = Number(document.querySelector("#average-input-1").value);
  const num2 = Number(document.querySelector("#average-input-2").value);
  const num3 = Number(document.querySelector("#average-input-3").value);
  const output = document.querySelector("#average-output");
  const average = Math.floor((num1 + num2 + num3) / 3)
  output.innerText = `The average of ${num1}, ${num2}, and ${num3} is ${average}`
}

const removeVowels = () => {
  const userString = document.querySelector("#vowel-remover-input").value;
  const output = document.querySelector("#vowel-remover-output");
  const checkedY = document.querySelector("#y-is-vowel-checkbox");
  const vowelsNoY = userString.replace(/a|e|i|o|u/gi, "")
  const yIsAVowel = userString.replace(/a|e|i|o|u|y/gi, "")
  if (checkedY.checked) {
    output.innerText = yIsAVowel
  } else {
    output.innerText = vowelsNoY
  }
}


