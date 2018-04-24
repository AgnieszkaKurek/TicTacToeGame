/*global TicTacToeGameStatus*/
/*global TicTacToeGamePlayers*/
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
        expect(game.nextPlayer).toEqual(TicTacToeGamePlayers.X);
    });

    it('first move should set x in appropriate position and change player to o', () => {
        const wasSuccessfull = game.move(0);
        expect(game.board).toEqual([TicTacToeGamePlayers.X, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
        expect(game.nextPlayer).toEqual(TicTacToeGamePlayers.O);
        expect(wasSuccessfull).toEqual(true);
    });

    it('two moves should set x and o in appropriate positions and nextPlayer player should be x', () => {
        game.move(0); //x
        game.move(2); //o
        expect(game.board).toEqual([TicTacToeGamePlayers.X, undefined, TicTacToeGamePlayers.O, undefined, undefined, undefined, undefined, undefined, undefined]);
        expect(game.nextPlayer).toEqual(TicTacToeGamePlayers.X);
    });
    it('if the nextPlayer move is carried out in the occupied position, board and nextPlayer move doesn,t changes', () => {
        game.move(0); //x
        game.move(2); //o
        const wasSuccessfull = game.move(2); //x
        expect(game.board).toEqual([TicTacToeGamePlayers.X, undefined, TicTacToeGamePlayers.O, undefined, undefined, undefined, undefined, undefined, undefined]);
        expect(game.nextPlayer).toEqual(TicTacToeGamePlayers.X);
        expect(wasSuccessfull).toEqual(false);
    });
    it('if x occurs in all cells of one line, x wins', () => {
        game.move(0); //x
        game.move(3); //o
        game.move(1); //x
        game.move(4); //o
        game.move(2); //x
        expect(game.board).toEqual([TicTacToeGamePlayers.X, TicTacToeGamePlayers.X, TicTacToeGamePlayers.X, TicTacToeGamePlayers.O, TicTacToeGamePlayers.O, undefined, undefined, undefined, undefined]);
        expect(game.status()).toEqual(TicTacToeGameStatus.STATUS_X_WINS);
    });
    it('if o occurs in all cells of one line, o wins', () => {
        game.move(1); //x
        game.move(2); //o
        game.move(5); //x
        game.move(4); //o
        game.move(7); //x
        game.move(6); //o
        expect(game.board).toEqual([undefined, TicTacToeGamePlayers.X, TicTacToeGamePlayers.O, undefined, TicTacToeGamePlayers.O, TicTacToeGamePlayers.X, TicTacToeGamePlayers.O, TicTacToeGamePlayers.X, undefined]);
        expect(game.status()).toEqual(TicTacToeGameStatus.STATUS_O_WINS);
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
        expect(game.board).toEqual([TicTacToeGamePlayers.X, TicTacToeGamePlayers.X, TicTacToeGamePlayers.O, TicTacToeGamePlayers.O, TicTacToeGamePlayers.O, TicTacToeGamePlayers.X, TicTacToeGamePlayers.X, TicTacToeGamePlayers.O, undefined]);
        expect(game.status()).toEqual(TicTacToeGameStatus.STATUS_UNFINISHED);
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
        expect(game.board).toEqual([TicTacToeGamePlayers.X, TicTacToeGamePlayers.X, TicTacToeGamePlayers.O, TicTacToeGamePlayers.O, TicTacToeGamePlayers.O, TicTacToeGamePlayers.X, TicTacToeGamePlayers.X, TicTacToeGamePlayers.O, TicTacToeGamePlayers.X]);
        expect(game.status()).toEqual(TicTacToeGameStatus.STATUS_DRAW);
    });

    it('Given X starts first game when game is reseted then O starts nextPlayer game', () => {
        game.reset();
        expect(game.nextPlayer).toEqual(TicTacToeGamePlayers.O);
    });

    it('Given X starts first game when game has 2 moves and is reseted then O starts nextPlayer game', () => {
        game.move(0);//x
        game.move(1);//o
        game.reset();
        expect(game.nextPlayer).toEqual(TicTacToeGamePlayers.O);
    });

    it('Given X starts first game when game has 3 moves and is reseted then O starts nextPlayer game', () => {
        game.move(0);//x
        game.move(1);//o
        game.move(2);//x
        game.reset();
        expect(game.nextPlayer).toEqual(TicTacToeGamePlayers.O);
    });

    it('Given X starts first game when game is reseted twice then X starts nextPlayer game', () => {
        game.reset();
        game.reset();
        expect(game.nextPlayer).toEqual(TicTacToeGamePlayers.X);
    });
});

