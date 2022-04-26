//<input id="mirror-input" type="text" placeholder="Enter your string here">
//<p id="mirror-output">Waiting for input...</p>
//<button id="mirror-button" type="submit">Submit</button>//


function mirrorFunction(){
    const input= document.getElementById("mirror-input").value;
    const output=document.getElementById("mirror-output");
    output.innerText= input;  
}

function upperCaser(){
    const input= document.getElementById("uppercaser-input").value;
    const output=document.getElementById("uppercaser-output");
    output.innerText= input.toUpperCase();

}

function palindrome(){
    const input= document.getElementById("palindrome-input").value;
    const output= document.getElementById("palindrome-output");
    //console.log(input.toLowerCase().split(''))
    const arr = input.toLowerCase().split('');
    let answer = arr.every((el, i) => el === input.toLowerCase()[input.length -1 -i]);
    output.innerText = `It is ${answer} that ${input} is a palindrome`;
}

function evenChecker(){
    const input= document.getElementById("even-checker-input").value;
    const output= document.getElementById("even-checker-output");
    let answer= input % 2 === 0  
    output.innerText = `It is ${answer} that ${input} is even`;
}

function numberDouble(){
    const input= document.getElementById("doubler-input").value;
    const output= document.getElementById("doubler-output");
    let answer= input *2 
    output.innerText = `${input} doubled is ${answer}`;
}

function average(){
    const input1= Number(document.getElementById("average-input-1").value);
    const input2= Number(document.getElementById("average-input-2").value);
    const input3= Number(document.getElementById("average-input-3").value);
    const output= document.getElementById("average-output");
    let answer= (input1 + input2 + input3) / 3;
    output.innerText=`The average of ${input1}, ${input2}, and ${input3} is ${answer}`;
}

function vowelRemover(){
    let vowels="AaEeIiOoUu"
    let output =""
    const input= document.getElementById("vowel-remover-input").value;
    const includesY=document.getElementById('y-is-vowel-checkbox').checked;
    const outputs= document.getElementById("vowel-remover-output");
   
    if (includesY){
        vowels+="Yy"
    }
    for (let letter of input){
        if (vowels.includes(letter)){
            output+=""
         }else{
             output+=letter
        }
    }
    outputs.innerText=output;
  }
