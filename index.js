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

const evenChecker = () => {
    const input = document.getElementById("even-checker-input").value
    const p = document.getElementById("even-checker-output")
    let answer = input % 2 === 0;
    p.innerText= `It is ${answer} that ${input} is even`;
    }

const numberDoubler = () => {
    const input = document.getElementById("doubler-input").value;
    const p = document.getElementById("doubler-output");
    let answer = input * 2;
    p.innerText = `${input} doubled is ${answer}`;
}

const averageButton = () => {
    const input1 = Number(document.getElementById("average-input-1").value);
    const input2 = Number(document.getElementById("average-input-2").value);
    const input3 = Number(document.getElementById("average-input-3").value);
    const p = document.getElementById("average-output");
    let average = (input1 + input2 + input3) / 3;
    p.innerText = `The average of ${input1}, ${input2}, and ${input3} is ${average}`;
}
