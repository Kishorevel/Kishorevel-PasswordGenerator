function genpass(passlen,uppercase,lowercase,numbers,symbols){

    const upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerchars = "abcdefghijklmnopqrstuvwxyz";
    const numberchars = "0123456789";
    const spclchars = "!@#$%^&*()_+-=";

    let allowedchars ="";
    let password = "";
    allowedchars += uppercase ? upperchars : "";
    allowedchars += lowercase ? lowerchars : "";
    allowedchars += numbers ? numberchars : "";
    allowedchars += symbols ? spclchars : "";

    for(let i=0;i<passlen;i++){
        let randomInd = Math.floor(Math.random()*allowedchars.length); // Using random function to generate random number
        password += allowedchars[randomInd];
    }
    
    return password;
}
//Choose the length and what kind of characters you want for your password.
//If boolean values changed it will be exception.
const passlen = 12;
const uppercase = true;
const lowercase = true;
const numbers = true;
const symbols = true;

const password = genpass(passlen,uppercase,lowercase,numbers,symbols);

console.log(`Generated password :${password}`);
