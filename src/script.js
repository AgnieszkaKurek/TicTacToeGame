/*global TicTacToeGame*/

const game = new TicTacToeGame();

function drawX(ctx) {
  ctx.beginPath();
  ctx.moveTo(5, 5);
  ctx.lineTo(285, 145);
  ctx.moveTo(5, 145);
  ctx.lineTo(285, 5);
  ctx.strokeStyle = '#388e3c';
  ctx.lineWidth = 10;
  ctx.stroke();
}

function drawO(ctx) {
  ctx.arc(150, 80, 60, 0, 2 * Math.PI);
  ctx.lineWidth = 10;
  ctx.strokeStyle = '#ff3399';
  ctx.stroke();
}


function handleMove(box) {
  const canvas = box.childNodes[0];
  const ctx = canvas.getContext("2d");
  drawX(ctx);
  const position = box.getAttribute("data-position");
  console.log(position);
}

const boxes = document.getElementsByClassName("box");
for (const box of boxes) {
  box.addEventListener("click", () => handleMove(box));
}
