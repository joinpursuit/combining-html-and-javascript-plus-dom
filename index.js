const mirror = () => {
  let input = document.getElementById("mirror-input");
  let inputValue = input.value;
  let output = document.getElementById("mirror-output");
  output.innerText = inputValue;
};

const uppercase = () => {
  let input = document.getElementById("uppercaser-input");
  let inputValue = input.value;
  let output = document.getElementById("uppercaser-output");
  output.innerText = inputValue.toUpperCase();
};

const palindrome = () => {
  let input = document.getElementById("palindrome-input");
  let inputValue = input.value;
  let output = document.getElementById("palindrome-output");
  let str = "";
  for (let i = inputValue.length - 1; i >= 0; i--) {
    str += inputValue[i];
  }
  if (str === inputValue) {
    output.innerText = `It is ${true} that ${inputValue} is a palindrome.`;
  } else {
    output.innerText = `It is ${false} that ${inputValue} is a palindrome.`;
  }
};

const even = () => {
  let input = document.getElementById("even-checker-input");
  let inputValue = input.value;
  let output = document.getElementById("even-checker-output");
  if (inputValue % 2 === 0) {
    output.innerText = `It is ${true} that ${inputValue} is even.`;
  } else {
    output.innerText = `It is ${false} that ${inputValue} is even.`;
  }
};

const doubler = () => {
  let input = document.getElementById("doubler-input");
  let inputValue = input.value;
  let output = document.getElementById("doubler-output");
  output.innerText = `${inputValue} doubled is ${inputValue * 2}.`;
};

const average = () => {
  let input1 = document.getElementById("average-input-1");
  let input2 = document.getElementById("average-input-2");
  let input3 = document.getElementById("average-input-3");
  let inputValue1 = Number(input1.value);
  let inputValue2 = Number(input2.value);
  let inputValue3 = Number(input3.value);
  let avg = (inputValue1 + inputValue2 + inputValue3) / 3;
  let output = document.getElementById("average-output");
  output.innerText = `The average of ${inputValue1}, ${inputValue2}, and ${inputValue3} is ${avg}.`;
};

const remover = () => {
  let inputText = document.getElementById("vowel-remover-input");
  let inputCheck = document.getElementById("y-is-vowel-checkbox");
  let inputTextValue = inputText.value;
  let output = document.getElementById("vowel-remover-output");
  let vowals = ["A","a","E","e","I","i","O","o","U","u"]
  let vowalsPlus = ["A","a","E","e","I","i","O","o","U","u","Y","y"]
  let arr = inputTextValue.split('')
  let newArr = []
  for (let i = 0; i < arr.length; i++){
  if (inputCheck.checked) {
   if (!vowalsPlus.includes(arr[i])) {
    newArr.push(arr[i])
   }
  }
  else if (!vowals.includes(arr[i])) {
    newArr.push(arr[i])
  }
} 
output.innerText = newArr.join('')
};
