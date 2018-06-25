
//Array of words for game
var hangmanWords = ["khalissi", "stark", "lannister", "dragons", "winterfell", "targaryen", "sword", "wall", "hodor", "crown"];

//Counters
var win = 0;
var loss = 0;
var guessesRemaining = 10;

//Creates an empty array for letters in the word
var lettersInWord = [];

//Random Word
var randomWord = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
console.log(randomWord);

// Listen for user keyboard presses
document.onkeyup = function (event) {
   var userKeyPress = event.key;
     console.log(userKeyPress);
};

//splits the random word into individual characters and stores it in the variable lettersInWord
lettersInWord = randomWord.split("");
console.log(lettersInWord);

//creates a variable called numBlanks and stores the length of characters.
var numBlanks = lettersInWord.length;
console.log(numBlanks);

//Creates an underscore for the number of characters in the word.
var wordBlanks = [];
for (var i = 0; i < numBlanks; i++) {
    wordBlanks.push("_");
}
console.log(wordBlanks);



// Press any key to get started! (Wrap code in function???)
// Display keyboard events on the DOM
//create an array with the words inside.
//if the user guesses the correct letter then it takes the place of an underscore. 
//if the user guesses wrong the the "Guesses Remaining" box goes down by 1 and the incorrect letter shows up in the "letters guessed box"
//if user guesses all the characters right then alert "You Win!" and the "win" box goes up by 1
//If the guesses remaining box hits 0, then alert user "You Lose!" and loss box goes up by 1.
//After the user wins/loses the game should automatically choose another word and make the user play it.