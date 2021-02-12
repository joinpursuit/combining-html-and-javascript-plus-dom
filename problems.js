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
    let output = document.getElementById('palindrome-output')
    let string= ""
    for(let i = text.length-1;i >=0; i--){
        string+= text[i]
    }
    if(text === string ){
        output.textContent = `It is true that ${string} is a palindrome`

    }else{
        output.textContent = `It is false that ${string} is a palindrome`
    }

}