import {
    TicTacToeGame
} from '../src/ticTacToeGame.js';

describe('TicTacToeGame', () => {
    it('contains a board', () => {
        const game = new TicTacToeGame();
        expect(game.board).toBeDefined();
    });

    it('at the beggining the board is of 9 empty elements', () => {
        const game = new TicTacToeGame();
        expect(game.board).toEqual([undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
    });
});