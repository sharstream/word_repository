//Letter constructor

function Letter(
    character,
    guessed,
) {
    this.letterGuessed = function(){
        if (this.guessed) {
            return this.character;
        }
    };
    this.letterChecked = function(character){
        if (this.character === character) {
            this.guessed = true;
        }
    };
};

module.exports = Letter;