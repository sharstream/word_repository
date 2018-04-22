// Main.js

let fs = require("fs");
let inquirer = require("inquirer");
let Word = require("./Word.js");

inquirer.prompt([
    {
        name:"character",
        type:"input",
        message:"Guess a letter!"
    }
]).then(function(answers){

});