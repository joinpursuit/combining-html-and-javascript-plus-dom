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
    







