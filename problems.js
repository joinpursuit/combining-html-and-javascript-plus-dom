function stringMirror() {
    //get input from DOM
let input = document.getElementById('mirror-input')
// get value from input tag
const text = input.value
//get mirror-output from DOM
const output = document.getElementById('mirror-output')
//change the textContent of mirror-output to match input value
output.textContent= text
}
