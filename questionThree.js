document.addEventListener("DOMContentLoaded", () =>{

    let button = document.getElementById("submit")
    button.addEventListener("click", () => {
        let number = document.querySelector("#number")
        number.value = Number(number.value) * 2
    })

})