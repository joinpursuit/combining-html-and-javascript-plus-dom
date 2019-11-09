document.addEventListener("DOMContentLoaded", () => {
        //          QUESTION 1
            // let newString = prompt("Please enter string")
            // alert(newString);
            // let popText = document.querySelector("#top")
            // popText.innerText = newString

            //       QUESTION 2
            // let userNum = prompt("Enter a number:");
            // if(userNum % 2 === 0) {
            //     alert("This number is even.")
            // } else {
            //     alert("This number is odd.")
            // }
            // numText.innerText = userNum;
            //      QUESTION 3  
    // const timesTwo = () => {
    //     let num = document.querySelector("#double").value
    //     document.querySelector("#result").innerText= Number(num)*2
    //     document.getElementById("#double").value= Number(num)*2
    // }
})

const timesTwo = () => {
    let num = document.querySelector("#double").value
    document.querySelector("#result").innerText= Number(num)*2
    document.querySelector("#resultnum").innerText= Number(num)*2
    alert(Number(num)*2);
}