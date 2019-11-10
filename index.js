console.log("hello")
const isPalindrome = () => {
    let str = document.querySelector("#palindrome").value
    let reverseWord = str.toLowerCase().split("").reverse().join("")
    let header = document.getElementById("result")
    if (str === reverseWord) {
        //alert("Your word is a palindrome!")
        header.innerText = "Your word is a palindrome!"
    } else {
        //alert("Your word is not a palindrome!")
        header.innerText = "Your word is not a palindrome!"
    }
}


const toUpperCase = () => {
    let header = document.getElementById("top")
    let strElement = document.querySelector("#uppercased")
    let str = strElement.value
    window.alert(str.toUpperCase())
    header.innerText = str.toUpperCase()
}



const capitalCounter = () => {
    let header = document.getElementById("result")
    let strElement = document.querySelector("#capitals")
    let str = strElement.value
    console.log(str)
    console.log(strElement)
    let count = 0
    let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i = 0; i < str.length; i++) {
        if (alph.includes(str[i])) {
            count++
        }
    }
    // alert(count)
    header.innerText = count
}


const capitalComparer = () => {
    let header = document.getElementById("result")
    let strElement1 = document.querySelector("#firstString")
    let strElement2 = document.querySelector("#secondString")
    let str1 = strElement1.value
    let str2 = strElement2.value
    let count1 = 0
    let count2 = 0
    let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i = 0; i < str1.length; i++) {
        if (alph.includes(str1[i])) {
            count1++
        }
    }
    for (let i = 0; i < str2.length; i++) {
        if (alph.includes(str2[i])) {
            count2++
        }
    }
    if (count1 > count2) {
        header.innerText = `${str1} has more capitals!`
    } else {
        header.innerText = `${str2} has more capitals!`
    }
}



const getAverage = () => {
    let header = document.getElementById("result")
    let strElement1 = document.querySelector("#firstNum")
    let strElement2 = document.querySelector("#secondNum")
    let strElement3 = document.querySelector("#thirdNum")
    let str1 = strElement1.value
    let str2 = strElement2.value
    let str3 = strElement3.value
    let avg = (Number(str1) + Number(str2) + Number(str3))/ 3
    // alert(avg)
    header.innerText = avg
}