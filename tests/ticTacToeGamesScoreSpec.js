/*global TicTacToeGameScore*/
/*global TicTacToeGameStatus*/

describe('TicTacToeGameScore', () => {
    let score;

    beforeEach(() => {
        score = new TicTacToeGameScore();
    });

    it('at the beginning of the game, playerX has zero points', () => {
        expect(score.scorePlayerX).toEqual(0);
    });

    it('at the beginning of the game, playerO has zero points', () => {
        expect(score.scorePlayerO).toEqual(0);
    });

    it('at the beginning of the game, the number of draws is zero', () => {
        expect(score.numberOfDraws).toEqual(0);
    });

    it('if player x win, scorePlayerX is 1', () => {
        score.update(TicTacToeGameStatus.STATUS_X_WINS);
        expect(score.scorePlayerX).toEqual(1);
    });

    it('if player x win, scorePlayerX is 1', () => {
        score.update(TicTacToeGameStatus.STATUS_X_WINS);
        expect(score.scorePlayerX).toEqual(1);
    });

    it('if player x win, scorePlayerX is 1', () => {
        score.update(TicTacToeGameStatus.STATUS_O_WINS);
        expect(score.scorePlayerO).toEqual(1);
    });

    it('if player x win, scorePlayerX is 1', () => {
        score.update(TicTacToeGameStatus.STATUS_DRAW);
        expect(score.numberOfDraws).toEqual(1);
    });

    it('if player x win, scorePlayerX is 1', () => {
        score.update(TicTacToeGameStatus.STATUS_UNFINISHED);
        expect(score.scorePlayerX).toEqual(0);
        expect(score.scorePlayerO).toEqual(0);
        expect(score.numberOfDraws).toEqual(0);
    });
});