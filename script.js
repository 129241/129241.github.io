document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for internal links
    const links = document.querySelectorAll("nav ul li a");

    for (const link of links) {
        link.addEventListener("click", function(e) {
            const href = link.getAttribute("href");
            // Check if the link is internal (starts with '#')
            if (href.startsWith("#")) {
                e.preventDefault();

                const targetID = href.substring(1);
                const targetSection = document.getElementById(targetID);

                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
            // Allow default behavior for external links (those not starting with '#')
        });
const board = document.getElementById("board");
const statusText = document.getElementById("status");
let currentPlayer = "X";
let cells = Array(9).fill(null);

function createBoard() {
  board.innerHTML = "";
  cells = Array(9).fill(null);
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.index = i;
    cell.addEventListener("click", handleMove);
    board.appendChild(cell);
  }
  statusText.textContent = `Player ${currentPlayer}s turn`;
}

function handleMove(e) {
  const index = e.target.dataset.index;
  if (cells[index] || checkWinner()) return;

  cells[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  if (checkWinner()) {
    statusText.textContent = `Player ${currentPlayer} Wins!`;
  } else if (cells.every(cell => cell)) {
    statusText.textContent = "Tie!";
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}s turn`;
  }
}

function checkWinner() {
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8], // rows
    [0,3,6],[1,4,7],[2,5,8], // cols
    [0,4,8],[2,4,6]          // diagonals
  ];

  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return cells[a] && cells[a] === cells[b] && cells[a] === cells[c];
  });
}

function restartGame() {
  currentPlayer = "X";
  createBoard();
}

createBoard();
