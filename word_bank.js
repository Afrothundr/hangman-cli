function WordBank() {
	//array of available words
	this.words = ["power", "runaway", "champion", "president", "major", "backpack", "diamonds", "pablo", "college", "north", "graduation", "fantasy", "heartbreak", "chicago", "stronger"];
	this.pickWord = function() {
		//make random number
		var randomNum = Math.floor(Math.random() * this.words.length);
		//return random word
		return this.words[randomNum];
	}
}

module.exports = WordBank;