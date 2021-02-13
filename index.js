// const replaceWithStar = () => {
//     const input = document.getElementById("replace-with-star");
//     const p = document.getElementById("text-with-star");
//     const str = input.value;
//     let output = "";
//     const vowels = "aeiouAEIOU";
//     for(const char of str) {
//         if(vowels.includes(char)) {
//             output += "*";
//         } else {
//             output += char; 
//         }
//     }

//     p.innerText = output; 
// }

const averageNums = () => {
    let num1 = Number(document.getElementById("average-input-1").value); 
    let num2 = Number(document.getElementById("average-input-2").value);
    let num3 = Number(document.getElementById("average-input-3").value); 
    let p= document.getElementById("average-output");
    let average = (num1 + num2 + num3) / 3 
    p.innerText = `The average of ${num1}, ${num2}, and ${num3} is ${average}`
   

}