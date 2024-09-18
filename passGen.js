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
        let randomInd = Math.floor(Math.random()*allowedchars.length);
        password += allowedchars[randomInd];
    }
    
    return password;
}

const passlen = 12;
const uppercase = true;
const lowercase = true;
const numbers = true;
const symbols = true;

const password = genpass(passlen,uppercase,lowercase,numbers,symbols);

console.log(`Generated password :${password}`);
