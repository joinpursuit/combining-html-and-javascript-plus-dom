  document.addEventListener("DOMContentLoaded",()=>{
  document.getElementById("submit").addEventListener("click",()=>{
  
  num = document.getElementById("number").value

  let output = Number(num) * 2;
  // alert(output)
  let newOutput = document.getElementById("doubled")
  newOutput.innerText = output
  //debugger
 
   
  
})
})