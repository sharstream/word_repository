// Main.js

let fs = require("fs");
let inquirer = require("inquirer");
let Word = require("./Word.js");
let words = ['hearth world', 'beautiful tree', 'mountain view', 'road bike', 'computer system'];
let regex = new RegExp("/^[a-zA-Z\s]+$/");
let remains = 0;
let word = new Word(words[Math.floor(Math.random() * words.length)]);
let startGuessing = () => {
    let tempChar = '';
    var tempString = '';
    let gameShowAnswer = '';
    console.log('The random word is: ' + word.word);
    remains = word.word.length;
    inquirer
      .prompt([
      {
        name: "word",
        type: "input",
        message: "Guess a letter!"
      }
      ]).then(function (answers) {
        tempString = word.guessLetter(answers.word, gameShowAnswer);
        console.log('tempString: ' + tempString);
        if (tempString != gameShowAnswer) {
            console.log('CORRECT!');
            gameShowAnswer = tempString;
            if (gameShowAnswer === word.word) {
                console.log('You got it right! Next word.');
            }
        }
        else {
            console.log('INCORRECT!');
            remains--;
            if (remains === 0) {
                console.log('You lose it! Next word.')
            }
        }
        startGuessing();
      }).catch(function(err){
        if (err) {
            throw err;
        }
      });
};

startGuessing();