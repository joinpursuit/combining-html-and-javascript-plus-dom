// document.addEventListener("DOMContentLoaded", () => {
//    let userString = prompt("Let me get a string !")
// //    alert(userString)
// let header = document.querySelector("#top")
//     header.innerText = userString
// })

// question 2 
// document.addEventListener("DOMContentLoaded", () => {
//    let userNumber = prompt("Give me a number ")
//    let header = document.querySelector("#top")
//    if(userNumber % 2 === 0){
//         alert("Your number is even")
//         header.innerText = "Your number is even"
//    } else {
//        alert("Clipped")
//        header.innerText = "Clipped"
//    }

// })
//question 3
document.addEventListener("DOMContentLoaded", () => {
// let numberAnswer = document.querySelector("#num").innerText

  

// alert (Number(numberAnswer) * 2)
})

const numDub = () => {
    document.querySelector("#result").innerText = num.value * 2;
    num.value = document.querySelector("#result").innerText
    alert(num.value)
}
//question 4

document.addEventListener("DOMContentLoaded", () => {
    const palindrome = str => {
        document.querySelector("q4").innerText
        for(let i = 0; i < str.length; i++){
            if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
                return false
            }else{
                return true
            }
        }
        
    }
 }






