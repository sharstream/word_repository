//Word constructor

let Letter = require("./Letter.js");

function Word(
    word
) {
    this.word = word;
    this.letters = [];
    this.addLetter = (character,guessed) => {
        this.letters.push(new Letter(character, guessed));
    };
    this.blankWords = (answerWord) => {
        let result = '';

        for (i in answerWord) {
            result = "_ " + result;
        }

        return result;
    };
    this.alterAt = (n, originalString) => {
        return originalString.substr(0, n) + this.character + originalString.substr(n + 1, originalString.length);
    };
    this.guessLetter = (letter, shown) => {
        
        var checkIndex = 0;

        checkIndex = this.word.indexOf(letter);
        console.log(this.word.indexOf(letter));
        while (checkIndex >= 0) {
            shown = this.alterAt(checkIndex, letter, shown);
            console.log(this.word.indexOf(letter, checkIndex + 1));
            checkIndex = this.word.indexOf(letter, checkIndex + 1);
            this.addLetter(letter, true);
        }
        return shown;
    };
};

// test
let word = new Word('health world');
word.addLetter('h', true);
word.addLetter('e', true);
word.addLetter('a', true);
word.addLetter('r', true);
word.addLetter('t', true);
word.addLetter('h', true);
word.letters.forEach((element) => {
    console.log(element.toString());
});
console.log(word.letters.join(' '));
console.log('blank: ' + word.blankWords(word.word));
let displayAnswer = '';
console.log('display answers: ' + word.guessLetter('h', displayAnswer));
// end test

module.exports = Word;