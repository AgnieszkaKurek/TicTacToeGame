import TicTacToeGameScore from './../src/tictTacToeGameScore';
import TicTacToeGameStatus from './../src/ticTacToeGameStatus';

describe('TicTacToeGameScore', () => {
    let score;

    beforeEach(() => {
        score = new TicTacToeGameScore();
    });

    it('Given score, when the score is started, then playerX has zero points', () => {
        expect(score.scorePlayerX).toEqual(0);
    });

    it('Given score, when the score is started, then playerO has zero points', () => {
        expect(score.scorePlayerO).toEqual(0);
    });

    it('Given score, when the score is started, then the number of draws is zero', () => {
        expect(score.numberOfDraws).toEqual(0);
    });

    it('Given player X has 0 wins, when player X wins, then player X has 1 win', () => {
        score.update(TicTacToeGameStatus.STATUS_X_WINS);
        expect(score.scorePlayerX).toEqual(1);
    });

    it('Given player O has 0 wins, when player O wins, then player O has 1 win', () => {
        score.update(TicTacToeGameStatus.STATUS_O_WINS);
        expect(score.scorePlayerO).toEqual(1);
    });

    it('Given number of draw is 0, when all board cells are occupied and none of the players wins, then number of draw is 1', () => {
        score.update(TicTacToeGameStatus.STATUS_DRAW);
        expect(score.numberOfDraws).toEqual(1);
    });

    it('Given all score are 0, when game is unfinished, then scores players and number of draw are not changed', () => {
        score.update(TicTacToeGameStatus.STATUS_UNFINISHED);
        expect(score.scorePlayerX).toEqual(0);
        expect(score.scorePlayerO).toEqual(0);
        expect(score.numberOfDraws).toEqual(0);
    });
});