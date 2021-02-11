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
