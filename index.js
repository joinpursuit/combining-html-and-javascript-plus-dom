function newInput() {
  let input = document.getElementById('mirror-input').value;
  let output = document.getElementById('mirror-output');
  output.innerText = input;
}

function makeUpperCaser() {
  let input = document.getElementById('uppercaser-input').value;
  let output = document.getElementById('uppercaser-output');
  output.innerText = input.toUpperCase();
}

function getPalindrome() {
    const input = document.getElementById("palindrome-input").value;
    const p = document.getElementById("palindrome-output");
    const arr = input.split('');
    let answer = arr.every((el, i) => el === input[input.length -1 -i]);
    p.innerText = `It is ${answer} that ${input} is a palindrome`;
}

function getEven() {
    const input = document.getElementById("even-checker-input").value;
    const p = document.getElementById("even-checker-output");
    let answer = input % 2 === 0;
    p.innerText = `It is ${answer} that ${input} is even`;
}

function getDouble() {
    const input = Number(document.getElementById("doubler-input").value);
    const p = document.getElementById("doubler-output");
    let answer = input * 2
    p.innerText = `${input} doubled is ${answer}`
}
function numsAverage() {
    const input1 = Number(document.getElementById("average-input-1").value);
    const input2 = Number(document.getElementById("average-input-2").value);
    const input3 = Number(document.getElementById("average-input-3").value);
    const p = document.getElementById("average-output");
    let answer = (input1 + input2 + input3) / 3;
    p.innerText = `The average of ${input1}, ${input2}, and ${input3} is ${answer}`
}

