function stringMirror() {
  let input = document.getElementById("mirror-input");
  let p = document.getElementById("mirror-output");
  p.innerText = input.value;
}

const stringUppercaser = () => {
  const input = document.querySelector("#uppercaser-input");
  const p = document.querySelector("#uppercaser-output");
  p.innerText = input.value.toUpperCase();
};
function palindromeDetector() {
  let input = document.getElementById("palindrome-input");
  let p = document.getElementById("palindrome-output");

  let strArr = input.value.split("");

  let arrReverse = strArr.reverse().join("");

  if (input.value === arrReverse) {
    p.innerText = `It is true that ${input.value} is a palindrome`;
  } else if (strArr !== arrReverse) {
    p.innerText = `It is false that ${input.value} is a palindrome`;
  }
}

const evenChecker = () => {
  const input = Number(document.querySelector("#even-checker-input").value);
  const p = document.querySelector("#even-checker-output");

  if (input % 2 === 0) {
    p.innerText = `It is true that ${input} is even`;
  } else {
    p.innerText = `It is false that ${input} is even`;
  }
};

const numberDoubler = () => {
  const input = Number(document.getElementById("doubler-input").value);
  const p = document.getElementById("doubler-output");
  let doubledVal = input * 2;
  p.innerText = `${input} doubled is ${doubledVal}`;
};

const averageOfThreeNumbers = () => {
  const numberOne = Number(document.querySelector("#average-input-1").value)
  const numberTwo = Number(document.querySelector("#average-input-2").value)
  const numberThree = Number(document.querySelector("#average-input-3").value)
  const p = document.querySelector("#average-output")

  const average = (numberOne + numberTwo + numberThree) / 3
  p.innerText = `The average of ${numberOne}, ${numberTwo}, and ${numberThree} is ${average}`
}