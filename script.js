//Randomly return rock, paper, or scissors.
function createChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {return 'rock'
        } else if (choice === 1) {return 'paper'
            } else {
                return 'scissors'
                };
}
function checkResult() {
        if (playerSelection === 'rock' && computerSelection === 'paper')
        {
            alert('Failure. The computer chose '+computerSelection+'.');
            return 'fail';
        } else if (playerSelection === 'rock' && computerSelection === 'scissors')
        {
            alert('Win! The computer chose '+computerSelection+'.');
            return 'win';
        } else if (playerSelection === 'paper' && computerSelection === 'scissors')
        {
            alert('Failure. The computer chose '+computerSelection+'.');
            return 'fail';
        } else if (playerSelection === 'paper' && computerSelection === 'rock')
        {
            alert('Win! The computer chose '+computerSelection+'.');
            return 'win';
        } else if (playerSelection === 'scissors' && computerSelection === 'rock')
        {
            alert('Failure. The computer chose '+computerSelection+'.');
            return 'fail';
        } else if (playerSelection === 'scissors' && computerSelection === 'paper')
        {
            alert('Win! The computer chose '+computerSelection+'.');
            return 'win';
        } else {
            alert('Tie. The computer chose '+computerSelection+'.');
        }
  }

function inputAnswer() {
    playerSelection = (this.id)
    playRound(playerSelection, computerSelection)
}

function playRound() {
    computerSelection = createChoice()
    let result = checkResult()
    if (result === 'win') {
            pScore++
            round++
            pScoreCounter.textContent = 'Your Score: '+pScore
            roundCounter.textContent = 'Round: '+round
            checkScore()
    } else if (result === 'fail') {
            cScore++
            round++
            cScoreCounter.textContent = 'Your Score: '+cScore
            roundCounter.textContent = 'Round: '+round
            checkScore()
     } else {
            round++
            roundCounter.textContent = 'Round: '+round
            checkScore()
        }
}
function checkScore() {
    if (pScore >= 3) {
        alert('You win, you super cool dude.')
    } else if (cScore >= 3) {
        alert('Uh-oh, you\'re a big loser.')
    } else if (round === 5) {
        if (pScore > cScore) {
            alert('You win, you super cool dude.')
        } else {
            alert('Uh-oh, you\'re a big loser.')
        }
    }
    }








let playerSelection
let computerSelection
let pScore = 0
let cScore = 0
let round = 0
let pScoreCounter = document.querySelector('#pScore')
let cScoreCounter = document.querySelector('#cScore')
let roundCounter = document.querySelector('#round')

let rock = document.querySelector('#rock');
rock.addEventListener('click', inputAnswer);
let paper = document.querySelector('#paper');
paper.addEventListener('click', inputAnswer)
let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', inputAnswer)