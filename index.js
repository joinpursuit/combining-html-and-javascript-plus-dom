    //user inputs data into input box
    //we get the data from the input
    //we change the data in the mirror output window, into the data that we got from mirror-input
    //output now reads whatever the user entered
    function stringMirror() {
        let input = document.getElementById("mirror-input")
        let text = input.value

        let output = document.getElementById("mirror-output")

        output.textContent = text
    }


    function stringUpper() {
        let input = document.getElementById("uppercaser-input")
        let text = input.value

        let output = document.getElementById("uppercaser-output")

        output.innerText = text.toUpperCase()
    }


    function palindrome() {
        let input = document.getElementById("palindrome-input")
        let palindrome = input.value

        let output = document.getElementById("palindrome-output")

        let trueOrFalse = "false"

        function reverseStr(str) {
            let splitStr = str.split("")
            let reversedArr = splitStr.reverse()
            return reversedArr.join("")
        }

        if (palindrome === reverseStr(palindrome)) {
            trueOrFalse = "true"
        }

        output.textContent = `It is ${trueOrFalse} that ${palindrome} is a palindrome`

    }


    function evenChecker() {
        let input = document.getElementById("even-checker-input")
        let number = input.value

        let trueOrFalse = "false"
        
        if (number % 2 === 0) {
            trueOrFalse = "true"
        }

        let output = document.getElementById("even-checker-output")
        output.textContent = `It is ${trueOrFalse} that ${number} is even`
        
    }


    function numberDoubler() {
        let input = document.getElementById("doubler-input")
        let number = input.value

        function doubleNum(num) {
            return num * 2
        }
        const doubledVal = doubleNum(number)

        let output = document.getElementById("doubler-output")
        output.textContent = `${number} doubled is ${doubledVal}`

    }

    function averageThree() {
        let numberOne = parseInt(document.getElementById("average-input-1").value)      //here I parseInt when attaining the text
        let numberTwo = parseInt(document.getElementById("average-input-2").value)      //so that it behaves as a number for the
        let numberThree = parseInt(document.getElementById("average-input-3").value)    //rest of the function.
        

        function averageNum(num1, num2, num3) {
            let sum = (num1 + num2 + num3) / 3
            return sum
        }
        let average = averageNum(numberOne, numberTwo, numberThree)
        let output = document.getElementById("average-output")

        output.textContent = `The average of ${numberOne}, ${numberTwo}, and ${numberThree} is ${average}`
    }

    