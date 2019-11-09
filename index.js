document.getElementById("submit").addEventListener("click", ()=>{
  let num = document.getElementById("number")
  let output = Number(num)
  if(num % 2 === 0){
    alert("Your number is even");
     output = "Your number is even";
  } else {
     alert("Your number is odd");
      output = "Your number is odd";
  }
  let userInput  = document.getElementById("userInput");
  userInput.innerText = output;
})