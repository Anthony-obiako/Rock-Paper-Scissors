const myChoice = document.getElementById("my-choice");
const computerChoice = document.getElementById(
  "computer-choice"
);
const result = document.getElementById("result");
const gameChoice = document.querySelectorAll("button");
const scores = document.getElementById("scores");
let userChoice;
let computerPick;
let gameResult;
const userScores = document.getElementById("user-scores");
const alienScores = document.getElementById("alien-scores");
let userScore = 0;
let alienScore = 0;
const endText = document.getElementById("end-text");
let endtexts;

function initializeGame() {
  gameChoice.forEach((gamechoices) =>
    gamechoices.addEventListener("click", (e) => {
      userChoice = e.target.id;
      myChoice.innerHTML = userChoice;
      spawnComputerChoice();
      gameWinner();
    })
  );
}
initializeGame();
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

// function gameRound() {
//   if (userScore === 3) {
//     endtexts =
//       "Brave Child you have saved this world . You are a true HERO Congratulations!!";
//   } else if (alienScore === 3) {
//     endtexts = "You Failed and now you are DOOMED";
//   }
// }

function gameWinner() {
  if (userChoice === computerPick) {
    gameResult = " Its a draw";
  } else if (
    (userChoice === "rock" && computerPick === "scissors") ||
    (userChoice === "paper" && computerPick === "rock") ||
    (userChoice === "scissors" && computerPick === "paper")
  ) {
    gameResult = " You Win";
    userScore++;
    userScores.innerHTML = userScore;
  } else if (
    (userChoice === "rock" && computerPick === "paper") ||
    (userChoice === "paper" && computerPick === "scissors") ||
    (userChoice === "scissors" && computerPick === "rock")
  ) {
    gameResult = " You lose";
    alienScore++;
    alienScores.innerHTML = alienScore;
    gameRound();
  }

  result.innerHTML = gameResult;
}
