const mirrorString = () => {
  const text = document.getElementById("mirror-output");
  const input = document.getElementById("mirror-input");
  text.innerText = input.value;
};

const upperCaseIt = () => {
  const output = document.getElementById("uppercaser-output");
  const input = document.getElementById("uppercaser-input");
  output.innerText = input.value.toUpperCase();
};

const palindromeDetector = () => {
  const output = document.getElementById("palindrome-output");
  const input = document.getElementById("palindrome-input").value;
  console.log(input)
  //debugger
  for (let i = 0; i < input.length/2; i++) {
    let frontLetter = input[i];
    let endLetter = input[input.length - i - 1];
    if (frontLetter !== endLetter) {
      output.innerText = `It is false that ${input} is a palindrome`;
      return;
    }
  }
  output.innerText = `It is true that ${input} is a palindrome`;
  return;
};

const evenChecker = () => {
  const output = document.getElementById("even-checker-output");
  const input = document.getElementById("even-checker-input");
  if (input.value % 2 === 0) {
    output.innerText = `It is true that ${input.value} is even`;
    return;
  }
  output.innerText = `It is false that ${input.value} is even`;
  return;
};

const doubler =() =>{
    const output = document.getElementById("doubler-output")
    const input = document.getElementById("doubler-input")
    output.innerText = `${input.value} doubled is ${input.value * 2}`
}

const average =() =>{
    const output = document.getElementById("average-output")
    const inputOne = Number(document.getElementById("average-input-1").value)
    const inputTwo = Number(document.getElementById("average-input-2").value)
    const inputThree = Number(document.getElementById("average-input-3").value)
    let result =  (inputOne + inputTwo + inputThree)/3 //Number(inputOne.value + inputTwo.value +inputThree.value)/3
    //console.log(result)
    //debugger
    output.innerText =`The average of ${inputOne}, ${inputTwo}, and ${inputThree} is ${result}`

} 