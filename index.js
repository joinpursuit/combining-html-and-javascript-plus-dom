function stringMirror() {
  let input = document.getElementById("mirror-input");
  let p = document.getElementById("mirror-output");
  p.innerText = input.value;
}

const stringUppercaser = () => {
  const input = document.querySelector("#uppercaser-input");
  const p = document.querySelector("#uppercaser-output")
  p.innerText = input.value.toUpperCase()
}
