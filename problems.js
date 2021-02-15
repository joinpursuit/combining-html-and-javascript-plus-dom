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
    const text = input.value
    const output = document.getElementById('palindrome-output')
    let string= ""
    for(let i = text.length-1;i >= 0; i--){
        string += text[i]
    }
    if(text === string){
        output.textContent = `It is true that ${text} is a palindrome`
    }else{
        output.textContent = `It is false that ${text} is a palindrome`
    }

}
function eveNum(){
    const input =document.getElementById('even-checker-input')
    const text = input.value;
    const output = document.getElementById('even-checker-output')
    if(text % 2 === 0){
        output.textContent =`It is true that ${text} is  even`
    }else{
        output.textContent =`It is false that ${text} is  even`
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
    let input1 =parseInt(document.getElementById('average-input-1').value) 
    let input2 =parseInt(document.getElementById('average-input-2').value)
    let input3 =parseInt(document.getElementById('average-input-3').value)
    let output = document.getElementById('average-output')
    let average = (input1 + input2 + input3)/3 
    output.textContent =`The average of ${input1}, ${input2}, and ${input3} is ${average}`
}

function removelsVow() {
    let string = document.getElementById("vowel-remover-input").value
    let output = document.getElementById("vowel-remover-output")
    let checkbox = document.getElementById("y-is-vowel-checkbox")
    let vowel = "aeiouyAEIOUY"
    let newStr = ""
    if (checkbox.checked) {
      for (let i = 0; i < string.length; i ++) {
        if (!vowel.includes(string[i])) {
          newStr = newStr + string[i];
        } else {
          newStr = newStr + ""
        }
      }
    } else {
      let vowelNoY = "aeiouAEIOU";
      for (let i = 0; i < string.length; i ++) {
        if (!vowelNoY.includes(string[i])) {
          newStr = newStr + string[i];
        } else {
          newStr = newStr + ""
        }
      }
    }
    output.textContent = newStr
}
