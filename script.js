//Randomly return rock, paper, or scissors.
function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {return 'rock'
        } else if (choice === 1) {return 'paper'
            } else {
                return 'scissors'
                };
}
function playRound() {
    let playerSelectionInitial = prompt('Rock, Paper, or Scissors?'); //player input
    let playerSelection = playerSelectionInitial.toLowerCase();
    console.log(playerSelection)
    let computerSelection = computerPlay(); //computer input
    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        alert('Please enter rock, paper, or scissors.')
        playRound()
    } else {
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
}

function game(round) {
       if (round === 'win') {
           pScore = ++pScore
       } else if (round === 'fail') {
           cScore = ++cScore
       } else {}
    console.log('Player: '+pScore)
    console.log('Computer: '+cScore)
}

function checkScore(){
    if (pScore >= 3) {
        alert('You win, you super cool dude.')
    } else if (cScore >= 3) {
        alert('Uh-oh, you\'re a big loser.')
    } else {
        game(playRound())
    }
}

let pScore = 0;
let cScore = 0;

game(playRound())
checkScore()
checkScore()
checkScore()
checkScore()
checkScore()