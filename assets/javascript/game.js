var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var guesses = 10;
var won = 0;
var lost = 0;
var computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];
var guess = [];
console.log(computerPick);

for (i=0; i<10; i++) 
{
	var lettersGuess = document.getElementById("letter-text");
	document.onkeyup = function(event) 
	{
		lettersGuess.textContent = (event.key);

	}


}
