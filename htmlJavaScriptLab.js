document.addEventListener("DOMContentLoaded", () => {
            let newString = prompt("Please enter string")
            alert(newString);
            let popText = document.querySelector("#top")
            popText.innerText = newString
})