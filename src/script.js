/*global TicTacToeGame*/
/*global TicTacToeGameRenderer*/

(function(){
  const game = new TicTacToeGame();
  const renderer = new TicTacToeGameRenderer(game);
  renderer.appendToActions();
})();
