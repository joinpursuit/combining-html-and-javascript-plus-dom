# Combining HTML and JavaScript + DOM Lab

# Question One

```
<script>
  let userSubmission = window.prompt("Enter Text")
window.alert(prompt) 
document.getElementById("user_submitted_text").innerText = prompt // 
</script>
 

```

# Question Two

```

 <script>
      const isEven = (answer) => {
      answer = window.prompt(`Input a number`)
      if(isNaN(answer)){
        window.alert('That is not a number. Please input a number.')
        isEven()
      }else{
        if(parseInt(answer) % 2 === 0){
          // window.alert(`Your number: ${answer} is even.`)
          document.write(`Your number : ${answer} is even.`)
        } else{
          // window.alert(`Your number: ${answer} is odd.`)
          document.write(`Your number : ${answer} is even.`)
        }
      }
    }
    isEven()
  </script>

  ```

# Question Three

a. Make a website with an input field and a button.  Have a heading at the top that reads "Double your number below"  When the user clicks on the button, display an alert showing that number times two.

b. Instead of showing a popup, make the doubled number appear in a paragraph below.

c. Make the doubled number instead appear inside the input

```
<body>
    <h2>Double Your Number Below </h2>
    <br>
    <input type="text" id="numberinput" placeholder="example: 4">
    <button onclick = "doubleYourNumber()"> Start </button>
    <p id="output"></p>
    <script>
      const doubleYourNumber = () => {
        let number = document.getElementById("numberinput").value
        if(isNaN(number)){
          window.alert(`That is not a number, try again.`)
        } else{
          let doubleNum = parseInt(number) * 2
          window.alert(`Your number doubled is ${doubleNum}`)
          document.write(doubleNum)
          document.getElementById("output").innerText = doubleNum
          document.getElementById("numberinput").value = doubleNum
        }
      }
    </script>
  </body>

  ```

# Question Four

a. Make a website with a heading at the top that reads "Palindrome detector".  Add an input field and a button.  When the user clicks the button, display an alert that says whether or not the text in the input field is a palindrome (the same backwards and forwards).

b. Instead of showing a popup, have that information appear in a paragraph below the button.


```
<body>
        <p>
            Your word: <input id="user_entry" type="text" name="user_entry">
            <button 
                type="button" 
                name="user_entry"
                onclick="palDetect(document.getElementById('user_entry').value)"
            >
                Submit
            </button>
        </p>
        <p id="palindrome_or_not"></p>
        <script>
            function palDetect(str) {
                let backwards = str.split(``).reverse().join(``)
                for (let i = str.length - 1; i >= 0; i--) backwards += str[i]
                window.alert(`${str} is ${backwards === str ? `` : `NOT `}a palindrome.`)
                document.getElementById("palindrome_or_nah").innerText += `\n${str} is ${backwards === str ? `` : `NOT `}a palindrome.`
            }
        </script>
</body>

```

# Question Five

a. Make a website with a heading at the top that reads "String Uppercaser".  Add an input field and a button.  When the user clicks the button, display an alert that contains the uppercased text of the input text field.

b. Instead of showing a popup, have that information appear in a paragraph below the button.

c. Have the uppercased overwrite the text that was there before.


```
<body>
        <h1>Quesiton 6</h1>
        <h2>String Capital Counter</h2>
        <input id="user_input" name="user_input" type="text">
        <button
            type="submit"
            name="user_input"
            onclick="capitalCount(document.getElementById('user_input').value)"
        >
            Count
        </button>
        <p id="user_entries"></p>
        <script>
            function capitalCount(str) {
                let count = 0
                for (let i = 0; i < str.length; i++) {
                    if (str[i] === str[i].toUpperCase()) {count++}
                }
                window.alert(count)
                document.getElementById("user_entries").innerText +=`There are ${count} capital letters in: ${str}`
                return count
            }
        </script>
  </body>

```




