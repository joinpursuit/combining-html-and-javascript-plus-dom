const CheckMid1 = ()=>{
  let numEl1 = document.querySelector("#number1")
  let numEl2 = document.querySelector("#number2")
  let numEl3 = document.querySelector("#number3")
  let num1 = Number(numEl1.value)
  let num2 = Number(numEl2.value)
  let num3 = Number(numEl3.value)
  if(num2 === num1+num3){
    alert(true)
  } else {
    alert(false)
  }
}

const CheckMid2 = ()=>{
  let numEl1 = document.querySelector("#number1")
  let numEl2 = document.querySelector("#number2")
  let numEl3 = document.querySelector("#number3")
  let newSent = document.querySelector("#surprise")

  let num1 = Number(numEl1.value)
  let num2 = Number(numEl2.value)
  let num3 = Number(numEl3.value)
  if(num2 === num1+num3){
    newSent.innerText = `true`
  } else {
    newSent.innerText = `false`
  }
}

document.addEventListener("DOMContentLoaded", () =>{
  let submitButton = document.querySelector("#submitButton")
  submitButton.addEventListener("click", CheckMid2)
})