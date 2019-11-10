
//Question 3    
    // const double = () => {
    //     let userInput = document.getElementById("textField")
    //     let num = userInput.value
    //      alert(num * 2)
         
    // }

//Question 4a + 4b
    // const isPalindrome = () => {
    //     let paragraph = document.getElementById("paragraph")
    //     let input = document.getElementById("textField")
    //     let word = input.value 
    //         if(word === word.split("").reverse().join("")){
    //             //alert("This word is a palindrome")
    //             paragraph.innerText = "This word is a palindrome"
    //         } else {
    //             //alert("This word is not a palindrome")
    //             paragraph.innerText = "This word is not a palindrome"
    //         }
    // }
    
//Question 5
const uppercase = () => {
    let input = document.getElementById("textField")
    let str = input.value
    for(let i = 0; i < str.length; i++){
        str.toUpperCase()
    }

}
     
