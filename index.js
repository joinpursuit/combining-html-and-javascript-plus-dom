const userInput = () => {
const input = document.getElementById("mirror-input").value;
const p = document.getElementById("mirror-output");
p.innerText = input;
}

const upperCase = () => {
const input = document.getElementById("uppercaser-input").value;
const p = document.getElementById("uppercaser-output");
p.innerText = input.toUpperCase();
}

const palindrome = () => {
    const input = document.getElementById("palindrome-input").value;
    const p = document.getElementById("palindrome-output");
    const arr = input.split('');
    let answer = arr.every((el, i) => el === input[input.length -1 -i]);
    p.innerText = `It is ${answer} that ${input} is a palindrome`;
    }
