/*global TicTacToeGame*/
/*global TicTacToeGameRenderer*/
/*global TicTacToeGameScore*/
/*global TicTacToeGameBoxRenderer*/

(function () {
  const game = new TicTacToeGame();
  const score = new TicTacToeGameScore();
  const boxRenderer = new TicTacToeGameBoxRenderer();
  const renderer = new TicTacToeGameRenderer(game, score, boxRenderer);
  renderer.init();
})();
