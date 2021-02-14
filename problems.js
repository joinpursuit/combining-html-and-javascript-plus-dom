const stringMirror = () => {
    let input = document.getElementById('mirror-input')
    let val = input.value
    const output = document.getElementById('mirror-output')
    output.textContent = val
}

const upperCaser = () => {
    let input = document.getElementById('uppercaser-input')
    let val = input.value.toUpperCase()
    const output = document.getElementById('uppercaser-output')
    output.innerHTML = val
}

const live_evil = () => {
    let input = getElementById('palindrome-input')
    let output = getElementById('palindrome-output')
    const inputSplit = input.split(',')

    
    let evil_input = []

    let test = undefined;
    for (let i = input.length-1; i >= 0; i--) {
        evil_input.push(input[i])
    }
    if (inputSplit === evil_input) {
        test = 'true';
       return  output.innerHTML = `It is ${test} that ${input} is a palindrome`;
        
    } else {
        test = 'false';
        return output.innerHtml = `It is ${false} that ${input} is a palindrome`;
        
    }
}






