const displayString = () => {
    const input =  document.getElementById("mirror-input").value
    const p = document.getElementById("mirror-output")
    p.innerText = input
}

const displayUppercaseString = () => {
    const input =  document.getElementById("uppercaser-input").value
    const p = document.getElementById("uppercaser-output")
    p.innerText = input.toUpperCase()
}