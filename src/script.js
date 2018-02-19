/*global TicTacToeGame*/

const game = new TicTacToeGame();
const canvasInitialSize = 150;
const lineWithdth = 10;

function drawX(box) {
  const ctx = initDrawing(box);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(canvasInitialSize, canvasInitialSize);
  ctx.moveTo(0, canvasInitialSize);
  ctx.lineTo(canvasInitialSize, 0);
  ctx.strokeStyle = '#388e3c';
  ctx.stroke();
}

function drawO(box) {
  const ctx = initDrawing(box);
  ctx.arc(canvasInitialSize/2, canvasInitialSize/2, canvasInitialSize/2 - 2 * lineWithdth, 0, 2 * Math.PI, false);
  ctx.strokeStyle = '#ff3399';
  ctx.stroke();
}

function initDrawing(box){
  const canvas = box.childNodes[0];
  const ctx = canvas.getContext("2d");
  ctx.lineWidth = lineWithdth;
  return ctx;
}

function handleMove(box) {
  const position = box.getAttribute("data-position");
  const currentPlayer = game.next;
}

const boxes = document.getElementsByClassName("box");
for (const box of boxes) {
  box.addEventListener("click", () => handleMove(box));
}
