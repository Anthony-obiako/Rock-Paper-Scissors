const myChoice = document.getElementById("my-choice");
const computerChoice = document.getElementById(
  "computer-choice"
);
const result = document.getElementById("result");
const gameChoice = document.querySelectorAll("button");
let userChoice;
let computerPick;
let gameResult;
gameChoice.forEach((gamechoices) =>
  gamechoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    myChoice.innerHTML = userChoice;
    spawnComputerChoice();
    gameWinner();
  })
);

function spawnComputerChoice() {
  const randomPick = Math.floor(
    Math.random() * gameChoice.length + 1
  );

  if (randomPick === 1) {
    computerPick = "rock";
  } else if (randomPick === 2) {
    computerPick = "paper";
  } else {
    computerPick = "scissors";
  }

  computerChoice.innerHTML = computerPick;
}

function gameWinner() {
  if (userChoice === computerPick) {
    gameResult = " Its a draw";
  } else if (
    (userChoice === "rock" && computerPick === "scissors") ||
    (userChoice === "paper" && computerPick === "rock") ||
    (userChoice === "scissors" && computerPick === "paper")
  ) {
    gameResult = " You Win!!!";
  } else if (
    (userChoice === "rock" && computerPick === "paper") ||
    (userChoice === "paper" && computerPick === "scissors") ||
    (userChoice === "scissors" && computerPick === "rock")
  ) {
    gameResult = " You lose, Computer Wins";
  }

  result.innerHTML = gameResult;
}
