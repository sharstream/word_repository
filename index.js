// Main.js

let fs = require("fs");
let inquirer = require("inquirer");
let Word = require("./Word.js");
let words = ['hearth', 'tree', 'mountain', 'bike', 'computer'];
let regex = new RegExp("/^[a-zA-Z\s]+$/");

let startGuessing = () => {
    // console.log("\nNEW LETTER!\n");
    inquirer.prompt([
        {
            name: "character",
            type: "list",
            message: "Guess a letter!",
            choices: words,
            validate: (value) => {
                return !regex.test(value) ? true : false;
            }
        }
    ]).then(function (answers) {
        let compare = '';
        let word = new Word(answers.character);
        word.addLetter(answers.character, true);
        console.log(JSON.stringify(answers, null, ' '));
        if (answers.words.length > -1) {
            compare = answers.words[Math.floor(Math.random() * words.length)];
        }

        // when concatenating with a string, JavaScript automatically calls `toString`
        console.log(word + '');
        word.guessed = true;

        // the same thing happens if we call `join` on a letter array: 
        // JavaScript calls `toString` automatially on each word, then joins them together
        console.log(word.letters.join(', '));
    }).catch(function(err){
        if (err) {
            throw err;
        }
    });
};

startGuessing();