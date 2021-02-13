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
    const input = document.querySelector('#palindrome-input').value;
    const p = document.querySelector('#palindrome-output');
    const charArr = input.split('');
    const trueFalse;
    for (let c of charArr) {
        if(c !== charArr.pop()){
            trueFalse = false;
        }
    }
    trueFalse = true;
   
    p.innerText = `It is ${trueFalse} that ${input} is a palindrome`;
}