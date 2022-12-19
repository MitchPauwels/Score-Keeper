// UI var
const winningNumber = document.querySelector("#select-games");
const resetBtn = document.querySelector(".reset-Btn ");

// Player Objects

p1 = {
  score: 0,
  button: document.querySelector(".playerOne-Btn"),
  display: document.querySelector(".score-player-one"),
};

p2 = {
  score: 0,
  button: document.querySelector(".playerTwo-Btn"),
  display: document.querySelector(".score-player-two"),
};

// default score
p1.display.innerText = p1.score;
p2.display.innerText = p2.score;

// Game State
let isGameOver = false;

// ------------- Event Listeners ----------------

// Update Score
function updateScore(player, oponent) {
  if (!isGameOver) {
    player.score++;
    player.display.textContent = player.score;
    if (player.score == winningNumber.value) {
      isGameOver = true;
      player.display.classList.add("green");
      oponent.display.classList.add("red");
      player.button.setAttribute("disabled", "");
      oponent.button.setAttribute("disabled", "");
    }
  }
}

// Player 1
p1.button.addEventListener("click", function () {
  updateScore(p1, p2);
});

// Player 2
p2.button.addEventListener("click", function () {
  updateScore(p2, p1);
});

// Winning Number
winningNumber.addEventListener("change", function () {
  reset();
});

//reset
// function resetField(player, oponent) {
//   // Player / oponent Reset
//   player.display.textContent = 0;
//   oponent.display.textContent = 0;
//   player.score = 0;
//   oponent.score = 0;
//   player.display.classList.remove("green", "red");
//   oponent.display.classList.remove("green", "red");
//   // remove disabled
//   player.button.removeAttribute("disabled", "");
//   oponent.button.removeAttribute("disabled", "");
//   // Game State
//   isGameOver = false;
// }

//reset with loop
function resetFieldWithLoop() {
  for (p of [p1, p2]) {
    p.display.textContent = 0;
    p.score = 0;
    p.display.classList.remove("green", "red");
    p.button.removeAttribute("disabled", "");
  }
  isGameOver = false;
}

// Reset
resetBtn.addEventListener("click", reset);
function reset() {
  //   resetField(p1, p2);
  resetFieldWithLoop();
}
