  document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("submit").addEventListener("click",()=>{
      
      str = document.getElementById("string").value
      // newStr = document.getElementById("string")
    
      
  let newStr = ""
  for(let i = str.length-1; i >=0; i--){
    newStr +=str[i]
  }
  
  
  let string = document.getElementById("check")
  let output2;
  
  if(newStr === str){
    //alert("palindrome found")
     output2 = "palindrome found"
  } else{
    //alert("not a palindrome")
     output2 = "palindrome found"
  }
  string.innerText = output2
  
    
  
    
  // alert(output)
//   number.value = output
debugger

})
})