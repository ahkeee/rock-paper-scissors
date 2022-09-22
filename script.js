function getComputerChoice() {
    let characters = ['Rock', 'Paper', 'Scissors'];
    return characters[Math.floor(Math.random()*characters.length)];
}


function playerRound(playerSelection, computerSelection = getComputerChoice()) {
    // playerSelection = new RegExp('^' + playerSelection)

    if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return `Congratulations! You\'ve won the game! because player choose ${playerSelection} and computer choose ${computerSelection}.`; 
    } else if(playerSelection === 'Rock' && computerSelection === 'Paper') {
        return `You lose, Paper beats Rock! because player choose ${playerSelection} and computer choose ${computerSelection}.`;
    } else if(playerSelection === 'Rock' && computerSelection == 'Rock') {
        return `It\'s a tie! Rock can\'t beat the Rock because they are the same! because player choose ${playerSelection} and computer choose ${computerSelection}.`;
    } else if(playerSelection === 'Paper' && computerSelection === 'Rock') {
        return `Congratulations! You\'ve won the game! because player choose ${playerSelection} and computer choose ${computerSelection}.`; 
    } else if(playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return `You lose, Paper beats Rock! because player choose ${playerSelection} and computer choose ${computerSelection}.`;
    } else if(playerSelection === 'Paper' && computerSelection == 'Paper') {
        return `It\'s a tie! Rock can\'t beat the Rock because they are the same! because player choose ${playerSelection} and computer choose ${computerSelection}.`;
    } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return `Congratulations! You\'ve won the game! because player choose ${playerSelection} and computer choose ${computerSelection}.`; 
    } else if(playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return `You lose, Paper beats Rock! because player choose ${playerSelection} and computer choose ${computerSelection}.`;
    } else if(playerSelection === 'Scissors' && computerSelection == 'Scissors') {
        return `It\'s a tie! Rock can\'t beat the Rock because they are the same! because player choose ${playerSelection} and computer choose ${computerSelection}.`;
    }
}

console.log(playerRound('Rock', getComputerChoice()));