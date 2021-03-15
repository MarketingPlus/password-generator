# Password Generator by Benjamin Wilson ✨

![SCREENSHOT](https://user-images.githubusercontent.com/77607177/111089111-85143680-857e-11eb-8f4f-26a2fca78ccb.png)

## Description 🤙

I hve created a modern looking password generator, with nice looking glassmorphism asethtic. There is also a copy to clipboard ability so users can easily generate a password without a problem.

## Repository 📁

I have ensured all my code has been constantly pushed to my repository to ensure quality and easy of rollbacks. This has been the first time in a project where I have needed to recover previous works because of no functioning Javascript. Constant commits have allowed my rollback process to be smooth.

What I have been doing to keep my repo clean and up to date

- I have constantly used git add, commit and push to ensure all changes have been updated to the github repo
- Added extensive comments describing changes and what they could possibly mean for the client or developer
- Created a high quality read me file using different methods to convey and display info

## Code 🖥️

> EXAMPLE: This code shows one of my functions to help me generate my password, which has been properly indented and naming conventions are appropiate

```JAVASCRIPT
function generatePassword(characterNumber, uppercaseVal, lowercaseVal, symbolsVal, numbersVal) {
  let password = '';

  const valCount = lowercaseVal + uppercaseVal + numbersVal + symbolsVal;

  let charPass = [];
  if (uppercaseVal) charPass = charPass.concat(UPPERCASE_CHAR)
  if (lowercaseVal) charPass = charPass.concat(LOWERCASE_CHAR)
  if (symbolsVal) charPass = charPass.concat(SYMBOLS_CHAR)
  if (numbersVal) charPass = charPass.concat(NUMBERS_CHAR)

  if(valCount === 0) {
    return 'Please select atlease one option 👻';
  }
  
  const passwordCharacters = []
  for (let i = 0; i < characterNumber; i++) {
    const characterCode = charPass[Math.floor(Math.random() * charPass.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}
```

> EXAMPLE: This code shows some of my css for styling the card which shows proper indentation and correct naming conventions
```CSS 
.card {
  width: 40%;
  height: 70%;
  border-radius: 1rem;
  box-shadow: 20px 20px 50px rgba(0,0,0, 0.7);
  background: rgba(110, 110, 110, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
}
```

> EXAMPLE: This code shows my HTML file following the best naming conventions and indentation
```HTML
<div class="grid__item1">
              <header>
                <h1>Password Generator</h1>
                <h2>By Benjamin Wilson</h2>
              </header>
            </div>

            <div class="grid__item2">
              <div class="password__container">
                <textarea readonly id="passwordShow" aria-label="Generated Password">Your Secure Password</textarea> 
                <i class='bx bx-clipboard bx-lg' id="clipboard"></i>
              </div>
            </div> 
```

## Links 🔗

[REPOSITARY](https://github.com/MarketingPlus/password-generator)

[WEBSITE](https://marketingplus.github.io/password-generator/)


