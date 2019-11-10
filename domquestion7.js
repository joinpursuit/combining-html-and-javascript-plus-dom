const capComparer = (str1, str2)=>{
    let input1 = document.querySelector('#text1').value
    let input2 = document.querySelector('#text2').value
    let counter1 = 0
    let counter2 = 0
    let capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let char1 of input1){
        if(capital.includes(char1)){
            counter1 +=1
        }
    }
    for(let char2 of input2){
        if(capital.includes(char2)){
            counter2 +=1
        }
    }
    if(counter1 > counter2){
        alert(input1)
    } else{
        alert(input2)
    }
}
document.addEventListener('DOMContentLoaded', ()=>{
    let submit = document.querySelector('#submit')
    submit.addEventListener('click', capComparer)
})