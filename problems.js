function stringMirror(){
    const input =document.getElementById('mirror-input')
    const text = input.value
    const output = document.getElementById('mirror-output')
    output.textContent = text
}
function upperCase(){
    const input =document.getElementById('uppercaser-input')
    const text = input.value
    const output = document.getElementById('uppercaser-output')
    output.textContent = text.toUpperCase()
}

function stringPanlinDrome(){
    const input =document.getElementById('palindrome-input')
    let text = input.value
    const output = document.getElementById('palindrome-output')
    let string= ""
    for(let i = text.length-1;i >=0; i--){
        string+= text[i]
    }
    if(text === string){
        output.textContent = `It is true that ${string} is a palindrome`
    }else{
        output.textContent = `It is false that ${string} is a palindrome`
    }

}
function eveNum(){
    const input =document.getElementById('even-checker-input')
    const text = input.value
    const output = document.getElementById('even-checker-output')
    const num = text
    if(text % 2 === 0){
        output.textContent =`It is true that ${num} is a palindrome`
    }else{
        output.textContent =`It is false that ${num} is a palindrome`
    }

}
function doublerNum() {
    const input =document.getElementById('doubler-input')
    const text = input.value
    const output = document.getElementById('doubler-output')
    let doubler = text
     if(text % doubler === 0){
        output.textContent = `${text} doubled is ${doubler * 2}`
     }
}
function averageTotal(){
    const input =document.getElementById('average-input-2','average-input-1', 'average-input-3')
    // const input =document.getElementById('average-input-1')
    // const input =document.getElementById('average-input-3')
    let text = input.value
    const output = document.getElementById('average-output')
    let average = text /3 
   
        output.textContent =`The average of ${text}, ${text}, and ${text} is ${average}`
    
    
}