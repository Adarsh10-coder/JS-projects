let randomNumber = parseInt(Math.random()*100 + 1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const previousGuss = document.querySelector('.guesses');
const guessRemaining = document.querySelector('.lastResult');
const lowORhigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
       const guess =  parseInt(userInput.value)
       validateGuess(guess)
    })
}

function validateGuess(guess){
    if(guess<'' || guess<1 || guess>100 || isNaN(guess))
        alert('give valid input')
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`🎉 Congratulations! You guessed it!`)
        endGame()
    }
    else if(guess<randomNumber){
        displayMessage(`Number is TOO low`)
    }
    else if(guess>randomNumber){
        displayMessage(`number is TOO high`)
    }
}
function displayGuess(guess){
    userInput.value = ''
    previousGuss.innerHTML += `${guess},  `
    numGuess++
    guessRemaining.innerHTML = `${12-numGuess}`
}
function displayMessage(message){
    lowORhigh.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    userInput.value =''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}
function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(){
          randomNumber = parseInt(Math.random()*100 + 1);
          prevGuess =[]
          numGuess = 1
          previousGuss.innerHTML =''
          guessRemaining.innerHTML = `${12-numGuess}`
          userInput.removeAttribute('disabled')
          startOver.removeChild(p)
          playGame = true
    })
}



