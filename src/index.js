const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let arr = [];
    for (let i =0; i<expr.length; i+=10) {
        if (expr.slice(i, i+10) === '**********') {
            arr.push(' ');
        }
        else {
            arr.push(expr.slice(i, i+10));
        }
    }
   
    arr.forEach((elem, ind, mass) => {
        mass[ind] = elem.slice(elem.indexOf('1'));
    });

    const dotDash = (str) => {
        let result = '';        
        if (str === ' ') {
            return ' ';
        }
        for (let i=0; i<str.length; i += 2) {
            if (str.slice(i, i+2) === '10') {
                result += '.' ;
                
            } else {
                result += '-' ;
            }         
        }
        return result;
    }
    let frase= ''
    arr.forEach(elem => {
        frase += MORSE_TABLE[dotDash(elem)] || ' ';
    });
      return frase;   
}

module.exports = {
    decode
}



