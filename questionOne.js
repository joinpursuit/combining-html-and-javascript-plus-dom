document.addEventListener("DOMContentLoaded", () => {
    
    let enterName = window.prompt("enter")

    let result = enterName.value;
    document.querySelector("#name").innerText = enterName

    result.innerText = `#name`

})