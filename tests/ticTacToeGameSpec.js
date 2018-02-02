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

    it('x should start the game', () => {
        const game = new TicTacToeGame();
        expect(game.next).toEqual('x');
    });

    it('first move should set x in appropriate position and change player to o', () => {
        const game = new TicTacToeGame();
        const wasSuccessfull = game.move(0);
        expect(game.board).toEqual(['x', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
        expect(game.next).toEqual('o');
        expect(wasSuccessfull).toEqual(true);
    });

    it('two moves should set x and o in appropriate positions and next player should be x', () => {
        const game = new TicTacToeGame();
        game.move(0); //x
        game.move(2); //o
        expect(game.board).toEqual(['x', undefined, 'o', undefined, undefined, undefined, undefined, undefined, undefined]);
        expect(game.next).toEqual('x');
    });
    it('if the next move is carried out in the occupied position, board and next move doesn,t changes', () => {
        const game = new TicTacToeGame();
        game.move(0); //x
        game.move(2); //o
        const wasSuccessfull = game.move(2); //x
        expect(game.board).toEqual(['x', undefined, 'o', undefined, undefined, undefined, undefined, undefined, undefined]);
        expect(game.next).toEqual('x');
        expect(wasSuccessfull).toEqual(false);
    });
    it('if x occurs cells in one line, x win', () => {
        const game = new TicTacToeGame();
        game.move(0); //x
        game.move(3); //o
        game.move(1); //x
        game.move(4); //o
        game.move(2); //x
        expect(game.board).toEqual(['x', 'x', 'x', 'o', 'o', undefined, undefined, undefined, undefined]);
        expect(game.status()).toEqual('x');
    });
    it('if o occurs cells in one line, o win', () => {
        const game = new TicTacToeGame();
        game.move(1); //x
        game.move(2); //o
        game.move(5); //x
        game.move(4); //o
        game.move(7); //x
        game.move(6); //o
        expect(game.board).toEqual([undefined, 'x', 'o', undefined, 'o', 'x', 'o', 'x', undefined]);
        expect(game.status()).toEqual('o');
    });

    it('if neither x nor o occupy cells in one line and empty spaces left, game is unfinished', () => {
        const game = new TicTacToeGame();
        game.move(0); //x
        game.move(2); //o
        game.move(1); //x
        game.move(3); //o
        game.move(5); //x
        game.move(4); //o
        game.move(6); //x
        game.move(7); //o
        expect(game.board).toEqual(['x', 'x', 'o', 'o', 'o', 'x', 'x', 'o', undefined]);
        expect(game.status()).toEqual('UNFINISHED');
    });

 it('if neither x nor o occupy cells in one line and any spaces left, game is draw', () => {
        const game = new TicTacToeGame();
        game.move(0); //x
        game.move(2); //o
        game.move(1); //x
        game.move(3); //o
        game.move(5); //x
        game.move(4); //o
        game.move(6); //x
        game.move(7); //o
        game.move(8); //x
        expect(game.board).toEqual(['x', 'x', 'o', 'o', 'o', 'x', 'x', 'o', 'x']);
        expect(game.status()).toEqual('DRAW');
    });
});

