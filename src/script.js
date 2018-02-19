/*global TicTacToeGame*/

const game = new TicTacToeGame();
const canvasInitialSize = 150;
const lineWithdth = 10;

function drawX(ctx) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(canvasInitialSize, canvasInitialSize);
  ctx.moveTo(0, canvasInitialSize);
  ctx.lineTo(canvasInitialSize, 0);
  ctx.strokeStyle = '#388e3c';
  ctx.lineWidth = lineWithdth;
  ctx.stroke();
}

function drawO(ctx) {
  ctx.arc(canvasInitialSize/2, canvasInitialSize/2, canvasInitialSize/2 - 2 * lineWithdth, 0, 2 * Math.PI, false);
  ctx.lineWidth = lineWithdth;
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
