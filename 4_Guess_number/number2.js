let randomNumber = parseInt(Math.random() * 100 + 1);

    const userInput = document.querySelector('#guessField');
    const submit = document.querySelector('#subt');
    const playAgainBtn = document.querySelector('#play-again');
    const previousGuss = document.querySelector('.guesses');
    const guessRemaining = document.querySelector('.lastResult');
    const lowOrHigh = document.querySelector('.lowOrHi');

    let prevGuess = [];
    let numGuess = 1;
    let playGame = true;

    function validateGuess(guess) {
      if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a number between 1 and 100');
      } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
          displayGuess(guess);
          displayMessage(`Game over! Number was ${randomNumber}`);
          endGame();
        } else {
          displayGuess(guess);
          checkGuess(guess);
        }
      }
    }

    function displayGuess(guess) {
      userInput.value = '';
      previousGuss.textContent += `${guess}, `;
      numGuess++;
      guessRemaining.textContent = `${12 - numGuess}`;
    }

    function displayMessage(message) {
      lowOrHigh.innerHTML = `<h2>${message}</h2>`;
    }

    function checkGuess(guess) {
      if (guess === randomNumber) {
        displayMessage('🎉 Congratulations! You guessed it!');
        confetti(); 
        endGame();
      } else if (guess < randomNumber) {
        displayMessage('Number is TOO low!');
      } else if (guess > randomNumber) {
        displayMessage('Number is TOO high!');
      }
    }

    function endGame() {
      userInput.value = '';
      userInput.setAttribute('disabled', '');
      submit.disabled = true;
      playAgainBtn.style.display = 'block';
      playGame = false;
    }

    function newGame() {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      previousGuss.textContent = '';
      guessRemaining.textContent = '10';
      userInput.removeAttribute('disabled');
      submit.disabled = false;
      playAgainBtn.style.display = 'none';
      lowOrHigh.innerHTML = '';
      userInput.value = '';
      playGame = true;
    }

    submit.addEventListener('click', function (e) {
      e.preventDefault();
      if (playGame) {
        const guess = parseInt(userInput.value);
        validateGuess(guess);
      }
    });

    playAgainBtn.addEventListener('click', function () {
      newGame();
    });