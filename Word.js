//Word constructor

let Letter = require("./Letter.js");

function Word(

) {
    this.letters = [];
    this.addLetter = (character,guessed) => {
        this.letters.push(new Letter(character, guessed));
    };
    this.gameShownWord = (answerWord) => {
        let result = '';

        for (i in answerWord) {
            result = "_" + result;
        }

        return result.toLowerCase();
    };
    this.alterAt = (n, originalString) => {
        return originalString.substr(0, n) + this.character + originalString.substr(n + 1, originalString.length);
    };
    this.guessLetter = (letter, shown, answer) => {
        var checkIndex = 0;

        checkIndex = answer.indexOf(letter);
        console.log(answer.indexOf(letter));
        while (checkIndex >= 0) {
            shown = alterAt(checkIndex, letter, shown);
            console.log(answer.indexOf(letter, checkIndex + 1));
            checkIndex = answer.indexOf(letter, checkIndex + 1);
        }
        return shown;
    };
};

// test
let word = new Word();
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
// console.log(word.gameShownWord());
// end test

module.exports = Word;