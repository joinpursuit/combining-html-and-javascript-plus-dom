const stringMirror = () => {
    const input = document.getElementById("mirror-input");
    const p = document.getElementById("mirror-output");
    p.innerText = input.value;
}

const stringUpperCase = () => {
    const input = document.getElementById("uppercaser-input").value.toUpperCase();
    const p = document.getElementById("uppercaser-output")
    p.innerText = input
}

const palindromeDetector = () =>{
    const input = document.getElementById("palindrome-input").value
    const p = document.getElementById("palindrome-output")
    const arr = input.split('');
    let answer = arr.every((el, i) => el === input[input.length -1 -i]);
    p.innerText = `It is ${answer} that ${input} is a palindrome`;
    }