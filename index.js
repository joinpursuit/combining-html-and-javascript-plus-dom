const mirrorFunction = () => {
    const input = document.getElementById("mirror-input").value;
    const output = document.getElementById("mirror-output");
    output.innerText = input; 
}

const uppercaserFunction = () => {
    const input = document.getElementById("uppercaser-input").value;
    const output = document.getElementById("uppercaser-output");
    output.innerText = input.toUpperCase();
}

const palindromeFunction = () => {
    const input = document.getElementById("palindrome-input").value;
    const output = document.getElementById("palindrome-output");
    const arr = input.split('');
    let answer = arr.every((el, i) => el === input[input.length -1 -i]);
    output.innerText = `It is ${answer} that ${input} is a palindrome`;
}

const evenCheckerFunction = () => {
    const input = document.getElementById("even-checker-input").value;
    const output = document.getElementById("even-checker-output");
    let answer = input % 2 === 0;
    output.innerText = `It is ${answer} that ${input} is even`;
}

const numberDoublerFunction = () => {
    const input = document.getElementById("doubler-input").value;
    const output = document.getElementById("doubler-output");
    let answer = input * 2
    output.innerText = `${input} doubled is ${answer}`
}

const averageFunction = () => {
    const input1 = Number(document.getElementById("average-input-1").value);
    const input2 = Number(document.getElementById("average-input-2").value);
    const input3 = Number(document.getElementById("average-input-3").value);
    const output = document.getElementById("average-output");
    let average = (input1 + input2 + input3) / 3;
    output.innerText = `The average of ${input1}, ${input2}, and ${input3} is ${average}`
}

const vowelRemover = () => {
    let vowels = "aAeEiIoOuU"
    let output = ""
    const input = document.getElementById('vowel-remover-input').value;
    const includesY = document.getElementById('y-is-vowel-checkbox').checked;
    const p = document.getElementById('vowel-remover-output');

    if (includesY) {
        vowels += "yY"
    }

    for (let letter of input) {
        if(vowels.includes(letter)) {
            output += ''
        } else {
            output += letter
        }
    }
    p.innerText = output;
}