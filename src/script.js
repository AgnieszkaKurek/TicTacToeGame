/*global TicTacToeGame*/

const game = new TicTacToeGame();

function handleMove(position) {
  console.log(position);
}

const boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  const position = element.getAttribute("data-position");
  element.addEventListener("click", () => handleMove(position));
});

