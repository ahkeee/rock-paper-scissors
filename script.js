

// let userScore = parseInt(0);
// let computerScore = parseInt(0);
// let win = 'You win!';
// let loose = 'You loose';
// let tie = 'it\'s a tie';


// function playerRound(playerSelection, computerSelection) {
//     if (playerSelection === "rock".toLowerCase()) {
//         if (computerSelection === "paper") {
//           computerScore++;
//           return loose;
//         } else if (computerSelection === "rock") {
//           return tie;
//         } else {
//           userScore++;
//           return win;
//         }
//       }
    
//       if (playerSelection === "scissors".toLowerCase()) {
//         if (computerSelection === "paper") {
//           userScore++;
//           return win;
//         } else if (computerSelection === "rock") {
//           computerScore++;
//           return loose;
//         } else {
//           return tie;
//         }
//       }
    
//       if (playerSelection === "paper".toLowerCase()) {
//         if (computerSelection === "paper") {
//           return tie;
//         } else if (computerSelection === "rock") {
//           userScore++;
//           return win;
//         } else {
//           computerScore++;
//           return loose;
//         }
//     }
// }

// function game() {
//     for(let i = 0; i < 5; i++) {
//         const playerSelection = prompt('Pick a move')
//         const computerSelection = getComputerChoice();
//         console.log(playerRound(playerSelection, computerSelection));
//         console.log('You\'re score = ' + userScore);
//         console.log('Computer score = ' + computerScore);
//     }
//     alert(`Game Over=> User ${userScore} vs Computer ${computerScore}`);
// }

// game();



