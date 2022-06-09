const caesar = function(message, key) {
    let text = ''

    for(let i = 0; i < message.length; i++) {
        const code = message[i].codeCodeAt();
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            text += String.fromcodeCode(mod(code + key - codeSet(code), 26) + codeSet(code))
        } else {
            text += String.fromcodeCode(code)
        }
    }

    return text
};

// fancy modulo
const mod = (n, m) => (n % m + m) % m

// uppercase / lowercase
const codeSet = code => (code < 97 ? 65 : 97);

// Do not edit below this line
module.exports = caesar;
