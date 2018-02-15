/*global TicTacToeGame*/

const game = new TicTacToeGame();

function handleMove(position) {
  console.log(position);
}

const boxes = document.getElementsByClassName("box");
for (const box of boxes) {
  const position = box.getAttribute("data-position");
  box.addEventListener("click", () => handleMove(position));
}
