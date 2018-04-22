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
    this.chooseWord = () => {
        if (this.letterCount > -1) {
            return letters[Math.floor(Math.random() * this.letterCount)];
        }
    };
    this.letterCount = function () {
        return this.letters.length;
    };
};

// test
let l1 = new Letter('h', true);
let l2 = new Letter('e', true);
let l3 = new Letter('a', true);
let l4 = new Letter('r', true);
let l5 = new Letter('t', true);
let l6 = new Letter('h', true);
let word = new Word();
word.addLetter(l1);
word.addLetter(l2);
word.addLetter(l3);
word.addLetter(l4);
word.addLetter(l5);
word.addLetter(l6);
// word.letters.forEach((element) => {
//     console.log(element.toString());
// });
console.log(word.letters.join(' '));
// console.log(word.letterCount());
// console.log(word.gameShownAnswer());
// console.log(word.letterCount());
// end test

module.exports = Word;