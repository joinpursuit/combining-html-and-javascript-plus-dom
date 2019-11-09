document.addEventListener("DOMContentLoaded", () => {
    
    let number = prompt("Enter number");
    let result = alert(`${number} $sw`)
    document.querySelector("#number").innerText = number

    if(number % 2 == 0) {
        alert("this is even ")
        result.innerText("even")
    } else {
        alert("this is odd")
        result.innerText("odd")
    }


})