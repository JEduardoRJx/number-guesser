var minRange = document.querySelector('.min-range');
var maxRange = document.querySelector('.max-range');
var rangeUpdateButton = document.querySelector('.range-update-button');
var minSpan = document.querySelector('.min-span');
var maxSpan = document.querySelector('.max-span');
var newMinRangeTest = parseInt(minRange.value);
var newMaxRangeTest = parseInt(maxRange.value);
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
var rangeForm = document.querySelector('.range-form');
var challengerArticle = document.querySelector('.challenger-article');
var challengerForm = document.querySelector('.challenger-form');
var challengerOneResult = document.querySelector('.challenger-1-result');
var challengerTwoResult = document.querySelector('.challenger-2-result');
var randomNumber = Math.floor(Math.random() * (100 - 1) + 1);


rangeUpdateButton.addEventListener('click', function () {
  var newMinRange = parseInt(minRange.value);
  var newMaxRange = parseInt(maxRange.value);
  minSpan.innerText = newMinRange;
  maxSpan.innerText = newMaxRange;
  randomNumber = Math.floor(Math.random() * (parseInt(maxRange.value) - parseInt(minRange.value)) + 
  parseInt(minRange.value));
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
  displayResultsOne ();
  displayResultsTwo ();
});

clearGameButton.addEventListener('click', function () {
  rangeForm.reset();
  challengerForm.reset();
  firstChallengerName.innerText = " ";
  firstChallengerGuess.innerText = " ";
  secondChallengerName.innerText = " ";
  secondChallengerGuess.innerText = " ";
  minSpan.innerText = "0";
  maxSpan.innerText = "0";
});

function displayResultsOne() {
  if (parseInt(firstChallengerGuessInput.value) > randomNumber) {
    challengerOneResult.innerText = "that's too high";
  } else if (parseInt(firstChallengerGuessInput.value) < randomNumber) {
      challengerOneResult.innerText = "that's too low";
  } else {
    challengerOneResult.innerText = "BOOM!";
  }
};

function displayResultsTwo() {
  if (parseInt(secondChallengerGuessInput.value) > randomNumber) {
    challengerTwoResult.innerText = "that's too high";
  } else if (parseInt(secondChallengerGuessInput.value) < randomNumber) {
      challengerTwoResult.innerText = "that's too low";
  } else {
    challengerTwoResult.innerText = "BOOM!";
  }
};

resetGameButton.addEventListener('click', function () {
  rangeForm.reset();
  challengerForm.reset();
  firstChallengerName.innerText = " ";
  firstChallengerGuess.innerText = " ";
  secondChallengerName.innerText = " ";
  secondChallengerGuess.innerText = " ";
  minSpan.innerText = "1";
  maxSpan.innerText = "100";
  randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
});