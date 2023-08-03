let gameArray = ['Rock','Paper','Scissors'];
let computerSelection;
let playerSelection;
let winCount = 0;
let lossCount = 0;


for (roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++) 
{

     function getComputerChoice() {
          computerSelection = gameArray[Math.floor(Math.random()*gameArray.length)];
          return computerSelection;
     }
     let playerInput = prompt("Select 'Rock', 'Paper', or 'Scissors':");
          playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();    

     function playRound(playerSelection, computerSelection) {
          switch(playerSelection) {
               case "Rock": 
          switch(computerSelection) {
               case "Rock":
                    --roundsPlayed;
                    return 'Draw! Play Again!';
               case "Paper":
                    ++lossCount;
                    return 'You lose!  Paper beats rock!';
               case "Scissors":
                    ++winCount;
                    return 'You win! Rock beats scissors!';
          }
               case "Paper": 
          switch(computerSelection) {
               case "Paper":
                    --roundsPlayed;
                    return 'Draw! Play Again!';
               case "Rock":
                    ++winCount;
                    return 'You win!  Paper beats rock!';
               case "Scissors":
                    ++lossCount;
                    return 'You lose! Scissors beat paper!';
          }
               case "Scissors": 
          switch(computerSelection) {
               case "Scissors":
                    --roundsPlayed;
                    return 'Draw! Play Again!';
               case "Paper":
                    ++winCount
                    return 'You win!  Scissors beat paper!';
               case "Rock":
                    ++lossCount;
                    return 'You lose! Rock beats scissors!';
          }
     default:
          alert("Unknown Selection.  Please try again.")
     }
}



console.log("Computer choice: " + getComputerChoice());
console.log("Player choice: " + playerSelection);
console.log(playRound(playerSelection,computerSelection));
}

     function winTally(winCount,lossCount) {
          if (winCount > lossCount) {
               return "You win!";
          }
          else if (winCount < lossCount) {
               return "You lose!";
          }
     }

console.log(winTally(winCount,lossCount));
console.log("You won " + winCount + " rounds this game out of 5.");
