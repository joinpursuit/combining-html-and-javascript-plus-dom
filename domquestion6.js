const capCounter =(str)=>{
  
    let input = document.querySelector('#text')
    let answer = input.value
    let counter = 0;
    let capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let char of answer){
        if(char.includes(capital)){
            counter += 1
        }
    }

}
document.addEventListener('DOMContentLoaded', ()=>{
    let submit = document.querySelector('#submit')
    submit.addEventListener('click',capCounter)
})