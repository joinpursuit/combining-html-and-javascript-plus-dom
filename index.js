const replaceWithStar = () => {
    const input = document.getElementById("replace-with-star");
    const p = document.getElementById("text-with-star");
    const str = input.value;
    let output = "";
    const vowels = "aeiouAEIOU";
    for(const char of str) {
        if(vowels.includes(char)) {
            output += "*";
        } else {
            output += char; 
        }
    }

    p.innerText = output; 
}