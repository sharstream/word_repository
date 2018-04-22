// Main.js

let fs = require("fs");
let inquirer = require("inquirer");
let Word = require("./Word.js");
let words = ['hearth', 'tree', 'mountain', 'bike', 'computer'];
let regex = /^[a-zA-Z\s]+$/;

let startGuessing = () => {
    // console.log("\nNEW LETTER!\n");
    inquirer.prompt([
        {
            name: "character",
            type: "input",
            message: "Guess a letter!",
            choices: words,
            validate: function (value) {
                if (value.test(regex)) {
                    return true;
                }
                return false;
            }
        }
    ]).then(function (answers) {

        let word = new Word(answers.character);
        word.addLetter(answers.character, true);
        // when concatenating with a string, JavaScript automatically calls `toString`
        console.log(word + '');
        word.guessed = true;
        console.log(word + '');

        // the same thing happens if we call `join` on a Person array: 
        // JavaScript calls `toString` automatially on each person, then joins them together
        console.log(word.letters.join(', '));
    }).catch(function(err){
        if (err) {
            throw err;
        }
    });
};