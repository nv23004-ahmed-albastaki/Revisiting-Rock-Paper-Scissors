let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let result = '';

    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    updateScore();
    document.getElementById('results').textContent = result;

    if (playerScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

function updateScore() {
    document.getElementById('score').textContent =
        `Player: ${playerScore} - Computer: ${computerScore}`;
}

function announceWinner() {
    const winner = playerScore === 5 ? 'Player' : 'Computer';
    document.getElementById('results').textContent =
        `Game Over! ${winner} wins the game!`;

    // Disable buttons after game ends
    document.querySelectorAll('button').forEach(button => {
        button.disabled = true;
    });
}

// Event listeners for buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
