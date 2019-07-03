var minRange = document.querySelector('.min-range');
var maxRange = document.querySelector('.max-range');
var rangeUpdateButton = document.querySelector('.range-update-button');
var minSpan = document.querySelector('.min-span');
var maxSpan = document.querySelector('.max-span');
var firstChallengerNameInput = document.querySelector('.challenger-1-name-input');
var firstChallengerGuessInput = document.querySelector('.challenger-1-guess-input');
var secondChallengerNameInput = document.querySelector('.challenger-2-name-input');
var secondChallengerGuessInput = document.querySelector('.challenger-2-guess-input');
var submitGuessButton = document.querySelector('.submit-guess-button');
var resetGameButton = document.querySelector('.reset-game-button');
var clearGameButton = document.querySelector('.clear-game-button');
var firstChallengerName = document.querySelector('.challenger-1-name');
var firstChallegerGuess = document.querySelector('.challenger-1-guess');
var secondChallengerName = document.querySelector('.challenger-2-name');
var secondChallengerGuess = document.querySelector('.challenger-2-guess');

rangeUpdateButton.addEventListener('click', function () {
  NewMinRange = minRange.value;
  minSpan.innerText = NewMinRange;

  NewMaxRange = maxRange.value;
  maxSpan.innerText = NewMaxRange;
});

submitGuessButton.addEventListener('click', function () {
  NewFirstChallengerNameInput = firstChallengerName.value;
  firstChallengerName.innertext = NewFirstChallengerNameInput;

  NewFirstChallengerGuessInput = firstChallengerGuessInput;
  firstChallegerGuess.innerText = NewFirstChallengerGuessInput;
})


//Make a variable that stores a random number
var randomNumber = Math.floor(Math.random(minRange.value) )
