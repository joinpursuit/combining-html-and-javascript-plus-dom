document.addEventListener("DOMContentLoaded",() => {
    // let submitButton = document.querySelector("#submitButton");
    // submitButton.addEventListener("click", evenChar)
// let stringInput = prompt("What's your name?")

// alert("Hello " + stringInput)
// document.getElementById("stringName").innerText = "Hello " + stringInput


// let numberInput = prompt("What's your age")
// let output = ""
// if (numberInput % 2 === 0){
    //     alert("Your age even")
    //     output ="Your age is is even"
    //     document.getElementById("age").innerText = output 
    // } else {
        //     alert("Your age is not even")
        //     output = "Your age is not even"
        //     document.getElementById("age").innerText = output 
        // }
        
        // let doubleInput = prompt("Enter a Number")
        // let num = document.getElementById("#number")
        // console.log(num)
        
        
        
        // const Times2 = () => {
        //     let doubler = document.querySelector("#num").value*2;
        //     //  document.getElementById("#num").innerText = num.value * 2;
        //     alert(doubler)
        //     document.querySelector("#result").innerHTML = doubler
        //     document.querySelector("#num").value = doubler
        //     return doubler
        // }


    })
    const Times2 = () => {
        let doubler = document.querySelector("#num").value*2;
        //  document.getElementById("#num").innerText = num.value * 2;
        alert(doubler)
        document.querySelector("#result").innerHTML = doubler
        document.querySelector("#num").value = doubler
        return doubler
    }
    
    const isPalindrome = () => {
        let reverse = ""
        let word = document.querySelector("#text").value
        for(let i = word.length - 1; i >= 0; i--){
            reverse+=(word[i])
        }
        if(reverse===word){
            alert("its Palindrome")
            document.querySelector("#isPalindrome").innerHTML = "its Palindrome"
        }
        else{
            alert("its not Palindrome")
            document.querySelector("#isPalindrome").innerHTML = "its not Palindrome"
        }
    }

    const evenChar = ()=>{
        let strInput = document.querySelector("#words")
        let str = strInput.value
        let newChar = "";
        for(let i=1;i<str.length;i++){
            if(i%2){
                newChar+= str[i]   
            }
        }
    //    return document.querySelector("#words").value = newChar
      strInput.value = newChar
    }

    const upperC =()=>{
        let input= document.querySelector("#upperCased")
        let inputV = input.value
        // inputV.toUpperCase()
        alert(inputV.toUpperCase())
        document.querySelector("#allUpper").innerHTML=inputV.toUpperCase()
        document.querySelector("#upperCased").value=inputV.toUpperCase()
    }

    const countingCapital = () => {
        let input= document.querySelector("#stringCap")
        let word = input.value
        let count = 0

        for(let i=0; i<word.length; i++){
            if(word[i] === word[i].toUpperCase()){
                count++
            }
        }
        alert(count)

        document.querySelector("#stringCount").innerHTML= count
    }

    const compareCapitals = () => {
        let input1 = document.querySelector("#string1")
        let word1 = input1.value
        let count1 = 0
        let input2 = document.querySelector("#string2")
        let word2 = input2.value
        let count2 = 0

        for(let i=0; i<word1.length; i++){
            if(word1[i] === word1[i].toUpperCase()){
                count1++
            }
        }
        for(let i=0; i < word2.length; i++){
            if(word2[i] === word2[i].toUpperCase()){
                count2++
            }
        }
        if(count1 > count2){
            alert(word1 + " has more capital letters")
            document.querySelector("#comapareResults").innerHTML= word1 + " has " + count1 +" capital letters."

        }else if(count2 > count1) {
            alert(word2 + " has more capital letters")
            document.querySelector("#comapareResults").innerHTML= word2 + " has " + count2 +" capital letters."
        }else {
            alert(word1 + " has the same amount of capital letters as " + word2)
            document.querySelector("#comapareResults").innerHTML= word1 + " and " + word2 + " both have " + count1 + " capital letters."

        }
    }

    const avgALL = () =>{
        let input1 = document.querySelector("#num1");
        let input2 = document.querySelector("#num2");
        let input3 = document.querySelector("#num3");
        let numb1 = Number(input1.value);
        let numb2 = Number(input2.value);;
        let numb3 = Number(input3.value);;
        let sum = numb1+numb2+numb3
        let avg = (sum/3)
        if(avg){
            alert("the Average is "+ avg)
            document.querySelector("#avgResult").innerHTML= "The Average is "+avg
        }else{
            alert("All of the inputs must be numbers")
            document.querySelector("#avgResult").innerHTML= "All of the inputs must be numbers"
        }
    }

    const checkMiddle = () =>{
        let input1 = document.querySelector("#numL");
        let input2 = document.querySelector("#numM");
        let input3 = document.querySelector("#numR");
        let numb1 = Number(input1.value);
        let numb2 = Number(input2.value);
        let numb3 = Number(input3.value);
        console.log(numb1)
        console.log(numb2)
        console.log(numb3)
        let sum = numb1+numb3
        console.log(sum)
        if(numb2===sum){
            alert(true)
            document.querySelector("#middleResult").innerHTML= true

        }else{
            alert(false)
            document.querySelector("#middleResult").innerHTML= false

        }
    }
    
    let avoidLetters = "aAeEiIoOuU"
    
    const addingy = () => {
        if(document.querySelector("#myCheck").checked === true){
            avoidLetters+= "yY"
    }else{
        avoidLetters ="aAeEiIoOuU"
    }
    console.log(avoidLetters)
}
    const disemvowel = () => {
        let input = document.querySelector("#takeVowels");
        let string = input.value;
        let output = ""

        for(let char of string) {
            if(!avoidLetters.includes(char)){
                output = output + char
            }
        }
        alert(output) 
        document.querySelector("#checkResult").innerHTML= output

    }
  