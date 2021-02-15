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

const liveevil = () => {
    let input = document.getElementById('palindrome-input').value    
    let output = document.getElementById('palindrome-output')        
    let arr = []
    
    let test;
    const reverse = () => {
        for (let i = input.length - 1; i >= 0; i--) {
            arr.push(input[i])                                                      
        }   
        let evil_input = arr.join('')
        console.log(evil_input)
        return evil_input
    }
    const evil_input = reverse()
    
    if (input === evil_input) {
        test = 'true';
        output.innerHTML += `It is ${test} that ${input} is a palindrome`
            
    } else {
        test = false;
        output.textContent = `It is ${test} that ${input} is a palindrome`          
        console.log(output)
    }         
}
    
const oneOrTwo = () => {
    let input = document.getElementById('even-checker-input').value
    let output = document.getElementById('even-checker-output')
    let test;
    if (input % 2 === 0) {        
        test = 'true'
        output.innerHTML = `It is ${test} that ${input} is even`
    } else {
        test = 'false'
        output.innerHTML = `It is ${test} that ${input} is even`
    }
}

const doubleOrNothin = () => {
    let input = document.getElementById('doubler-input').value
    let output = document.getElementById('doubler-output')

    const double = input * 2;
    output.innerHTML = `${input} doubled is ${double}`
}





