var wordBank = require('./word_bank.js');
var wordCheck = require('./word.js');
var guess = require('./guess.js');

var playGame = function() {
	var selectedWord = new wordBank();
	var game = new wordCheck();
	var user = new guess();
	//set random word from word bank
	game.currentWord(selectedWord.pickWord());
	user.prompt();
	
}

playGame();