const outputStr = () => {
	const input = document.getElementById("mirror-input");
	const output = document.getElementById("mirror-output");
	let str = input.value;
	output.innerText = str;
};

const upperCaser = () => {
	const input = document.getElementById("uppercaser-input");
	const output = document.getElementById("uppercaser-output");
	let str2 = input.value;
	output.innerText = str2.toUpperCase();
};

const palindrome = () => {
	const input = document.getElementById("palindrome-input");
	const output = document.getElementById("palindrome-output");
	let str3 = input.value;
	let pal = str3.split(""); // creates an array of the string
	let palReverse = pal.reverse(); // reverse the string
	if (str3 === palReverse.join("")) {
		output.innerText = `It is ${true} that ${str3} is a palindrome`;
	} else {
		output.innerText = `It is ${false} that ${str3} is a palindrome`;
	}
};

const evenChecker = () => {
	const input = document.getElementById("even-checker-input");
	const output = document.getElementById("even-checker-output");
	let num1 = parseInt(input.value);
	if(num1 % 2 === 0){
		output.innerText = `It is ${true} that ${num1} is even.`
	} else {
		output.innerText = `It is ${false} that ${num1} is even.`
	}	
};

const numberDoubler = () => {
	const input = document.getElementById("doubler-input");
	const output = document.getElementById("doubler-output");
	let num2 = parseInt(input.value);
	console.log(typeof num2)
	let num2x2 = num2 * 2
	output.innerText = `${num2} doubled is ${num2x2}`
};


const averageThreeNumbers = () => {
	const input1 = parseInt(document.getElementById("average-input-1").value);
	const input2 = parseInt(document.getElementById("average-input-2").value);
	const input3 = parseInt(document.getElementById("average-input-3").value);
	const output = document.getElementById("average-output");
	let numAverage = (input1+input2+input3)/3;
	output.innerText = `The average of ${input1}, ${input2}, and ${input3} is ${numAverage}`;
};
const remove = () => {
	const input = document.getElementById("vowel-remover-input");
	const inputCheck = document.getElementById("y-is-vowel-checkbox");
	const output = document.getElementById("vowel-remover-output")


};