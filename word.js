function WordCheck() {
	//Set guesses to 7
	this.guesses = 7;
	//intialize variables
	this.puzzle = null;
	this.progress = [];
	this.lettersGuessed = [];
	//set wordCheck solve to false
	this.solved = false;
	//take in word selected from the word bank module and display it as underscores
	this.currentWord = function(selected_word) {
		 this.puzzle = selected_word.split("");
		 for (i=0; i < this.puzzle.length; i++) {
			this.progress.push("_");
			}
		}
	this.checkFor = function(guess) {
		//check user input against already guessed letters and the current word
		var attempts = 0;
		if (this.lettersGuessed.includes(guess)) {
			return console.log("you already guessed that!");
		}
		this.lettersGuessed.push(guess);
		for (i=0; i< this.puzzle.length; i++) {
			if (guess == this.puzzle[i]) { //if letter guessed is in puzzle word replace undersocre with letter
				this.progress[i] = guess;
			} else {
				attempts++
			}
		}
		if (attempts === this.puzzle.length) { //If no letter was correct subtract guess
			this.guesses--;
			console.log("Wow... no.");
			console.log(`You have ${this.guesses} guesses left!`);
		} else {
			console.log("Nice Work!");
		}
		
		console.log(`Here's what you have already guessed: ${this.lettersGuessed}`);

	}

}
	
module.exports = WordCheck;
