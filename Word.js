//Word constructor

let Letter = require("./Letter.js");

function Word(

) {
    this.letters = [];
    this.addLetter = (character,guessed) => {
        this.letters.push(new Letter(character, guessed));
    };
    this.gameShownAnswer = (answerWord) => {
        let result = '';

        for (i in answerWord) {
            result = "_" + result;
        }

        return result.toLowerCase();
    };
    this.takeLetter = (character) => {
        return Letter.letterChecked(character);
    }
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
// console.log(word.gameShownAnswer());
// end test

module.exports = Word;