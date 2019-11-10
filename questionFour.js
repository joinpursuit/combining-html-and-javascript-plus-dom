document.addEventListener("DOMContentLoaded", () =>{
    let button = document.querySelector("#button")
    button.addEventListener("click", () =>{
        let string = document.getElementById("text").value
        if(string === string.split("").reverse().join("")) {
            window.alert(`${string} is a Palindrome`)
        } else {
            window.alert(`${string} is NOT a Palindrome`)
        }
    })

    
})