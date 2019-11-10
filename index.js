// const toUpper1 = () =>{
//   let strElement = document.querySelector("#string")
//   let str = strElement.value
//   alert(str.toUpperCase())
// }
// const toUpper2 = () =>{
//   let strElement = document.querySelector("#string")
//   let str = strElement.value
//   strElement.value = str.toUpperCase()
// }
// const toUpper3 = () =>{
//   let strElement = document.querySelector("#string")
//   let newSent = document.querySelector("#surprise")
//   let str = strElement.value
//   newSent.innerText = str.toUpperCase()
// }

const capCounter = () =>{
  let strElement = document.querySelector("#string")
  let newSent = document.querySelector("#surprise")
  let str = strElement.value
  let count = 0
  for(i =0; i <str.length; i++){
    if(str[i] === str[i].toUpperCase()){
      count += 1
    }
  }
  newSent.innerText = `you have ${count} capital letters`
}

const capCounter2 = () =>{
  let strElement = document.querySelector("#string")
  let str = strElement.value
  let count = 0
  for(i =0; i <str.length; i++){
    if(str[i] === str[i].toUpperCase()){
      count += 1
    }
  }
  alert(`you have ${count}`)
}

document.addEventListener("DOMContentLoaded", () =>{
  let submitButton = document.querySelector("#submitButton")
  submitButton.addEventListener("click", capCounter)
})