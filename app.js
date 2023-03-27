const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const result = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let playerChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  playerChoice = e.target.id;
  playerChoiceDisplay.innerHTML = playerChoice;
  generateComputerChoice();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerChoice;
  
    if (randomNumber === 1) {
      computerChoice = 'rock';
    }
    if (randomNumber === 2) {
      computerChoice = 'scissors';
    }
    if (randomNumber === 3) {
      computerChoice = 'paper';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
  
    if (playerChoice === 'rock') {
      if (computerChoice === 'rock') {
        result.innerHTML = 'Tie!';
      } else if (computerChoice === 'scissors') {
        result.innerHTML = 'You win!';
      } else {
        result.innerHTML = 'You lose!';
      }
    }
    if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        result.innerHTML = 'You lose!';
      } else if (computerChoice === 'scissors') {
        result.innerHTML = 'Tie!';
      } else {
        result.innerHTML = 'You win!';
      }
    }
    if (playerChoice === 'paper') {
      if (computerChoice === 'rock') {
        result.innerHTML = 'You win!';
      } else if (computerChoice === 'scissors') {
        result.innerHTML = 'You lose!';
      } else {
        result.innerHTML = 'Tie!';
      }
    }
  }
  

