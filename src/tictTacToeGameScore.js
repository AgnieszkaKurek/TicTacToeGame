import {TicTacToeGameStatus} from './ticTacToeGameStatus';

export class TicTacToeGameScore {
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
