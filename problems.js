function mirrorString(){
    document
    .getElementById("mirror-output")
    .textContent = document
    .getElementById("mirror-input")
    .value;
}

function upperCase(){    
    document
    .getElementById("uppercaser-output")
    .textContent = document
    .getElementById("uppercaser-input")
    .value
    .toUpperCase();
}

function isPalindrome(){
    let str = String(document
        .getElementById("palindrome-input")
        .value);

    let isPalin = [...str].every((chr, ind) => chr === str[str.length-1-ind]);
    
    document
    .getElementById("palindrome-output")
    .textContent = `It is ${isPalin} that ${str} is a palindrome.`    
}

function isEven(){
    let num = Number(document
        .getElementById("even-checker-input")
        .value);

    document
    .getElementById("even-checker-output")
    .textContent = `It is ${num%2 === 0} that ${num} is even.`
    
}

function doubleIt(){
    let num = Number(document
        .getElementById("doubler-input")
        .value);
    
        document
        .getElementById("doubler-output")
        .textContent = `${num} doubled is ${num * 2}`
}

function averageIt(){
    let num1 = Number(document
        .getElementById("average-input-1")
        .value);
    let num2 = Number(document
        .getElementById("average-input-2")
        .value);
    let num3 = Number(document
        .getElementById("average-input-3")
        .value);

    
    document
    .getElementById("average-output")
    .textContent = `The average of ${num1}, ${num2}, and ${num3} is ${(num1+num2+num3)/3}`;
}


function deEmvowelY(str) {
    return str
    .split("")
    .filter(el => {
        switch(true){
            case el === 'a' || el === 'A':
                return false;
            case el === 'e' || el === 'E':
                return false;
            case el === 'i' || el === 'I':
                return false;
            case el === 'o' || el === 'O':
                return false;
            case el === 'u' || el === 'U':
                return false;
            case el === 'y' || el === 'Y':
                return false;
            default:
                return true;
        }
    })
    .join("")
}


function deEmvowel(str) {
    return str
    .split("")
    .filter(el => {
        switch(true){
            case el === 'a' || el === 'A':
                return false;
            case el === 'e' || el === 'E':
                return false;
            case el === 'i' || el === 'I':
                return false;
            case el === 'o' || el === 'O':
                return false;
            case el === 'u' || el === 'U':
                return false;
            default:
                return true;
        }
    })
    .join("")
}

function removeVowels(){
    if(document.getElementById("y-is-vowel-checkbox").checked){
        let str = String(document
            .getElementById("vowel-remover-input")
            .value);

        
        document
        .getElementById("vowel-remover-output")
        .textContent = deEmvowelY(str)
    }else{
        let str = String(document
            .getElementById("vowel-remover-input")
            .value);

        
        document
        .getElementById("vowel-remover-output")
        .textContent = deEmvowel(str)
    }
}
