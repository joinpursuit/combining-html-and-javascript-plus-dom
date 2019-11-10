const toUpper1 = () =>{
  let strElement = document.querySelector("#string")
  let str = strElement.value
  alert(str.toUpperCase())
}
const toUpper2 = () =>{
  let strElement = document.querySelector("#string")
  let str = strElement.value
  strElement.value = str.toUpperCase()
}
const toUpper3 = () =>{
  let strElement = document.querySelector("#string")
  let newSent = document.querySelector("#surprise")
  let str = strElement.value
  newSent.innerText = str.toUpperCase()
}

document.addEventListener("DOMContentLoaded", () =>{
  let submitButton = document.querySelector("#submitButton")
  submitButton.addEventListener("click", toUpper3)
})