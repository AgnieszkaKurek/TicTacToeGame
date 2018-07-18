import { TicTacToeGame } from './ticTacToeGame';
import { TicTacToeGameScore } from './tictTacToeGameScore';
import { TicTacToeGameBoxRenderer } from './ticTacToeGameBoxRenderer';
import { TicTacToeGameRenderer } from './ticTacToeGameRenderer';

export function ticTacToeGameCaller() {
    const game = new TicTacToeGame();
    const score = new TicTacToeGameScore();
    const boxRenderer = new TicTacToeGameBoxRenderer();
    const renderer = new TicTacToeGameRenderer(game, score, boxRenderer);
    renderer.init();
    console.log('test');
}
