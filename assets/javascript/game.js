// Creating variables to define parameters for the game
var wins = 0;
var losses = 0;
var playerGuess;
var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessAmount = 8;

// Functions for updating the score
var win = function() {
    wins++;
    alert("You did it!");
}

var lose = function() {
    losses++;
    alert("You can't out smart me!")
}

// Function for counting down the amount of guesses remaining for the player
var reduce = function() {
    document.querySelector("#remaining").innerHTML = guessAmount--;
}

// Function to add the guessed keys to the "Your Guesses:" area
var yourGuess = function() {
    document.querySelector("#player-guess").innerHTML = playerGuess.append(event.key);
}

// Function that runs when a key is pressed
document.onkeyup = function(event) {
    playerGuess = event.key;
    var computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];

    if (playerGuess !== computerGuess && guessAmount > 8) {
        reduce();
        yourGuess();
    } else if (playerGuess === computerGuess && guessAmount >= 0) {
        win();
    } else {
        lose();
    }
}
