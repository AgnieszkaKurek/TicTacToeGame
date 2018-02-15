/*global TicTacToeGame*/

const game = new TicTacToeGame();

function drawX(ctx) {
  ctx.beginPath();
  ctx.moveTo(20, 20);
  ctx.lineTo(250, 140);
  ctx.moveTo(20, 140);
  ctx.lineTo(250, 20);
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
