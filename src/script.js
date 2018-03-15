/*global TickTackToGameStatus*/
/*global TickTackToGamePlayers*/
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
  ctx.arc(canvasInitialSize / 2, canvasInitialSize / 2, canvasInitialSize / 2 - 2 * lineWithdth, 0, 2 * Math.PI, false);
  ctx.strokeStyle = '#ff3399';
  ctx.stroke();
}

function initDrawing(box) {
  const canvas = box.childNodes[0];
  const ctx = canvas.getContext("2d");
  ctx.lineWidth = lineWithdth;
  return ctx;
}

function handleMove(box) {
  const position = box.getAttribute("data-position");
  const currentPlayer = game.next;
  if (game.move(position)) {
    if (currentPlayer === TickTackToGamePlayers.X) {
      drawX(box);
    } else {
      drawO(box);
    }
  }
  const status = game.status();
 
  if (status === TickTackToGameStatus.STATUS_X_WINS) {
    const element = document.getElementById("winnerX");
    element.classList.add("showStatus");
  } else if (status === TickTackToGameStatus.STATUS_O_WINS) {
    element = document.getElementById("winnerO");
    element.classList.add("showStatus");
   // document.getElementById("winnerO").style.display = 'block';
  } else if (status === TickTackToGameStatus.STATUS_DRAW) {
    element = document.getElementById("draw");
    element.classList.add("showStatus");
  }

}

const boxes = document.getElementsByClassName("box");
for (const box of boxes) {
  box.addEventListener("click", () => handleMove(box));
}