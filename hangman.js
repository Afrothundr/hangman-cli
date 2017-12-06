var wordCheck = require('./word.js');
var inquirer = require('inquirer');
var wordBank = require('./word_bank.js');

var selectedWord = new wordBank();
var game = null;

function setup() {
	//set random word from word bank
	game = new wordCheck();
	game.currentWord(selectedWord.pickWord());
	game.solved = false;
	playGame();
}

function playGame() {
	console.log(game.progress.join(""));
	if (game.solved === true) {
				console.log("--------------------" + "\nYOU WON! WOOT");
				playAgain();
			}
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
				console.log(`You really couldn't guess "${game.puzzle.join("")}"?!?`);
				playAgain();

			} else {
				playGame();
			}
		});

function playAgain() {
		inquirer.prompt(
		{
			 type: "confirm",
			 name: "answer",
			 message: "Want to play again?",
		}
		).then(function(response) {
		if (response.answer === true) {
		   setup();
		} else {
			console.log("Thanks for playing!");
		}
	 });
	}
}



setup();