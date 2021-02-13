const mirrorStr = () => {
  const inputTag = document.querySelector("#mirror-input");
  const pTag = document.querySelector("#mirror-output");
  pTag.innerText = inputTag.value;
};

const stringUpperCaser = () => {
  const upperCaserInput = document.querySelector("#uppercaser-input").value;
  const upperCaserOutput = document.querySelector("#uppercaser-output");
  upperCaserOutput.innerText = upperCaserInput.toUpperCase();
};
