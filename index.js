const displayString = () => {
    const input = document.querySelector("#mirror-input").value;
    const output = document.querySelector("#mirror-output");
    output.innerText = `${input}`;
}

const displayUppercase = () => {
    const input = document.querySelector("#uppercaser-input").value;
    const output = document.querySelector("#uppercaser-output");
    output.innerText = `${input.toUpperCase()}`;
}

const displayPalindrome = () => {
    const input = document.querySelector("#palindrome-input").value;
    const output = document.querySelector("#palindrome-output");
    while (input.length > 0) {
        slipt @ charachter
        array.reverse
        join
        if join === input displayPalindrome
        else, not
    }
    for ()
    
    output.innerText = `${input}`;
}



// const sumOfNum = () => {
//     const num1 = Number(document.getElementById("num1").value);
//     const num2 = Number(document.getElementById("num2").value);
//     const p = document.getElementById("sum-equals");
//     p.innerText = num1+ num2
// }