var wordCheck = require('./word.js');
var inquirer = require('inquirer');
var wordBank = require('./word_bank.js');
var selectedWord = null;
var game = null;

var setup = function() {
	selectedWord = new wordBank();
	game = new wordCheck();
	//set random word from word bank
	game.currentWord(selectedWord.pickWord());
	console.log(game.progress.join(""));
}

var playGame = function() {
	if (game.solved === true) {
				console.log("--------------------" + "\nYOU WON! WOOT");
				playAgain();
			}
	console.log(game.solved);
	inquirer.prompt(
		{
		  type: "input",
		  name: "guess",
		  message: 'Pick a letter!'
		}
		).then(function(guess) {
			game.checkFor(guess.guess);
			if (game.guesses === 0) {
				console.log("You Lose!!");
				console.log(game.puzzle);
				playAgain();

			} else {
				playGame();
			}
		});
}

var playAgain = function() {
	inquirer.prompt(
	{
		 type: "confirm",
		 name: "confirm",
		 message: "Want to play again?"
	}).then(function(answer) {
	if (answer.confirm === true) {
	setup();
	playGame();
	} else {
		console.log("Thanks for playing!");
	}
 });
}


setup();
playGame();