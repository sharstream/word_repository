//Letter constructor

function Letter(
    character,
    guessed,
) {
    this.character = character;
    this.guessed = guessed;
    this.toString = () => {
        if (this.guessed) {
            return this.character.toLowerCase();
        }
        else {
            return '_';
        }
    };
    this.letterChecked = (character) => {
        if (this.character === character) {
            this.guessed = true;
        }
    };
};

// test
// let letter = new Letter('a', false);
// console.log(letter.toString());

module.exports = Letter;