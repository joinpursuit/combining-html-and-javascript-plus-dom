const stringMirror = () =>{
    let input = document.getElementById("mirror-input").value
    let output = (document.getElementById("mirror-output"))
    output.textContent = input
};

const stringUppercaser = () =>{
    let input = document.getElementById("uppercaser-input").value
    let output = document.getElementById("uppercaser-output")
    output.textContent = input.toUpperCase()
};


const PalindromeDetector = () =>{
    let input = document.getElementById("palindrome-input").value
    let output = document.getElementById("palindrome-output")
    let str = String(input)
    console.log(str)
    let arr = []
    for(let i = str.length -1; i >= 0; i--){
        arr.push(str[i])
    }
    let joinedArr= arr.join("")
    if(joinedArr === str){
        output.textContent = `It is ${true} that ${input} is a palindrome `
    }else{
        output.textContent = `It is ${false} that ${input} is a palindrome `
    }

}

const EvenChecker = () =>{

}

const NumberDoubler = () =>{

}

const AverageofThreeNumbers = () =>{

}