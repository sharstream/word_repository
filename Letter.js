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

module.exports = Letter;