function stringMirror() {
    // get input from DOM
    const input = document.getElementById('mirror-input');
    // get value from input 
    const text = input.value
    // get mirror output from DOM
    const output = document.getElementById('mirror-output');
    // change the textContent of mirror-output to match input value
    output.textContent = text;
  }
  function stringUppercaser(){
    let input = document.getElementById('uppercaser-input').value
     let output = document.getElementById('uppercaser-output')
     output.innerText = input.toUpperCase()
  }