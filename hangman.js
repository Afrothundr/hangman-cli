var wordCheck = require('./word.js');
var inquirer = require('inquirer');
var wordBank = require('./word_bank.js');
//initialize word bank and game variable
var selectedWord = new wordBank();
var game = null;

function setup() {
	//create new game instance
	game = new wordCheck();
	//select random word
	game.currentWord(selectedWord.pickWord());
}
//play game function
function playGame() {
	//if word is already guessed return play again function
	if (game.progress.join("") === game.puzzle.join("")) {
				console.log("--------------------" + "\nYOU WON! WOOT");
				return playAgain();
			}
	//log game progress
	console.log(game.progress.join(""));
	//ask use for letter
	inquirer.prompt(
		{
		  type: "input",
		  name: "guess",
		  message: 'Pick a letter!'
		}
		).then(function(guess) {
			game.checkFor(guess.guess);
			//if you are out of guesses show lose message and run play again function
			if (game.guesses === 0) {
				console.log("You Lose!!");
				console.log(`You really couldn't guess "${game.puzzle.join("")}"?!?`);
				playAgain();

			} else { //else run play game function again
				playGame();
			}
		});
//play again funciton
function playAgain() {
		inquirer.prompt( //ask user if they want to play again
		{
			 type: "confirm",
			 name: "answer",
			 message: "Want to play again?",
		}
		).then(function(response) { //if yes...
		if (response.answer === true) {
		   setup(); //set up game
		   playGame(); // run game
		} else {
			console.log("Thanks for playing!"); //else thank for playing!
		}
	 });
	}
}



setup();
playGame();