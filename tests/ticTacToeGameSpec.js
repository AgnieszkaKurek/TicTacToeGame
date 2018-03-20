/*global TicTacToGameStatus*/
/*global TicTacToGamePlayers*/
/*global TicTacToeGame*/


describe('TicTacToeGame', () => {
    let game;

    beforeEach(() => {
        game = new TicTacToeGame();
    });

    it('contains a board', () => {
        expect(game.board).toBeDefined();
    });

    it('at the beggining the board is of 9 empty elements', () => {
        expect(game.board).toEqual([undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
    });

    it('x should start the game', () => {
        expect(game.next).toEqual(TicTacToGamePlayers.X);
    });

    it('first move should set x in appropriate position and change player to o', () => {
        const wasSuccessfull = game.move(0);
        expect(game.board).toEqual([TicTacToGamePlayers.X, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
        expect(game.next).toEqual(TicTacToGamePlayers.O);
        expect(wasSuccessfull).toEqual(true);
    });

    it('two moves should set x and o in appropriate positions and next player should be x', () => {
        game.move(0); //x
        game.move(2); //o
        expect(game.board).toEqual([TicTacToGamePlayers.X, undefined, TicTacToGamePlayers.O, undefined, undefined, undefined, undefined, undefined, undefined]);
        expect(game.next).toEqual(TicTacToGamePlayers.X);
    });
    it('if the next move is carried out in the occupied position, board and next move doesn,t changes', () => {
        game.move(0); //x
        game.move(2); //o
        const wasSuccessfull = game.move(2); //x
        expect(game.board).toEqual([TicTacToGamePlayers.X, undefined, TicTacToGamePlayers.O, undefined, undefined, undefined, undefined, undefined, undefined]);
        expect(game.next).toEqual(TicTacToGamePlayers.X);
        expect(wasSuccessfull).toEqual(false);
    });
    it('if x occurs in all cells of one line, x wins', () => {
        game.move(0); //x
        game.move(3); //o
        game.move(1); //x
        game.move(4); //o
        game.move(2); //x
        expect(game.board).toEqual([TicTacToGamePlayers.X, TicTacToGamePlayers.X, TicTacToGamePlayers.X, TicTacToGamePlayers.O, TicTacToGamePlayers.O, undefined, undefined, undefined, undefined]);
        expect(game.status()).toEqual(TicTacToGameStatus.STATUS_X_WINS);
    });
    it('if o occurs in all cells of one line, o wins', () => {
        game.move(1); //x
        game.move(2); //o
        game.move(5); //x
        game.move(4); //o
        game.move(7); //x
        game.move(6); //o
        expect(game.board).toEqual([undefined, TicTacToGamePlayers.X, TicTacToGamePlayers.O, undefined, TicTacToGamePlayers.O, TicTacToGamePlayers.X, TicTacToGamePlayers.O, TicTacToGamePlayers.X, undefined]);
        expect(game.status()).toEqual(TicTacToGameStatus.STATUS_O_WINS);
    });

    it('if neither x nor o occupy cells in one line and empty spaces left, game is unfinished', () => {
        game.move(0); //x
        game.move(2); //o
        game.move(1); //x
        game.move(3); //o
        game.move(5); //x
        game.move(4); //o
        game.move(6); //x
        game.move(7); //o
        expect(game.board).toEqual([TicTacToGamePlayers.X, TicTacToGamePlayers.X, TicTacToGamePlayers.O, TicTacToGamePlayers.O, TicTacToGamePlayers.O, TicTacToGamePlayers.X, TicTacToGamePlayers.X, TicTacToGamePlayers.O, undefined]);
        expect(game.status()).toEqual(TicTacToGameStatus.STATUS_UNFINISHED);
    });

    it('if neither x nor o occupy cells in one line and any spaces left, game is a draw', () => {
        game.move(0); //x
        game.move(2); //o
        game.move(1); //x
        game.move(3); //o
        game.move(5); //x
        game.move(4); //o
        game.move(6); //x
        game.move(7); //o
        game.move(8); //x
        expect(game.board).toEqual([TicTacToGamePlayers.X, TicTacToGamePlayers.X, TicTacToGamePlayers.O, TicTacToGamePlayers.O, TicTacToGamePlayers.O, TicTacToGamePlayers.X, TicTacToGamePlayers.X, TicTacToGamePlayers.O, TicTacToGamePlayers.X]);
        expect(game.status()).toEqual(TicTacToGameStatus.STATUS_DRAW);
    });
});

