let gameArray = ['Rock','Paper','Scissors'];
let computerSelection;
let playerSelection;
let winCount = 0;
let lossCount = 0;


for (let i = 0; i < 5; i++) {

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
                    return 'Draw! Play Again!';
                    break;
               case "Paper":
                    return 'You lose!  Paper beats rock!';
                    lossCount = lossCount++;
                    break;
               case "Scissors":
                    return 'You win! Rock beats scissors!';
                    winCount = winCount + 1;
                    break;
          }
               case "Paper": 
          switch(computerSelection) {
               case "Paper":
                    return 'Draw! Play Again!';
                    break;
               case "Rock":
                    return 'You win!  Paper beats rock!';
                    break;
                    winCount = winCount + 1;
               case "Scissors":
                    return 'You lose! Scissors beat paper!';
                    lossCount++;
                    break;
          }
               case "Scissors": 
          switch(computerSelection) {
               case "Scissors":
                    return 'Draw! Play Again!';
                    break;
               case "Paper":
                    return 'You win!  Scissors beat paper!';
                    break;
                    winCount = winCount + 1;
               case "Rock":
                    return 'You lose! Rock beats scissors!';
                    lossCount++;
                    break;
          }
     default:
          alert("Unknown Selection.  Please try again.")
     }
}

console.log("Computer choice: " + getComputerChoice());
console.log("Player choice: " + playerSelection);
console.log(playRound(playerSelection,computerSelection));
}
/*     function winTally(winCount,lossCount) {
          if (winCount > lossCount) {
               return "You win!";
          }
     if (winCount < lossCount) {
               return "You lose!";
          }
     }
*/
//console.log(winTally());
//console.log("You won " + winCount + " rounds this game out of 5.");
console.log(winCount);

