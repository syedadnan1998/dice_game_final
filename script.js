'use strict';
const newgame = document.querySelector('.btn--new');
const rolldice = document.querySelector('.btn--roll');
const holdScore = document.querySelector('.btn--hold');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const diceElem = document.querySelector('.dice');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let dice;


let currentscore = 0;
let activePlayer = 0;
let scores = [0, 0];

//setting initial conditions
score0.textContent = 0;
score1.textContent = 0;
diceElem.classList.add('hidden');

rolldice.addEventListener('click', function () {
  dice = Math.trunc(Math.random() * 6) + 1;
  diceElem.src = `dice-${dice}.png`;
  diceElem.classList.remove('hidden');

  if (dice != 1) {
    currentscore = currentscore + dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentscore;
  } else {
      //Switching
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    activePlayer = activePlayer == 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
    
    currentscore = 0;
    current0.textContent = 0;
    current1.textContent = 0;
  }
});

///holding the score

holdScore.addEventListener('click', function () {
    //total score in scores array
  scores[activePlayer] = scores[activePlayer] + currentscore;
  document.getElementById(`score--${activePlayer}`).textContent =scores[activePlayer];

  //Check Winning
  if (scores[activePlayer] >= 100) {
    // document.getElementById(`player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    diceElem.classList.add('hidden');
    rolldice.classList.add('hidden');
    holdScore.classList.add('hidden');
  }

  //switch
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
  activePlayer = activePlayer == 0 ? 1 : 0;
  document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
  currentscore = 0;
  current0.textContent = 0;
  current1.textContent = 0;
});

// new game
newgame.addEventListener('click', function () {
current0.textContent = 0;
current1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  scores = [0, 0];
  rolldice.classList.remove('hidden');
  holdScore.classList.remove('hidden');
  player0.classList.remove('player--winner')
  player1.classList.remove('player--winner')
});
