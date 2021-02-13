const replaceWord = () => {
    const input = document.querySelector('#mirror-input').value;
    const p = document.querySelector('#mirror-output');
    p.innerText = input;
}

const uppercaserWord = () => {
    const input = document.querySelector('#uppercaser-input').value;
    const p = document.querySelector('#uppercaser-output');
    // upperCaseWord = input.toUppercase();
    p.innerText = input.toUpperCase();
}

const palindromeWord = () => {
    const input = document.querySelector("#palindrome-input").value;
    const p = document.querySelector("#palindrome-output");
    const arr = input.split('');
    let answer = arr.every((el, i) => el === input[input.length -1 -i]);
    p.innerText = `It is ${answer} that ${input} is a palindrome`;
}

const isEven = () => {
    const input = document.querySelector("#even-checker-input").value;
    const p = document.querySelector("#even-checker-output");
    let answer = input % 2 === 0;
    p.innerText = `It is ${answer} that ${input} is even`;
}

const numDoubler = () => {
    const input = document.querySelector("#doubler-input").value;
    const p = document.querySelector("#doubler-output");
    let doubledVal = input * 2
    p.innerText = `${input} doubled is ${doubledVal}`;
}

const averageOfThreeNums = () => {
    const numberOne = Number(document.querySelector("#average-input-1").value);
    const numberTwo = Number(document.querySelector("#average-input-2").value);
    const numberThree = Number(document.querySelector("#average-input-3").value);
    const p = document.querySelector("#average-output");
    let average = (numberOne + numberTwo + numberThree) / 3;
    p.innerText = `The average of ${numberOne}, ${numberTwo}, and ${numberThree} is ${average}`;
}

const vowelRemover = () => {
    const input = document.querySelector('#vowel-remover-input');
    const isY = document.querySelector('#y-is-vowel-checkbox').checked;
    const p = document.querySelector('#vowel-remover-output');
    const str = input.value;
    let output = '';
    let vowels = '';
    if (isY === false){
        vowels = 'aeiouAEIOU';  
    } else {
        vowels = 'aeiouyAEIOUY';  
    }
    for (const char of str){
        if(vowels.includes(char)){
            output += '';
        } else {
            output += char;
        }
    } 
    p.innerText = output;
}
