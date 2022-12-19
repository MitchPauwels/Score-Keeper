// UI var
const playerOneDisplay = document.querySelector(".score-player-one");
const playerTwoDisplay = document.querySelector(".score-player-two");
const winningNumber = document.querySelector("#select-games");
const resetBtn = document.querySelector(".reset-Btn ");
const playerOneBtn = document.querySelector(".playerOne-Btn");
const playerTwoBtn = document.querySelector(".playerTwo-Btn");

// score-keeper
let playerOneScore = 0;
let playerTwoScore = 0;
// Game State
let isGameOver = false;
// Change UI Score
playerOneDisplay.textContent = 0;
playerTwoDisplay.textContent = 0;

// ------------- Event Listeners ----------------

// Player 1
document
  .querySelector(".playerOne-Btn")
  .addEventListener("click", function clickPlayerOne() {
    if (!isGameOver) {
      playerOneScore++;
      playerOneDisplay.textContent = playerOneScore;
      if (playerOneScore == winningNumber.value) {
        playerOneDisplay.classList.add("green");
        playerTwoDisplay.classList.add("red");
        playerOneBtn.setAttribute("disabled", "");
        playerTwoBtn.setAttribute("disabled", "");

        isGameOver = true;
      }
    }
  });

// Player 2
document
  .querySelector(".playerTwo-Btn ")
  .addEventListener("click", function clickPlayerTwo() {
    if (!isGameOver) {
      playerTwoScore++;
      playerTwoDisplay.textContent = playerTwoScore;
      if (playerTwoScore == winningNumber.value) {
        playerTwoDisplay.classList.add("green");
        playerOneDisplay.classList.add("red");
        playerOneBtn.setAttribute("disabled", "");
        playerTwoBtn.setAttribute("disabled", "");
        isGameOver = true;
      }
    }
  });

// Winning Number
winningNumber.addEventListener("change", function () {
  reset();
});

// Reset
resetBtn.addEventListener("click", reset);
function reset() {
  // Player 1
  playerOneDisplay.textContent = 0;
  playerOneScore = 0;
  playerOneDisplay.classList.remove("green", "red");
  // Player 2
  playerTwoDisplay.textContent = 0;
  playerTwoScore = 0;
  playerTwoDisplay.classList.remove("green", "red");
  // remove disabled
  playerOneBtn.removeAttribute("disabled", "");
  playerTwoBtn.removeAttribute("disabled", "");
  // Game State
  isGameOver = false;
}
