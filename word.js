function WordCheck(selected_word) {
	this.guesses = 7;
	this.currentWord = selected_word.split("");
	this.progress = [];
	this.convert = function() {
		for (i=0; i < this.currentWord.length; i++) {
			this.progress.push("_");
		}
		return console.log(this.progress.join(""));
	}
	this.checkFor = function(guess) {
		var attempts = 0;
		for (i=0; i< this.currentWord.length; i++) {
			if (guess == this.currentWord[i]) {
				this.progress[i] = guess;
				console.log(this.progress.join(""));
			} else {
				attempts++
			}
		}
		if (attempts === this.currentWord.length) {
			this.guesses--;
		}
	}
	this.guessesLeft = function(){
		console.log(`You have ${this.guesses} guesses left!`);
	}

}


//Test cases!!
var newGame = new WordCheck("branford");

newGame.convert();
newGame.checkFor("a");
newGame.guessesLeft();
newGame.checkFor("x");
newGame.guessesLeft();

