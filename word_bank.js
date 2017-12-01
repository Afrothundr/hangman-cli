function WordBank() {
	this.words = ["power", "runaway", "champion", "president", "major", "backpack", "diamonds", "pablo", "college", "north", "graduation", "fantasy", "heartbreak", "chicago", "stronger"];
	this.pickWord = function() {
		var randomNum = Math.floor(Math.random() * this.words.length);
		return this.words[randomNum];
	}
}

module.exports = WordBank;