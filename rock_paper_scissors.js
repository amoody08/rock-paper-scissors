let playerSelection;
let computerSelection;
let gameArray = ['Rock','Paper','Scissors'];


     function getComputerChoice() {
          let computerSelection = gameArray[Math.floor(Math.random()*gameArray.length)];
          return computerSelection;
     }
     
console.log(getComputerChoice())
