function displayMirror () {
    let input = document.getElementById("mirror-input").value
    let mirrorOutput = document.getElementById("mirror-output")
    mirrorOutput.textContent = input
  }

  function upperCase(){
    let input = document.getElementById("uppercaser-input").value.toUpperCase()
    let output = document.getElementById("uppercaser-output")
    output.textContent = input
  }

 function palindrome(){
     let text = document.getElementById("palindrome-input").value
     let output= document.getElementById("palindrome-output")
     let newString =""
     for(let i=text.length-1;i >=0; i--){
         newString = newString + text[i]
     }
     if(text === newString){
         output.textContent =`It is true that ${text} is a palindrome`
    } else {
        output.textContent = `It is false that ${text} is a palindrome`
    }
 }

 function evenChecker(){
     let text= document.getElementById('even-checker-input').value
     let output = document.getElementById('even-checker-output')
     if(text % 2 === 0){
         output.textContent = `It is true that ${text} is even`
     } else {
         output.textContent =`It is false that ${text} is even`
     }
 }

 function doubler(){
     let text= document.getElementById('doubler-input').value
     let output= document.getElementById('doubler-output')
     let doubledVal = text * 2
     output.textContent = `${text} doubled is ${doubledVal}`

 }

 function avg(){
     let text1 = Number(document.getElementById("average-input-1").value)
     let text2 = Number(document.getElementById("average-input-2").value)
     let text3 = Number(document.getElementById("average-input-3").value)
     let average = (text1 +text2 + text3)/3
     let output = document.getElementById("average-output")
     output.textContent = `The average of ${text1}, ${text2}, and ${text3} is ${average}`
    
 }


