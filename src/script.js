/*global TicTacToeGame*/

const game = new TicTacToeGame();

function handleMove(box) {
const canvas = box.childNodes[0];
console.log(canvas);
const position = box.getAttribute("data-position");
  console.log(position);
}

const boxes = document.getElementsByClassName("box");
for (const box of boxes) {

  box.addEventListener("click", () => handleMove(box));
}
