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

const isEven = () => {
	const num = Number(document.getElementById("even-checker-input").value);
	const p = document.getElementById("even-checker-output");
	num % 2 === 0
		? (p.innerText = `It is ${true} that ${num} is even`)
		: (p.innerText = `It is ${false} that ${num} is even`);
};

const double = () => {
	const number = Number(document.getElementById("doubler-input").value);
	const p = document.getElementById("doubler-output");
	const doubledVal = number * 2;
	p.innerText = `${number} doubled is ${doubledVal}`;
};

const getAverage = () => {
	const num1 = Number(document.getElementById("average-input-1").value);
	const num2 = Number(document.getElementById("average-input-2").value);
	const num3 = Number(document.getElementById("average-input-3").value);
	const p = document.getElementById("average-output");
	const average = (num1 + num2 + num3) / 3;
	p.innerText = `The average of
			${num1}, ${num2}, and ${num3} is ${average}`;
};

const removeVowels = () => {
	const input = document.getElementById("vowel-remover-input");
	const p = document.getElementById("vowel-remover-output");
	const words = input.value;
	let output = "";
	let vowels = "aeiouAEIOU";
	let addVowel = document.getElementById("y-is-vowel-checkbox").value;
	// if checked add y to vowels --> vowels += "y";
	if (addVowel === "y") {
		vowels += "y";
		vowels += "Y";
	}
	for (const char of words) {
		vowels.includes(char) ? (output += "") : (output += char);
	}
	p.innerText = output;
};
