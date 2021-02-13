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
    console.log(`It is ${answer} that ${input} is even`);
}

const numDoubler = () => {
    console.log(`${input} doubled is ${doubledVal}`);
}

const averageOfThreeNums = () => {
    console.log(`The average of ${numberOne}, ${numberTwo}, and ${numberThree} 
        is ${average}`);
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
