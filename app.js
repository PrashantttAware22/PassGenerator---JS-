let PasswordLength = document.querySelector("#PasswordLength");
let PassBox = document.querySelector("#PassBox");
let SliderRange = document.querySelector("#range3");
let uppercase = document.querySelector("#uppercase");
let lowercase = document.querySelector("#lowercase");
let Symbols = document.querySelector("#symbols");
let numbers = document.querySelector("#numbers");
let genPassBtn = document.querySelector("#genPassBtn");

let UpperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let LowerChars = "abcdefghijklmnopqrstuvwxyz";
let AllNumbers = "0123456789";
let AllSymbols = "!@#$%&*.";

// show initial value
PasswordLength.textContent = SliderRange.value;

// update password length
SliderRange.addEventListener("input", () => {
    PasswordLength.textContent = SliderRange.value;
});

// generate password
genPassBtn.addEventListener("click", () => {
    PassBox.value = generatePassword();
});

function generatePassword() {
    let genPassword = "";
    let allchars = "";

    if (uppercase.checked) allchars += UpperChars;
    if (lowercase.checked) allchars += LowerChars;
    if (numbers.checked) allchars += AllNumbers;
    if (Symbols.checked) allchars += AllSymbols;

    if (allchars.length === 0) return "";

    for (let i = 0; i < SliderRange.value; i++) {
        genPassword += allchars.charAt(
            Math.floor(Math.random() * allchars.length)
        );
    }

    return genPassword;
}
