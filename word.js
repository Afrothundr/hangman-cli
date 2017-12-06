function WordCheck() {
	this.guesses = 7;
	this.puzzle = null;
	this.progress = [];
	this.lettersGuessed = [];
	this.solved = false;
	this.currentWord = function(selected_word) {
		 this.puzzle = selected_word.split("");
		 for (i=0; i < this.puzzle.length; i++) {
			this.progress.push("_");
			}
		}
	this.checkFor = function(guess) {
		var attempts = 0;
		if (this.lettersGuessed.includes(guess)) {
			return console.log("you already guessed that!");
		}
		this.lettersGuessed.push(guess);
		for (i=0; i< this.puzzle.length; i++) {
			if (guess == this.puzzle[i]) {
				this.progress[i] = guess;
			} else {
				attempts++
			}
		}
		if (attempts === this.puzzle.length) {
			this.guesses--;
			console.log("Wow... no.");
			console.log(`You have ${this.guesses} guesses left!`);
		} else {
			console.log("Nice Work!");
		}
		if (this.progress.join("") === this.puzzle.join("")) {
					this.solved = true;
				}
		console.log(`Here's what you have already guessed: ${this.lettersGuessed}`);

	}

}
	
module.exports = WordCheck;
