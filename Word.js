//Word constructor

let Letter = require("./Letter.js");
let words = ['hearth', 'tree', 'mountain', 'bike', 'computer'];
let regex = /^[a-zA-Z\s]+$/;
function Word(

) {
    let letters = [];
    this.addLetter = function(character,guessed){
        this.letters.push(new Letter(character, guessed));
    };
    this.gameShownAnswer = function(answerWord){
        let result = '';

        for (i in answerWord) {
            result = "_" + result;
        }

        return result.toLowerCase();
    };
    this.chooseWord = function(){
        if (letters.length > -1) {
            return letters[Math.floor(Math.random() * letters.length)];
        }
    };
};

module.exports = Word;