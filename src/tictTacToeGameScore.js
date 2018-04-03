/*global TicTacToeGameStatus*/

class TicTacToeGameScore { // eslint-disable-line no-unused-vars
    constructor() {
        this.scorePlayerX = 0;
        this.scorePlayerO = 0;
        this.numberOfDraws = 0;
    }

    update(status) {
        if (status === TicTacToeGameStatus.STATUS_X_WINS) {
            this.scorePlayerX++;
        } else if (status === TicTacToeGameStatus.STATUS_O_WINS) {
            this.scorePlayerO++;
        } else if (status === TicTacToeGameStatus.STATUS_DRAW) {
            this.numberOfDraws++;
        }
    }
}
