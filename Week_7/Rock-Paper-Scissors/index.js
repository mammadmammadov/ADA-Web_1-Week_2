// const moves = ["rock", "paper", "scissors"];

// let score = 0

// let winner = null;
// if (player1Move === player2Move) {
//   winner = "draw";
//   document.querySelector("#result h2").innerHTML = "Draw";
// } else {
//   if (player1Move === "rock" && player2Move === "scissors") {
//     winner = "Player 1";
//   } else if (player1Move === "scissors" && player2Move === "paper") {
//     winner = "Player 1";
//   } else if (player1Move === "paper" && player2Move === "rock") {
//     winner = "Player 1";
//   } else {
//     winner = "Player 2";
//   }

//   document.querySelector("#result h2").innerHTML = `${winner} wins!`;
// }






function updateClass(move) {
  if (move === "#rock") {
    return "./images/paper.png";
  } else if (move === "#scissors") {
    return "./images/scissor.png";
  } else {
    return "./images/rock.png";
  }
}

const moves = ["rock", "paper", "scissors"];

let overallScore = 0;
let round = 1;

document.querySelector("#start-round").addEventListener("click", startRound);

document.querySelector("#rock").addEventListener("click", userMove);
document.querySelector("#paper").addEventListener("click", userMove);
document.querySelector("#scissors").addEventListener("click", userMove);
let startRoundText = "";
function startRound() {
 
  if (
    !document.querySelector("#rock").disabled ||
    !document.querySelector("#paper").disabled ||
    !document.querySelector("#scissors").disabled
  ) {
    startRoundText = `Start round ${round}`;
  }

  document.querySelector("#rock").disabled = false;
  document.querySelector("#paper").disabled = false;
  document.querySelector("#scissors").disabled = false;
}

function userMove(e) {


  document.querySelector("#rock").disabled = true;
  document.querySelector("#paper").disabled = true;
  document.querySelector("#scissors").disabled = true;
  document.querySelector("#start-round").innerHTML = `Start round ${++round}`;

  const playerMove = e.target.id;

  
  const computerMove = moves[Math.floor(Math.random() * moves.length)];
  document.querySelector("#img1").src = updateClass(playerMove);
  document.querySelector("#img2").src = updateClass(computerMove);

  
  let winner = null;
  if (playerMove === computerMove) {
    winner = "draw";
  } else if (playerMove === "rock" && computerMove === "scissors") {
    winner = "player1";
  } else if (playerMove === "scissors" && computerMove === "paper") {
    winner = "player1";
  } else if (playerMove === "paper" && computerMove === "rock") {
    winner = "player1";
  } else {
    winner = "player2";
  }

  if (winner === "player1") {
    overallScore++;
  }

  document.querySelector("#overall-score").innerHTML = `Overall Score: ${overallScore}`

  displayResults(winner);
}


function displayResults(winner) {
  let resultText = "";
  if (winner === "draw") {
    resultText = "It's a draw!";
  } else if (winner === "player1") {
    resultText = "Player 1 wins!";
  } else {
    resultText = "Player 2 wins!";
  }
  document.querySelector("#result h2").textContent = resultText;
}


