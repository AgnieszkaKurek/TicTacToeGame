/*global TicTacToeGameStatus*/
/*global TicTacToeGamePlayers*/

class TicTacToeGame {// eslint-disable-line no-unused-vars
    constructor() {
        this.reset();
    }

    reset() {
        this.board = new Array(9);
        this.startingPlayer = this.startingPlayer === TicTacToeGamePlayers.X ? TicTacToeGamePlayers.O : TicTacToeGamePlayers.X;
        this.nextPlayer = this.startingPlayer;
    }

    move(position) {
        if (this.isPositionEmpty(position)) {
            this.board[position] = this.nextPlayer;
            this.nextPlayer = this.nextPlayer === TicTacToeGamePlayers.X ? TicTacToeGamePlayers.O : TicTacToeGamePlayers.X;
            return true;
        }
        return false;
    }

    isPositionEmpty(position) {
        return this.board[position] === undefined;
    }

    status() {
        const possibleWinningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (const combination of possibleWinningCombinations) {
            if (this._isWinningCombination(...combination)) {
                return this.board[combination[0]] === TicTacToeGamePlayers.X ? TicTacToeGameStatus.STATUS_X_WINS : TicTacToeGameStatus.STATUS_O_WINS;
            }
        }
        if (this.board.includes(undefined)) return TicTacToeGameStatus.STATUS_UNFINISHED;
        return TicTacToeGameStatus.STATUS_DRAW;
    }

    _isWinningCombination(i1, i2, i3) {
        return this.board[i1] !== undefined &&
            this.board[i1] === this.board[i2] &&
            this.board[i2] === this.board[i3];
    }
}
