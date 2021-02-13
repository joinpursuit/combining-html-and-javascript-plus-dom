const mirror = () => {
    const input = document.querySelector("#mirror-input");
    const output = document.querySelector("#mirror-output")

    output.innerText = input.value;
}

const uppercaser = () => {
    const input2 = document.querySelector("#uppercaser-input");
    const output2 = document.querySelector("#uppercaser-output")

    output2.innerText = input2.value.toUpperCase();

}

const palindrome = () => {
    const input3 = document.querySelector("#palindrome-input");
    const output3 = document.querySelector("#palindrome-output")

    let arr = input3.value.split("");

    for (let c of arr) {
        if (c !== arr.pop()) {
            output3.innerText = `It is false that ${input3.value} is a palindrome`
            return;
        }
    }
    output3.innerText = `It is true that ${input3.value} is a palindrome`
}

const evenCheck = () => {
    const input4 = document.querySelector("#even-checker-input");
    const output4 = document.querySelector("#even-checker-output")


    if (input4.value % 2 === 0) {
        output4.innerText = `It is true that ${input4.value} is even`
    } else {
        output4.innerText = `It is false that ${input4.value} is even`
    }

}

const doubler = ()=> {
    const input5 = document.querySelector("#doubler-input");
    const output5 = document.querySelector("#doubler-output")

    let num = parseInt(input5.value) * 2;

    output5.innerText = `${input5.value} doubled is ${num}`

}

const average = () => {
    const input6 = document.querySelector("#average-input-1");
    const input7 = document.querySelector("#average-input-2");
    const input8 = document.querySelector("#average-input-3");
    const output6 = document.querySelector("#average-output");

    let average = (parseInt(input6.value) + parseInt(input7.value) + parseInt(input8.value)) / 3

    output6.innerText = `The average of ${input6.value}, ${input7.value}, and ${input8.value} is ${average}`
}

const vowelRemover = () => {
    const input9 = document.querySelector("#vowel-remover-input");
    const output7 = document.querySelector("#vowel-remover-output");
    const checkbox = document.querySelector("#y-is-vowel-checkbox").checked;
    let string = input9.value
    let vowels = 'AEIOUaeiou'

    if(checkbox){
        vowels = 'AEIOUYaeiouy'
    }
    let output8 = ''

    for(let char of string){
        if(vowels.includes(char)){
            output8 += ''
        } else {
            output8 += char
        }
    }
    output7.innerText = output8;

}   