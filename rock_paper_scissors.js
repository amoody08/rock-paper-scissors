let gameArray = ['Rock','Paper','Scissors'];
let computerSelection;
let playerSelection;
let winCount = 0;
let lossCount = 0;


for (roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++)
// Loops the game until roundsPlayed = 5 
{

     function getComputerChoice() {
          computerSelection = gameArray[Math.floor(Math.random()*gameArray.length)];
          return computerSelection;
//Chooses random item from the "gameArray" for the computer's choice
     }
     let playerInput = prompt("Select 'Rock', 'Paper', or 'Scissors':");
          playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();  
//Fixes formatting to capitalize first letter of user's choice and make the rest of the word lower case  

     function playRound(playerSelection, computerSelection) {
          switch(playerSelection) {
               case "Rock": 
          switch(computerSelection) {
               case "Rock":
                    --roundsPlayed;
//If there's a draw, roundsPlayed won't go up, so the game won't win until there have been 5 wins
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
//If user types something other than "Rock", "Paper", or "Scissors", a dialog will pop up.
     }
}



console.log("Computer choice: " + getComputerChoice());
console.log("Player choice: " + playerSelection);
console.log(playRound(playerSelection,computerSelection));
//Displays Computer's choice, Player's choice, and runs program to see who wins.
}

     function winTally(winCount,lossCount) {
          if (winCount > lossCount) {
               return "You win!";
          }
          else if (winCount < lossCount) {
               return "You lose!";
          }
//Returns "You win" or "You lose" depending on who got the most wins.
     }

console.log(winTally(winCount,lossCount));
console.log("You won " + winCount + " rounds this game out of 5.");
//Displays final score and how many games the user won.
