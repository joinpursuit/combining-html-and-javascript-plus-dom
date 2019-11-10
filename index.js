document.addEventListener("DOMContentLoaded",() => {

// let stringInput = prompt("What's your name?")

// alert("Hello " + stringInput)
// document.getElementById("stringName").innerText = "Hello " + stringInput


// let numberInput = prompt("What's your age")
// let output = ""
// if (numberInput % 2 === 0){
    //     alert("Your age even")
    //     output ="Your age is is even"
    //     document.getElementById("age").innerText = output 
    // } else {
        //     alert("Your age is not even")
        //     output = "Your age is not even"
        //     document.getElementById("age").innerText = output 
        // }
        
        
        // let doubleInput = prompt("Enter a Number")
        // let num = document.getElementById("#number")
        // console.log(num)
        
        
        
        
    })
    const Times2 = () => {
        let doubler = document.querySelector("#num").value*2;
        //  document.getElementById("#num").innerText = num.value * 2;
        alert(doubler)
        document.querySelector("#result").innerHTML = doubler
        document.querySelector("#num").value = doubler
        return doubler
    }
    
    const isPalindrome = () => {
        let reverse = ""
        let word = document.querySelector("#text").value
        for(let i = word.length - 1; i >= 0; i--){
            reverse+=(word[i])
        }
        if(reverse===word){
            alert("its Palindrome")
            document.querySelector("#isPalindrome").innerHTML = "its Palindrome"
        }
        else{
            alert("its not Palindrome")
            document.querySelector("#isPalindrome").innerHTML = "its not Palindrome"
        }
    }
