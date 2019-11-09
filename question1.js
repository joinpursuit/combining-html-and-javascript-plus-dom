document.addEventListener("DOMContentLoaded", () => {
   let userString = prompt("Let me get a string !")
//    alert(userString)
let header = document.querySelector("#top")
    header.innerText = userString
})