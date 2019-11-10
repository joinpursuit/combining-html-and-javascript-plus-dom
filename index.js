const capCounterComp = () =>{
  let strElement1 = document.querySelector("#string1")
  let strElement2 = document.querySelector("#string2")
  let str1 = strElement1.value
  let str2 = strElement2.value

const count = (str)=>{
      let count = 0
      for(i =0; i <str.length; i++){
        if(str[i] === str[i].toUpperCase()){
          count += 1
        }
      }
      return count
}

if(count(str1) > count(str2)){
  alert(`${str1} has more capital letters`)
} else if (count(str1) < count(str2)){
  alert(`${str2} has more capital letters`)
} else{
  alert(`both are equal`)
}
}

const capCounterComp1 = () =>{
  let strElement1 = document.querySelector("#string1")
  let strElement2 = document.querySelector("#string2")
  let newSent = document.querySelector("#surprise")
  let str1 = strElement1.value
  let str2 = strElement2.value

const count = (str)=>{
      let count = 0
      for(i =0; i <str.length; i++){
        if(str[i] === str[i].toUpperCase()){
          count += 1
        }
      }
      return count
}

if(count(str1) > count(str2)){
  newSent.innerText = `${str1} has more capital letters`
} else if (count(str1) < count(str2)){
  newSent.innerText = `${str2} has more capital letters`
} else{
  newSent.innerText = `both are equal`
}
}

document.addEventListener("DOMContentLoaded", () =>{
  let submitButton = document.querySelector("#submitButton")
  submitButton.addEventListener("click", capCounterComp1)
})