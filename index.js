const avr = ()=>{
  let numEl1 = document.querySelector("#number1")
  let numEl2 = document.querySelector("#number2")
  let numEl3 = document.querySelector("#number3")
  let num1 = Number(numEl1.value)
  let num2 = Number(numEl2.value)
  let num3 = Number(numEl3.value)
  let average = (num1 + num2 + num3)/ 3;
      alert(`The average of the three num is ${average}`)
      //newSent.innerText = `${str1} has more capital letters`
}
const avr2 = ()=>{
  let numEl1 = document.querySelector("#number1")
  let numEl2 = document.querySelector("#number2")
  let numEl3 = document.querySelector("#number3")
  let newAvr = document.querySelector("#surprise")
  let num1 = Number(numEl1.value)
  let num2 = Number(numEl2.value)
  let num3 = Number(numEl3.value)
  let average = (num1 + num2 + num3)/ 3;
  
  if(isNaN(average)){
    alert("All of the inputs must be numbers")
  } else {
    newAvr.innerText = `The average of the three num is ${average}`
  }
  debugger
      //newSent.innerText = `${str1} has more capital letters`
}


document.addEventListener("DOMContentLoaded", () =>{
  let submitButton = document.querySelector("#submitButton")
  submitButton.addEventListener("click", avr2)
})