/*global TicTacToeGame*/

const game = new TicTacToeGame();

function drawX(ctx){
  ctx.beginPath();
  ctx.moveTo(25, 25);
  ctx.lineTo(105, 105);
  ctx.moveTo(25, 105);
  ctx.lineTo(105, 25);
  ctx.strokeStyle = '#388e3c';
  ctx.lineWidth = 8;
  ctx.stroke();
}

function drawO(ctx){
  ctx.arc(65, 50, 45, 0, 2 * Math.PI);
  ctx.lineWidth = 8;
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
