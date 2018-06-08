/*global TicTacToeGameStatus*/
/*global TicTacToeGamePlayers*/
/*global TicTacToeCombination*/

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
        const winningCombination = this.getWinningCombination();
        if (winningCombination) {
            return this.board[winningCombination.position1] ===
                TicTacToeGamePlayers.X ? TicTacToeGameStatus.STATUS_X_WINS : TicTacToeGameStatus.STATUS_O_WINS;
        }
        if (this.board.includes(undefined)) return TicTacToeGameStatus.STATUS_UNFINISHED;
        return TicTacToeGameStatus.STATUS_DRAW;
    }

    getWinningCombination() {
        const possibleWinningCombinations = [
            new TicTacToeCombination(0, 1, 2),
            new TicTacToeCombination(3, 4, 5),
            new TicTacToeCombination(6, 7, 8),
            new TicTacToeCombination(0, 3, 6),
            new TicTacToeCombination(1, 4, 7),
            new TicTacToeCombination(2, 5, 8),
            new TicTacToeCombination(0, 4, 8),
            new TicTacToeCombination(2, 4, 6),
        ];
        return possibleWinningCombinations.find(combination => this._isWinningCombination(combination));
    }


    _isWinningCombination(combination) {
        return this.board[combination.position1] !== undefined &&
            this.board[combination.position1] === this.board[combination.position2] &&
            this.board[combination.position2] === this.board[combination.position3];
    }
}
