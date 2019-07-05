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
var firstChallengerGuess = document.querySelector('.challenger-1-guess');
var secondChallengerName = document.querySelector('.challenger-2-name');
var secondChallengerGuess = document.querySelector('.challenger-2-guess');
// var randomNumber = Math.floor(Math.random() * newMaxRange)

rangeUpdateButton.addEventListener('click', function () {
  var newMinRange = parseInt(minRange.value);
  var newMaxRange = parseInt(maxRange.value);
  minSpan.innerText = newMinRange;
  maxSpan.innerText = newMaxRange;
});

submitGuessButton.addEventListener('click', function () {
  var NewFirstChallengerNameInput = firstChallengerNameInput.value;
  var NewFirstChallengerGuessInput = firstChallengerGuessInput.value;
  var NewSecondChallengerNameInput = secondChallengerNameInput.value;
  var NewSecondChallengerGuessInput = secondChallengerGuessInput.value;
  firstChallengerName.innerText = NewFirstChallengerNameInput;
  firstChallengerGuess.innerText = NewFirstChallengerGuessInput;
  secondChallengerName.innerText = NewSecondChallengerNameInput;
  secondChallengerGuess.innerText = NewSecondChallengerGuessInput;
});