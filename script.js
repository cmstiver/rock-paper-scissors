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
            alert1.textContent = 'Failure. The computer chose '+computerSelection+'.';
            return 'fail';
        } else if (playerSelection === 'rock' && computerSelection === 'scissors')
        {
            alert1.textContent = 'Win! The computer chose '+computerSelection+'.';
            return 'win';
        } else if (playerSelection === 'paper' && computerSelection === 'scissors')
        {
            alert1.textContent = 'Failure. The computer chose '+computerSelection+'.';
            return 'fail';
        } else if (playerSelection === 'paper' && computerSelection === 'rock')
        {
            alert1.textContent = 'Win! The computer chose '+computerSelection+'.';
            return 'win';
        } else if (playerSelection === 'scissors' && computerSelection === 'rock')
        {
            alert1.textContent = 'Failure. The computer chose '+computerSelection+'.';
            return 'fail';
        } else if (playerSelection === 'scissors' && computerSelection === 'paper')
        {
            alert1.textContent = 'Win! The computer chose '+computerSelection+'.';
            return 'win';
        } else {
            alert1.textContent = 'Tie. The computer chose '+computerSelection+'.';
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
            ++pScore
            round++
            pScoreCounter.textContent = 'Your Score: '+pScore
            roundCounter.textContent = 'Round: '+round
            checkScore()
    } else if (result === 'fail') {
            ++cScore
            round++
            cScoreCounter.textContent = 'Computer Score: '+cScore
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
        buttons.remove()
    } else if (cScore >= 3) {
        alert('Uh-oh, you\'re a big loser.')
        buttons.remove()
    } else if (round === 5) {
        if (pScore > cScore) {
            alert('You win, you super cool dude.')
            buttons.remove()
        } else if (cScore > pScore) {
            alert('Uh-oh, you\'re a big loser.')
            buttons.remove()
        } else {
            alert('This computer is a formidable opponent. It\'s a draw.')
            buttons.remove()
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
let alert1 = document.querySelector('#alert')
let buttons = document.querySelector('#buttons')

let rock = document.querySelector('#rock');
rock.addEventListener('click', inputAnswer);
let paper = document.querySelector('#paper');
paper.addEventListener('click', inputAnswer)
let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', inputAnswer)