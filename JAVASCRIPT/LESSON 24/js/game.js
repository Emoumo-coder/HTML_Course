let play = confirm("Are you ready to play a game?");
let message = "";

if (play === true) {
  console.log("Ok, You ready to play a game.");
  let again = true;

  while (again) {
    let playerChoice = prompt("Enter either rock, paper or scissors");
  playerChoice = playerChoice.trim().toLowerCase();

  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    let computer = Math.floor(Math.random() * 3 + 1);

    let computerChoice =
      computer === 1 ? "rock" : computer === 2 ? "paper" : "scissors";

    if (playerChoice === computerChoice) {
        alert("You chose: " + playerChoice + "\nComputer chose: " + computerChoice + " \n it's tied");
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        alert("You chose: " + playerChoice + "\nComputer chose: " + computerChoice + " \n Computer wins");
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        alert("You chose: " + playerChoice + "\nComputer chose: " + computerChoice + " \n Computer wins");
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        alert("You chose: " + playerChoice + "\nComputer chose: " + computerChoice + " \n Computer wins");
    } else {
        alert("You chose: " + playerChoice + "\nComputer chose: " + computerChoice + " \n You won!!!");
    }

    //  now ask if the user want to play again
    again  = confirm("Do you mind to play the game again?");

    if (again === false) {
        alert("Thanks for playing.");
        break;
    } else {
        continue;
    }
  } else {
    message = "Sorry, You entered the wrong option.";
  }
  }
} else {
  message = "Ok, maybe later";
}

console.log(message);
