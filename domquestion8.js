const mean = (num1,num2,num3)=> {
let number1 = document.querySelector('#number1').value
let number2 = document.querySelector('#number2').value
let number3 = document.querySelector('#number3').value
let average = (parseInt(number1)+parseInt(number2)+parseInt(number3))/3
if(average  === isNaN){
alert('is not a Number')
}else {
    alert(average)
    document.querySelector('#submit').innerText
}
}
document.addEventListener('DOMContentLoaded',()=>{
    let submit = document.querySelector('#submit')
    submit.addEventListener('click', mean)

})
