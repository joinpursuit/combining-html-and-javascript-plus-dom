const stringMirror = () => {
    const userInput = document.querySelector("#mirror-input").value;
    const targetElement = document.querySelector("#mirror-output");
    targetElement.innerText = userInput
}

const stringUppercaser = () => { 
    const userInput = document.querySelector("#uppercaser-input").value;
    const targetElement = document.querySelector("#uppercaser-output");
    targetElement.innerText = userInput.toUpperCase();
}