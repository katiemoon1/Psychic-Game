// Creating variables to define parameters for the game
var wins = 0;
var losses = 0;
var playerGuess;
var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessAmount = 8;

// Functions for updating the score
var win = function() {
    wins++;
    document.querySelector("#wins").innerHTML = wins;
    alert("You did it!");
}

var lose = function() {
    losses++;
    document.querySelector("#losses").innerHTML = losses;
    alert("You can't out smart me!")
}

// Function for counting down the amount of guesses remaining for the player
var reduce = function() {
    guessAmount--;
    document.querySelector("#remaining").innerHTML = guessAmount;
}

// Function to add the guessed keys to the "Your Guesses:" area
var yourGuess = function() {
    playerGuess = event.key;
    var box = document.getElementById("player-guess");
    var guess = document.createTextNode(playerGuess);
    box.appendChild(guess);
}

// Function to generate a random number for the computer
var computer = function() {
    computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

// Function to reset the game once there has been a win or a loss
var reset = function() {
    computer();
    document.querySelector("#player-guess").innerHTML = "";
    guessAmount = 8;
}


// Running computer function
computer();

// Function that runs when a key is pressed
document.onkeyup = function(event) {


    if (playerGuess !== computerGuess && guessAmount > 0) {
        reduce();
        yourGuess();
    } else if (playerGuess === computerGuess && guessAmount >= 0) {
        win();
        reset();
    } else {
        lose();
        reset();
    }
}
