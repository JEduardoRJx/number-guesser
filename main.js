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
var errorIconOne = document.querySelector('.error-icon-1');
var errorIconTwo = document.querySelector('.error-icon-2');
var errorIconThree = document.querySelector('.error-icon-3');
var errorIconFour= document.querySelector('.error-icon-4');
var errorIconFive = document.querySelector('.error-icon-5');
var errorMessageOne = document.querySelector('.error-message-1');
var errorMessageTwo = document.querySelector('.error-message-2');
var errorMessageThree = document.querySelector('.error-message-3');
var errorMessageFour = document.querySelector('.error-message-4');
var errorMessageFive = document.querySelector('.error-message-5');
var challengerForm2 = document.querySelector('#challenger-form-2');

window.onload = function() {
  offClearGameButton();
  offResetGameButton();
  offSubmitGuessButton();
  hideErrors();
};

 function hideErrors() {
  errorMessageOne.hidden = true;
  errorMessageTwo.hidden = true;
  errorMessageThree.hidden = true;
  errorMessageFour.hidden = true;
  errorMessageFive.hidden = true;
  errorIconOne.hidden = true;
  errorIconTwo.hidden = true;
  errorIconThree.hidden = true;
  errorIconFour.hidden = true;
  errorIconFive.hidden = true;
  firstChallengerGuessInput.style.border = "1px solid #ECECEC";
  secondChallengerGuessInput.style.border = "1px solid #ECECEC";
  firstChallengerNameInput.style.border = "1px solid #ECECEC";
  secondChallengerNameInput.style.border = "1px solid #ECECEC";
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
    if (parseInt(minRange.value) < parseInt(maxRange.value) && parseInt(maxRange.value) > parseInt(minRange.value)) {
    var newMinRange = parseInt(minRange.value);
    var newMaxRange = parseInt(maxRange.value);
    minSpan.innerText = newMinRange;
    maxSpan.innerText = newMaxRange;
    randomNumber = Math.floor(Math.random() * (
    parseInt(maxRange.value) - parseInt(minRange.value)) + 
    parseInt(minRange.value));
    onSubmitGuessButton(); 
    errorMessageOne.hidden = true;
    errorIconOne.hidden = true;
    minRange.style.border = "1px solid #ECECEC";
    maxRange.style.border = "1px solid #ECECEC";
    } else if (minRange.value === "" || maxRange.value === "") {
         errorMessageOne.hidden = false;
         errorIconOne.hidden = false;
         minRange.style.border = "2px solid #DD1972"
         maxRange.style.border = "2px solid #DD1972"
    } else {
         errorMessageOne.hidden = false;
         errorIconOne.hidden = false;
         minRange.style.border = "2px solid #DD1972"
         maxRange.style.border = "2px solid #DD1972"
    }
  });

};

range();

submit();

function submit() {
  submitGuessButton.addEventListener('click', function () {
    if (isNaN(parseInt(firstChallengerGuessInput.value)) === true || firstChallengerGuessInput.value === "") {
        errorMessageTwo.hidden = false;
        errorIconTwo.hidden = false;
        firstChallengerGuessInput.style.border = "2px solid #DD1972"
    } else if (isNaN(parseInt(secondChallengerGuessInput.value)) === true || secondChallengerGuessInput.value === "") {
        errorMessageThree.hidden = false;
        errorIconThree.hidden = false;
        secondChallengerGuessInput.style.border = "2px solid #DD1972"
    } else if (firstChallengerNameInput.value === "") {
        errorMessageFour.hidden = false;
        errorIconFour.hidden = false;
        firstChallengerNameInput.style.border = "2px solid #DD1972"
    } else if (secondChallengerNameInput.value === "") {
        errorMessageFive.hidden = false;
        errorIconFive.hidden = false;
        secondChallengerNameInput.style.border = "2px solid #DD1972"
    } else {
        console.log("Submit button is working!")
        inRange();
        errorMessageTwo.hidden = true;
        errorIconTwo.hidden = true;
        firstChallengerGuessInput.style.border = "1px solid #ECECEC";
        errorMessageThree.hidden = true;
        errorIconThree.hidden = true;
        secondChallengerGuessInput.style.border = "1px solid #ECECEC";
        errorMessageFour.hidden = true;
        errorIconFour.hidden = true;
        firstChallengerNameInput.style.border = "1px solid #ECECEC";
        errorMessageFive.hidden = true;
        errorIconFive.hidden = true;
        secondChallengerNameInput.style.border = "1px solid #ECECEC";
    }
  });
}

function clear() {
  clearGameButton.addEventListener('click', function () {
    rangeForm.reset();
    challengerForm.reset();
    challengerForm2.reset();
    firstChallengerName.innerText = "Challenger 1 Name";
    firstChallengerGuess.innerText = "?";
    secondChallengerName.innerText = "Challenger 2 Name";
    secondChallengerGuess.innerText = "?";
    minSpan.innerText = "1";
    maxSpan.innerText = "100";
    offClearGameButton();
    hideErrors();
  });
}
clear();

function reset() {
  resetGameButton.addEventListener('click', function () {
    rangeForm.reset();
    challengerForm.reset();
    challengerForm2.reset();
    firstChallengerName.innerText = "Challenger 1 Name";
    firstChallengerGuess.innerText = "?";
    secondChallengerName.innerText = "Challenger 2 Name";
    secondChallengerGuess.innerText = "?";
    minSpan.innerText = "1";
    maxSpan.innerText = "100";
    offResetGameButton();
    hideErrors();
  });
}
reset();

function displayResultsOne() {
  var newFirstChallengerNameInput = firstChallengerNameInput.value;
  var newFirstChallengerGuessInput = firstChallengerGuessInput.value;
  firstChallengerName.innerText = newFirstChallengerNameInput;
  firstChallengerGuess.innerText = newFirstChallengerGuessInput;
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
  var newSecondChallengerNameInput = secondChallengerNameInput.value;
  var newSecondChallengerGuessInput = secondChallengerGuessInput.value;
  secondChallengerName.innerText = newSecondChallengerNameInput;
  secondChallengerGuess.innerText = newSecondChallengerGuessInput;
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
    <h2 class="card-winner-name">${firstChallengerNameInput.value}</h2>
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

function inRange() {
  if(parseInt(firstChallengerGuessInput.value) >= parseInt(minSpan.innerText) && parseInt(firstChallengerGuessInput.value) <= parseInt(maxSpan.innerText)) {
      console.log("In range User1");
      errorMessageTwo.hidden = true;
      errorIconTwo.hidden = true;
      firstChallengerGuessInput.style.border = "1px solid #ECECEC";
      displayResultsOne();
  } else {
      errorMessageTwo.hidden = false;
      errorIconTwo.hidden = false;
      firstChallengerGuessInput.style.border = "2px solid #DD1972"
      console.log("Not in range User1")
    }
  if(parseInt(secondChallengerGuessInput.value) >= parseInt(minSpan.innerText) && parseInt(secondChallengerGuessInput.value) <= parseInt(maxSpan.innerText)) {
        console.log("In range User 2..")
        errorMessageThree.hidden = true;
        errorIconThree.hidden = true;
        secondChallengerGuessInput.style.border = "1px solid #ECECEC";
        displayResultsTwo();
    } else {
        errorMessageThree.hidden = false;
        errorIconThree.hidden = false;
        secondChallengerGuessInput.style.border = "2px solid #DD1972"
        console.log("Not in range User 2..")
  }
}

