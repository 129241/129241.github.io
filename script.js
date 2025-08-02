const board = document.getElementById("board");
const statusText = document.getElementById("status");

let currentPlayer = "X";
let cells = Array(9).fill(null);
let gameOver = false;

function createBoard() {
  board.innerHTML = "";
  cells = Array(9).fill(null);
  gameOver = false;
  currentPlayer = "X";
  statusText.textContent = `Player ${currentPlayer}'s turn`;

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    cell.addEventListener("click", handleClick);
    board.appendChild(cell);
  }
}

function handleClick(e) {
  const index = e.target.dataset.index;

  if (cells[index] || gameOver) return;

  cells[index] = currentPlayer;
  const mark = document.createElement("span");
mark.textContent = currentPlayer;
mark.className = currentPlayer === "X" ? "x" : "o";
e.target.appendChild(mark);


  if (checkWinner()) {
    statusText.textContent = `Player ${currentPlayer} wins!`;
    gameOver = true;
  } else if (cells.every(cell => cell)) {
    statusText.textContent = "It's a draw!";
    gameOver = true;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function checkWinner() {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]           // diagonals
  ];

  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return cells[a] && cells[a] === cells[b] && cells[a] === cells[c];
  });
}

function restartGame() {
  createBoard();
}

// Initialize the game
createBoard();
