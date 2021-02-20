const averageNums = () => {
  let num1 = Number(document.getElementById("average-input-1").value);
  let num2 = Number(document.getElementById("average-input-2").value);
  let num3 = Number(document.getElementById("average-input-3").value);
  let p = document.getElementById("average-output");
  let average = (num1 + num2 + num3) / 3;
  p.innerText = `The average of ${num1}, ${num2}, and ${num3} is ${average}`;
};

const doubleNums = () => {
  let enteredNum = Number(document.getElementById("doubler-input").value);
  let p = document.getElementById("doubler-output");
  let doubledVal = enteredNum * 2;
  p.innerText = `${enteredNum} doubled is ${doubledVal}`;
};

const evenNums = () => {
  let enteredNum = Number(document.getElementById("even-checker-input").value);
  let p = document.getElementById("even-checker-output");
  let evenVal = enteredNum % 2 === 0;
  p.innerText = `It is ${evenVal} that ${enteredNum} is even`;
};

const palindrome = () => {
  let enteredString = document.getElementById("palindrome-input").value;
  let p = document.getElementById("palindrome-output")
  let stringVal = isPalindrome(enteredString)
  p.innerText = `It is ${stringVal} that ${enteredString} is a palindrome`;
};
const isPalindrome = (str) => {
    for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
      return true;
    }
}

const getUpperCase = () => {
  let input = document.getElementById("uppercaser-input").value;
  let p = document.getElementById("uppercaser-output");
  p.innerText = input.toUpperCase();
};

const getMirror = () => {
    let input = document.getElementById("mirror-input").value;
    let p = document.getElementById("mirror-output");
    p.innerText = input
}
