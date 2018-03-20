const TicTacToeGameStatus = {
    STATUS_X_WINS: Symbol("x"),
    STATUS_O_WINS: Symbol("o"),
    STATUS_UNFINISHED: Symbol("UNFINISHED"),
    STATUS_DRAW: Symbol("DRAW")
};
Object.freeze(TicTacToeGameStatus);

const TicTacToeGamePlayers = {
    X: Symbol("x"),
    O: Symbol("o"),
};
Object.freeze(TicTacToeGamePlayers);

class TicTacToeGame {// eslint-disable-line no-unused-vars
    constructor() {
        this.board = new Array(9);
        this.next = TicTacToeGamePlayers.X;
    }

    move(position) {
        if (this.board[position] === undefined) {
            this.board[position] = this.next;
            this.next = this.next === TicTacToeGamePlayers.X ? TicTacToeGamePlayers.O : TicTacToeGamePlayers.X;
            return true;
        }
        return false;
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
