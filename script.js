let gameActive = false;

function startGame() {
  gameActive = true;
  document.getElementById("result").textContent = "Game Started! Choose your move.";
}

function stopGame() {
  gameActive = false;
  document.getElementById("result").textContent = "Game Stopped.";
}

function restartGame() {
  gameActive = false;
  document.getElementById("user-choice").textContent = "-";
  document.getElementById("computer-choice").textContent = "-";
  document.getElementById("result").textContent = "Click Play to Start!";
}

function playGame(userMove) {
  if (!gameActive) {
    alert("Please click ▶️ Play to start the game!");
    return;
  }

  const moves = ["rock", "paper", "scissors"];
  const symbols = {
    rock: "🪨",
    paper: "📄",
    scissors: "✂️"
  };

  const computerMove = moves[Math.floor(Math.random() * 3)];

  document.getElementById("user-choice").textContent = symbols[userMove];
  document.getElementById("computer-choice").textContent = symbols[computerMove];

  let result = "";

  if (userMove === computerMove) {
    result = "It's a Draw!";
  } else if (
    (userMove === "rock" && computerMove === "scissors") ||
    (userMove === "scissors" && computerMove === "paper") ||
    (userMove === "paper" && computerMove === "rock")
  ) {
    result = "🎉 You Win!";
  } else {
    result = "💻 Computer Wins!";
  }

  document.getElementById("result").textContent = result;
}
