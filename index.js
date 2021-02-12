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
  const input = document.querySelector("#palindrome-input").value;
  const output = document.querySelector("#palindrome-output");
  let palindrome = input.split("").reverse().join("");
  console.log(palindrome)
  if (palindrome === input) {
    output.innerText = `It is true that ${input} is a palindrome.`;
  } else {
    output.innerText = `It is false that ${input} is a palindrome.`;
  }
};
