document.addEventListener("DOMContentLoaded", () =>{
    let submit = document.querySelector("#submit")
    submit.addEventListener("click", () =>{
        let userInput = document.querySelector("#text")
        userInput.value = userInput.value.toUpperCase()
    })

})