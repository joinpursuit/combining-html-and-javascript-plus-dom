vowels = "aieou"
const deval = (str,vol) =>{
  let newStr=""
  for(i = 0; i <str.length; i++){
    if(!vol.includes(str[i])){
      newStr += str[i] 
    }
  }
  return newStr
}
const devowler1 = ()=>{
  let string = document.querySelector("#string")
  let stringEl = string.value
  let check = document.querySelector("#yInclude")
  let statement = document.querySelector("#surprise")
  if(check.checked){
    vowels += "y"
    state = deval(stringEl, vowels)
    alert(state)
  } else {
    state = deval(stringEl, vowels)
    alert(state)
  }
}
const devowler2 = ()=>{
  let string = document.querySelector("#string")
  let stringEl = string.value
  let check = document.querySelector("#yInclude")
  let statement = document.querySelector("#surprise")
  if(check.checked){
    vowels += "y"
    state = deval(stringEl, vowels)
    statement.innerText = state
  } else {
    state = deval(stringEl, vowels)
    statement.innerText = state
  }
}

document.addEventListener("DOMContentLoaded", () =>{
  let submitButton = document.querySelector("#submitButton")
  submitButton.addEventListener("click", devowler2)
})