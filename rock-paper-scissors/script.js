let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const scoreBoard = document.querySelector('.scoreboard');
const resultP = document.querySelector('.result > p');
const rockBtn = document.getElementById('r');
const paperBtn = document.getElementById('p');
const scissorsBtn = document.getElementById('s');
const resetBtn = document.getElementById('reset');
const choices = document.querySelector('.choices');
const actionMessage = document.getElementById('action-message');

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === 'r') return 'Rock';
  if (letter === 'p') return 'Paper';
  return 'Scissors';
}

function win(userChoice, computerChoice) {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  resultP.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win! 🔥`;
  checkGameOver();
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScoreSpan.innerHTML = computerScore;
  resultP.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}. You lose! 😢`;
  checkGameOver();
}

function draw(userChoice, computerChoice) {
  resultP.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw. 😑`;
}

function game(userChoice) {
  if (userScore >= 10 || computerScore >= 10) return;
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice);
      break;
  }
}

function checkGameOver() {
  if (userScore >= 10 || computerScore >= 10) {
    choices.classList.add('hidden');
    resetBtn.classList.remove('hidden');
    actionMessage.classList.add('hidden');
    if(userScore >= 10) resultP.innerHTML = "🎉 YOU WON THE GAME! 🎉";
    else resultP.innerHTML = "💀 YOU LOST THE GAME! 💀";
  }
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  choices.classList.remove('hidden');
  resetBtn.classList.add('hidden');
  actionMessage.classList.remove('hidden');
  resultP.innerHTML = "Make your move!";
}

rockBtn.addEventListener('click', () => game('r'));
paperBtn.addEventListener('click', () => game('p'));
scissorsBtn.addEventListener('click', () => game('s'));
resetBtn.addEventListener('click', resetGame);
