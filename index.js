// Main.js

let fs = require("fs");
let inquirer = require("inquirer");
let Word = require("./Word.js");
let words = ['hearth world', 'beautiful tree', 'mountain view', 'road bike', 'computer system'];
let regex = new RegExp("/^[a-zA-Z\s]+$/");
let remains = 0;

let startGuessing = () => {
    // console.log("\nNEW LETTER!\n");
    inquirer.prompt([
        {
            name: "words",
            type: "list",
            message: "Guess a letter!",
            choices: words
        },
        {
            type: "input",
            name: "letter",
            message: "Enter a letter"
        }
    ]).then(function (answers) {
        let compare = '';
        let word = new Word(answers['words']);
        // console.log('words ' + word.word);
        let answer_blanks = word.blankWords(word.word);
        remains = word.word.length;
        // console.log('remaining ' + remains);
        console.log(JSON.stringify(answers, null, ' '));
        console.log('Word to be guessed: ' + answer_blanks);
        let concatenation = answers['words'].split(' ');
        let index = 0;
        console.log(concatenation);
        // concatenation.forEach( (item) => {
        while ((index === answers['words'].indexOf(' ', index + 1)) > 0){
            remains--;
            if (item.includes(answers.letter)) {

                console.log("CORRECT!!!");
                console.log("Guess Letters " + word.guessLetter(answers.letter, compare));

            }
            else {
                console.log("INCORRECT!!!");
            }
            index++;
        }
        
        console.log("Remaining " + remains);

        // the same thing happens if we call `join` on a letter array: 
        // JavaScript calls `toString` automatially on each word, then joins them together
    }).catch(function(err){
        if (err) {
            throw err;
        }
    });
};

startGuessing();