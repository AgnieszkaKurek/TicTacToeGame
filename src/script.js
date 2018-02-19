/*global TicTacToeGame*/

const game = new TicTacToeGame();

function drawX(ctx) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(150, 150);
  ctx.moveTo(0, 150);
  ctx.lineTo(150, 0);
  ctx.strokeStyle = '#388e3c';
  ctx.lineWidth = 10;
  ctx.stroke();
}

function drawO(ctx) {
  ctx.arc(75, 75, 55, 0, 2 * Math.PI, false);
  ctx.lineWidth = 10;
  ctx.strokeStyle = '#ff3399';
  ctx.stroke();
}

function handleMove(box) {
  const canvas = box.childNodes[0];
  const ctx = canvas.getContext("2d");
  drawO(ctx);
  const position = box.getAttribute("data-position");
  console.log(position);
}

const boxes = document.getElementsByClassName("box");
for (const box of boxes) {
  box.addEventListener("click", () => handleMove(box));
}
