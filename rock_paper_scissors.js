let gameArray = ['Rock','Paper','Scissors'];
let computerSelection;
let playerSelection;
let playerInput = prompt("Select 'Rock', 'Paper', or 'Scissors':");


     function getComputerChoice() {
          computerSelection = gameArray[Math.floor(Math.random()*gameArray.length)];
          return computerSelection;
     }

     function getPlayerChoice(playerInput) {
          /*
     for (let i = 0; i < playerInput.length; i++) {
          playerInput[i] = playerInput[i][0].toUpperCase() + playerInput[i].toLowerCase(1);
      }
      */
      playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
      return playerSelection;
     }
     
console.log(getComputerChoice())
console.log(getPlayerChoice(playerInput))
