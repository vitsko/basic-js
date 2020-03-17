class VigenereCipheringMachine {

    MOD = 26;

    constructor(direct=true) {
        this.direct = direct;
    }

    getSymbolCode(symbol) {
        return symbol.charCodeAt(0) - 'A'.charCodeAt(0);
    }

    shift(symbol, length) {
        const code = this.getSymbolCode(symbol);
        return String.fromCharCode((code + length) % this.MOD + 'A'.charCodeAt(0));
    }

    encrypt(string, key) {
        return this.crypt(string, key, false);
    }

    decrypt(string, key) {
        return this.crypt(string, key, true);
    }

    crypt(string, key, isDecrypt) {
        if(string === undefined || key == undefined) {
            throw new Error();
        }

        string = string.toUpperCase();
        key = key.toUpperCase();

        let result = [];
        let coding = 0;

        for(let i = 0; i < string.length; ++i) {
            if(string[i] >= 'A' && string[i] <= 'Z') {
                if(isDecrypt) {
                    result.push(this.shift(string[i], this.MOD - this.getSymbolCode(key[coding % key.length])));
                } else {
                    result.push(this.shift(string[i], this.getSymbolCode(key[coding % key.length])));
                }
                
                coding++;
            } else {
                result.push(string[i]);
            }
        }

        if(!this.direct) {
            result.reverse();
        }

        return result.join('');
    }
}

module.exports = VigenereCipheringMachine;