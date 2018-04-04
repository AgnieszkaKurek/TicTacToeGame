/*global TicTacToeGame*/
/*global TicTacToeGameRenderer*/
/*global TicTacToeGameScore*/

(function () {
  const game = new TicTacToeGame();
  const score = new TicTacToeGameScore();
  const renderer = new TicTacToeGameRenderer(game, score);
  renderer.init();
})();
