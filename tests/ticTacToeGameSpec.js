/*global TicTacToeGameStatus*/
/*global TicTacToeGamePlayers*/
/*global TicTacToeGame*/


describe('TicTacToeGame', () => {
    let game;

    beforeEach(() => {
        game = new TicTacToeGame();
    });

    it('Given game, when game begins, then contains a board', () => {
        expect(game.board).toBeDefined();
    });

    it('Given game, when game begins, then board is of 9 empty elements', () => {
        expect(game.board).toEqual([undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
    });

    it('Given game, when game begins, then X player should start', () => {
        expect(game.nextPlayer).toEqual(TicTacToeGamePlayers.X);
    });

    it('Given game, when move once, then next player should be X', () => {
        const wasSuccessfull = game.move(0);
        expect(game.board).toEqual([TicTacToeGamePlayers.X, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
        expect(game.nextPlayer).toEqual(TicTacToeGamePlayers.O);
        expect(wasSuccessfull).toEqual(true);
    });

    it('Given game, when move twice, then next player should be O', () => {
        game.move(0); //x
        game.move(2); //o
        expect(game.board).toEqual([TicTacToeGamePlayers.X, undefined, TicTacToeGamePlayers.O, undefined, undefined, undefined, undefined, undefined, undefined]);
        expect(game.nextPlayer).toEqual(TicTacToeGamePlayers.X);
    });
    it('Given game, when player moved carried out in the occupied position, than board and nextPlayer move doesn,t changes', () => {
        game.move(0); //x
        game.move(2); //o
        const wasSuccessfull = game.move(2); //x
        expect(game.board).toEqual([TicTacToeGamePlayers.X, undefined, TicTacToeGamePlayers.O, undefined, undefined, undefined, undefined, undefined, undefined]);
        expect(game.nextPlayer).toEqual(TicTacToeGamePlayers.X);
        expect(wasSuccessfull).toEqual(false);
    });
    it('Given game, when moves makes and X occurs in all cells of one line, then X wins', () => {
        game.move(0); //x
        game.move(3); //o
        game.move(1); //x
        game.move(4); //o
        game.move(2); //x
        expect(game.board).toEqual([TicTacToeGamePlayers.X, TicTacToeGamePlayers.X, TicTacToeGamePlayers.X, TicTacToeGamePlayers.O, TicTacToeGamePlayers.O, undefined, undefined, undefined, undefined]);
        expect(game.status()).toEqual(TicTacToeGameStatus.STATUS_X_WINS);
    });
    it('Given game, when moves makes and O occurs in all cells of one line, then O wins', () => {
        game.move(1); //x
        game.move(2); //o
        game.move(5); //x
        game.move(4); //o
        game.move(7); //x
        game.move(6); //o
        expect(game.board).toEqual([undefined, TicTacToeGamePlayers.X, TicTacToeGamePlayers.O, undefined, TicTacToeGamePlayers.O, TicTacToeGamePlayers.X, TicTacToeGamePlayers.O, TicTacToeGamePlayers.X, undefined]);
        expect(game.status()).toEqual(TicTacToeGameStatus.STATUS_O_WINS);
    });

    it('Given game, when moves makes and neither x nor o occupy cells in one line and empty spaces left, then game is unfinished', () => {
        game.move(0); //x
        game.move(2); //o
        game.move(1); //x
        game.move(3); //o
        game.move(5); //x
        game.move(4); //o
        game.move(6); //x
        game.move(7); //o
        expect(game.board).toEqual([TicTacToeGamePlayers.X, TicTacToeGamePlayers.X, TicTacToeGamePlayers.O, TicTacToeGamePlayers.O, TicTacToeGamePlayers.O, TicTacToeGamePlayers.X, TicTacToeGamePlayers.X, TicTacToeGamePlayers.O, undefined]);
        expect(game.status()).toEqual(TicTacToeGameStatus.STATUS_UNFINISHED);
    });

    it('Given game status, when moves makes and neither x nor o occupy cells in one line and any spaces left, then game is draw', () => {
        game.move(0); //x
        game.move(2); //o
        game.move(1); //x
        game.move(3); //o
        game.move(5); //x
        game.move(4); //o
        game.move(6); //x
        game.move(7); //o
        game.move(8); //x
        expect(game.board).toEqual([TicTacToeGamePlayers.X, TicTacToeGamePlayers.X, TicTacToeGamePlayers.O, TicTacToeGamePlayers.O, TicTacToeGamePlayers.O, TicTacToeGamePlayers.X, TicTacToeGamePlayers.X, TicTacToeGamePlayers.O, TicTacToeGamePlayers.X]);
        expect(game.status()).toEqual(TicTacToeGameStatus.STATUS_DRAW);
    });

    it('Given game, when game is reseted, then player O starts game', () => {
        game.reset();
        expect(game.nextPlayer).toEqual(TicTacToeGamePlayers.O);
    });

    it('Given game, when game has 2 moves and is reseted, then O starts nextPlayer game', () => {
        game.move(0);//x
        game.move(1);//o
        game.reset();
        expect(game.nextPlayer).toEqual(TicTacToeGamePlayers.O);
    });

    it('Given game, when game has 3 moves and is reseted, then O starts nextPlayer game', () => {
        game.move(0);//x
        game.move(1);//o
        game.move(2);//x
        game.reset();
        expect(game.nextPlayer).toEqual(TicTacToeGamePlayers.O);
    });

    it('Given game, when game is reseted twice, then X starts nextPlayer game', () => {
        game.reset();
        game.reset();
        expect(game.nextPlayer).toEqual(TicTacToeGamePlayers.X);
    });
});

