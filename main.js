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
var inputs = document.querySelectorAll('input');
var darkArticle = document.querySelector('.dark-article');
var darkSection = document.querySelector('.dark-section');

window.onload = function() {
  offClearGameButton();
  offResetGameButton();
  offSubmitGuessButton();
};
 
for (i=0; i < inputs.length; i++) {
  inputs[i].addEventListener('keyup', function () {
  onClearGameButton();
  onResetGameButton();
  });
};

function offClearGameButton() { 
  clearGameButton.disabled = true;
}

function onClearGameButton() {
  clearGameButton.disabled = false;
}

function offResetGameButton() {
  resetGameButton.disabled = true;
}

function onResetGameButton() {
  resetGameButton.disabled = false;
}

function offSubmitGuessButton() {
  submitGuessButton.disabled = true;
}

function onSubmitGuessButton() {
  submitGuessButton.disabled = false;
}

function range() {
  rangeUpdateButton.addEventListener('click', function () {
    var newMinRange = parseInt(minRange.value);
    var newMaxRange = parseInt(maxRange.value);
    minSpan.innerText = newMinRange;
    maxSpan.innerText = newMaxRange;
    randomNumber = Math.floor(Math.random() * (
    parseInt(maxRange.value) - parseInt(minRange.value)) + 
    parseInt(minRange.value));
    // notInRange();
    onSubmitGuessButton();
    submit();
  });
};
range();

function submit() {
  submitGuessButton.addEventListener('click', function () {
    var newFirstChallengerNameInput = firstChallengerNameInput.value;
    var newFirstChallengerGuessInput = firstChallengerGuessInput.value;
    var newSecondChallengerNameInput = secondChallengerNameInput.value;
    var newSecondChallengerGuessInput = secondChallengerGuessInput.value;
    firstChallengerName.innerText = newFirstChallengerNameInput;
    firstChallengerGuess.innerText = newFirstChallengerGuessInput;
    secondChallengerName.innerText = newSecondChallengerNameInput;
    secondChallengerGuess.innerText = newSecondChallengerGuessInput;
    console.log("Submit button is working!")
    inRange();
  });
}

function clear() {
  clearGameButton.addEventListener('click', function () {
    rangeForm.reset();
    challengerForm.reset();
    firstChallengerName.innerText = "Challenger 1 Name";
    firstChallengerGuess.innerText = "0";
    secondChallengerName.innerText = "Challenger 2 Name";
    secondChallengerGuess.innerText = "0";
    minSpan.innerText = "1";
    maxSpan.innerText = "100";
    offClearGameButton();
  });
}
clear();

function reset() {
  resetGameButton.addEventListener('click', function () {
    rangeForm.reset();
    challengerForm.reset();
    firstChallengerName.innerText = "Challenger 1 Name";
    firstChallengerGuess.innerText = "0";
    secondChallengerName.innerText = "Challeger 2 Name";
    secondChallengerGuess.innerText = "0";
    minSpan.innerText = "1";
    maxSpan.innerText = "100";
    offResetGameButton();
  });
}
reset();

function displayResultsOne() {
  if (parseInt(firstChallengerGuessInput.value) > randomNumber) {
    challengerOneResult.innerText = "that's too high";
  } else if (parseInt(firstChallengerGuessInput.value) < randomNumber) {
    challengerOneResult.innerText = "that's too low";
  } else {
    challengerOneResult.innerText = "BOOM!";
    displayCardOne();
  }
};

function displayResultsTwo() {
  if (parseInt(secondChallengerGuessInput.value) > randomNumber) {
    challengerTwoResult.innerText = "that's too high";
  } else if (parseInt(secondChallengerGuessInput.value) < randomNumber) {
    challengerTwoResult.innerText = "that's too low";
  } else {
    challengerTwoResult.innerText = "BOOM!";
    displayCardTwo();
  }
};

function displayCardOne() {  
  darkSection.insertAdjacentHTML('afterbegin', `<article class="dark-article">
    <h4 class="card-h4"> ${firstChallengerNameInput.value} <span class="card-span">vs</span> ${secondChallengerNameInput.value} </h4>
    <h2 class="card-winner-name">${secondChallengerNameInput.value}</h2>
    <h2 class="card-winner-text">WINNER</h2>
    <div class="card-div">
      <p>${4} Guesses</p>
      <p>${20} Minutes</p>
      <button class="close-card" type="button">X</button>
    </div>
    </article>`);
}

function displayCardTwo() {  
  darkSection.insertAdjacentHTML('afterbegin', `<article class="dark-article">
    <h4 class="card-h4"> ${firstChallengerNameInput.value} <span class="card-span">vs</span> ${secondChallengerNameInput.value} </h4>
    <h2 class="card-winner-name">${secondChallengerNameInput.value}</h2>
    <h2 class="card-winner-text">WINNER</h2>
    <div class="card-div">
      <p>${4} Guesses</p>
      <p>${20} Minutes</p>
      <button class="close-card" type="button">X</button>
    </div>
    </article>`);
}

darkSection.addEventListener('click', function(event) { 
  var darkArticle = document.querySelector('.dark-article') 
  if(event.target.className === 'close-card') { 
  //do stuff here 
  darkArticle.remove(); 
  } 
});

//if user guess is outside min and max range give error code
//bother users have to be in range to submit guess?
//give error to one person who is not in range?

//grabe numeric value of minSpan and maxSpan
// parseInt(minSpan.innerText) and parseInt(maxSpan.innerText)
//challener guesses
// parseInt(firstChallengerGuessInput.value)
//declare a function named 'notInRange'
// displayResultsOne();
// displayResultsTwo();
function inRange() {
  if(parseInt(firstChallengerGuessInput.value) >= parseInt(minSpan.innerText) && parseInt(firstChallengerGuessInput.value) <= parseInt(maxSpan.innerText)) {
      console.log("In range User1");
      if(parseInt(secondChallengerGuessInput.value) >= parseInt(minSpan.innerText) && parseInt(secondChallengerGuessInput.value) <= parseInt(maxSpan.innerText)) {
        console.log("In range User 2..")
        displayResultsOne();
        displayResultsTwo();
      } else {
        console.log("Not in range User 2..")
      }
  } else {
    console.log("Not in range User1")
  }
}