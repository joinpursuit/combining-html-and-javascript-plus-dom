function stringMirror(){
    let input = document.getElementById('mirror-input')
    let text = input.value
    let output = document.getElementById('mirror-output')
    output.textContent = text 
}

function stringUppercaser(){
    let input = document.getElementById('uppercaser-input').value
    document.getElementById('uppercaser-output').textContent = input.toUpperCase()

}

function palindromeDetector(){
    let input = document.getElementById('palindrome-input').value
    let checkInput = input.toLowerCase()
    let output = document.getElementById('palindrome-output')
   
    function checker(){
      return checkInput === checkInput.split('').reverse().join('')
    }

    output.textContent = `It is ${checker()} that ${input} is a palindrome` 

}

function evenChecker(){
    let input = document.getElementById('even-checker-input').value
    let checkInput = parseInt(input)
    let output = document.getElementById('even-checker-output')
    console.log(checkInput)

    function checker(){
        return checkInput % 2 === 0
    }

    if (checkInput){
        output.textContent = `It is ${checker()} that ${checkInput} is even`
    } else {
         output.textContent = `Enter a valid number next time`
    }

   
}


function numberDoubler(){
    let input = document.getElementById("doubler-input").value
    let checkInput = parseInt(input)
    let output = document.getElementById("doubler-output")

    if (checkInput){
        output.textContent = `${checkInput} doubled is ${checkInput * 2}`
    } else {
        output.textContent = `Enter a valid number next time`
   }
    
}

function averageOfThreeNumbers(){
    let input = parseInt(document.getElementById("average-input-1").value)
    let input2 = parseInt(document.getElementById("average-input-2").value)
    let input3 = parseInt(document.getElementById("average-input-3").value)
    let output = document.getElementById("average-output")

    if (input && input2 && input3){
        output.textContent = `The average of ${input}, ${input2}, and ${input3} is ${(input + input2 + input3) / 3}`
    } else {
        output.textContent = `Enter all valid numbers next time`
   }
}

function removeVowels(){
    let input = document.getElementById("vowel-remover-input").value 
    let inputArray = input.split('')
    let newArray = []
    let output = document.getElementById("vowel-remover-output")           
    let vowels = `aeiouAEIOU`
    let vowelsWithY = `aeiouyAEIOUY`
   
    console.log(inputArray)

    function check() {
       return document.getElementById("y-is-vowel-checkbox").checked
    }
    console.log(check())


    if (check()){
        for (let i = 0; i < inputArray.length; i++){
            if(!vowelsWithY.includes(inputArray[i])){
                newArray.push(inputArray[i])
            }
        }

    } else {
        for (let i = 0; i < inputArray.length; i++){
            if(!vowels.includes(inputArray[i])){
                newArray.push(inputArray[i])
            }
        }
    } 

    output.textContent = newArray.join('')

}