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
    let element = '';
    let result = '';
    let morse = [];
    for(let i = 0; i < expr.length; i++){
        element += expr[i];
        if(element.length == 10){
            if(element == '**********') { 
                morse.push(' ');
            } else {
                let morse_string = '';
                let symbol = '';
                for(let i = 0; i < element.length; i++) {
                    symbol += element[i];
                    if(symbol.length == 2){
                        switch(symbol) {
                            case '10':
                                morse_string += '.';
                                break;
                            case '11':
                                morse_string += '-';
                                break;
                        }
                        symbol = '';
                    }
                }
                morse.push(morse_string);
                morse_string = '';
            }
            element = '';
        }
    }

    for(let i = 0; i <= morse.length; i++){
        switch(morse[i]){
            case '-...':  
                result += 'b'; 
            break;
            case '.-':    
                result += 'a'; 
            break; 
            case '-.-.':  
                result += 'c'; 
            break;
            case '-..':   
                result += 'd'; 
            break;
            case '.':     
                result += 'e'; 
            break;
            case '..-.':  
                result += 'f'; 
            break;
            case '--.':   
                result += 'g'; 
            break;
            case '....':  
                result += 'h'; 
            break;
            case '..':    
                result += 'i'; 
            break;
            case '.---':  
                result += 'j'; 
            break;
            case '-.-':   
                result += 'k'; 
            break;
            case '.-..':  
                result += 'l'; 
            break;
            case '--':    
                result += 'm'; 
            break;
            case '-.':    
                result += 'n'; 
            break;
            case '---':   
                result += 'o'; 
            break;
            case '.--.':  
                result += 'p'; 
            break;
            case '--.-':  
                result += 'q'; 
            break;
            case '.-.':   
                result += 'r'; 
            break;
            case '...':   
                result += 's'; 
            break;
            case '-':     
                result += 't'; 
            break;
            case '..-':   
                result += 'u'; 
            break;
            case '...-':  
                result += 'v'; 
            break;
            case '.--':   
                result += 'w'; 
            break;
            case '-..-':  
                result += 'x'; 
            break;
            case '-.--':  
                result += 'y'; 
            break;
            case '--..':  
                result += 'z'; 
            break;
            case '.----': 
                result += '1'; 
            break;
            case '..---': 
                result += '2'; 
            break;
            case '...--': 
                result += '3'; 
            break;
            case '....-': 
                result += '4'; 
            break;
            case '.....': 
                result += '5'; 
            break;
            case '-....': 
                result += '6'; 
            break;
            case '--...': 
                result += '7'; 
            break;
            case '---..': 
                result += '8'; 
            break;
            case '----.': 
                result += '9'; 
            break;
            case '-----': 
                result += '0'; 
            break;
            case ' ':
                result += ' ';
        }
    }

    return result;
}

module.exports = {
    decode
}