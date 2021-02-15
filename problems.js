function stringMirror(){
    // get input from DOM
    const input =document.getElementById('mirror-input')
    // get value from the input tag
    const text =input.value
    //get mirror-output from DOM
    const output=document.getElementById('mirror-output')
    // change the textContent of mirror-ouput to match 
    output.textContent=text
}
function upperCase(){
    const input =document.getElementById('uppercaser-input')
    const text =input.value
    const output=document.getElementById('uppercaser-output')
//The textContent property sets or returns the text content of the specified node, and all its descendants.
    output.textContent= text.toUpperCase()
}
 function palindrome(){
 //Get the element with the specified ID
  const input =document.getElementById('palindrome-input')
  //The value property sets or returns the value of the value attribute of a text field.
  const text =input.value
  const input =document.getElementById('palindrome-output')
  let newString ="";
  // loooping  in a descending order 
  for(let i =string.length -1; i>=0; i--){
 // adding a new str
      newString +=string[i]
  }
if(string ===newString){
    output.textContent =` It is true that ${string} is a palindrome `
}else{
    output.textContent=`It is false that ${string} is a palindrome`
}
}
function evenChecker(){
    let input =document.getElementById('even-checker-input')
    let number =input.value;
    let output =document.getElementById('even-checker-output')
    if(number %2 ===0){
        output.textContent=`It is true that ${number} is even`
    }else{
        output.textContent =`It is false that ${number} is even`
    }
}
function doubler(){
    let input =document.getElementById('doubler-input')
    let number =input.value;
    let output =document.getElementById('doubler-output') 
    output.textContent =`${number} doubled is ${number*2}`
}
function average(){
    //The parseInt() function parses a string and returns an integer.
    let num1 =parseInt(document.getElementById('average-input-1').value)
    let num2 =parseInt(document.getElementById('average-input-2').value)
    let num3 =parseInt(document.getElementById('average-input-3').value)
    let output =document.getElementById('average-input')
    output.textContent=`The average of ${num1}, ${num2}, and ${num3} is ${(num1 + num2 + num3)/3}`
}