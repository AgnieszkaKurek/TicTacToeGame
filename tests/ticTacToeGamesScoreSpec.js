/*global TicTacToeGameScore*/
/*global TicTacToeGameStatus*/

describe('TicTacToeGameScore', () => {
    let score;

    beforeEach(() => {
        score = new TicTacToeGameScore();
    });

    it('Given game, when the game is started, then playerX has zero points', () => {
        expect(score.scorePlayerX).toEqual(0);
    });

    it('Given game, when the game is started, then playerO has zero points', () => {
        expect(score.scorePlayerO).toEqual(0);
    });

    it('Given game, when the game is started, then the number of draws is zero', () => {
        expect(score.numberOfDraws).toEqual(0);
    });

    it('Given scorePlayerX is 0, when player X win, then scorePlayerX is 1', () => {
        score.update(TicTacToeGameStatus.STATUS_X_WINS);
        expect(score.scorePlayerX).toEqual(1);
    });

    it('Given scorePlayerO is 0, when player O win, then scorePlayerO is 1', () => {
        score.update(TicTacToeGameStatus.STATUS_O_WINS);
        expect(score.scorePlayerO).toEqual(1);
    });

    it('Given number of draw is 0, when all board cells are occupied and none of the players wins, then number of draw is 1', () => {
        score.update(TicTacToeGameStatus.STATUS_DRAW);
        expect(score.numberOfDraws).toEqual(1);
    });

    it('Given all score are 0, when game is unfinished, then scores players and number of draw are not changes', () => {
        score.update(TicTacToeGameStatus.STATUS_UNFINISHED);
        expect(score.scorePlayerX).toEqual(0);
        expect(score.scorePlayerO).toEqual(0);
        expect(score.numberOfDraws).toEqual(0);
    });
});