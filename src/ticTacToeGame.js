class TicTacToeGame {// eslint-disable-line no-unused-vars
    constructor() {
        this.board = new Array(9);
        this._x = 'x';
        this._o = 'o';
        this.next = this._x;
    }

    move(position) {
        if (this.board[position] === undefined) {
            this.board[position] = this.next;
            this.next = this.next === this._x ? this._o : this._x;
            return true;
        }
        return false;
    }

    status() {
        if (this._isWinningCombination(0, 1, 2)) return this.board[0];
        if (this._isWinningCombination(3, 4, 5)) return this.board[3];
        if (this._isWinningCombination(6, 7, 8)) return this.board[6];
        if (this._isWinningCombination(0, 3, 6)) return this.board[0];
        if (this._isWinningCombination(1, 4, 7)) return this.board[1];
        if (this._isWinningCombination(2, 5, 8)) return this.board[2];
        if (this._isWinningCombination(0, 4, 8)) return this.board[0];
        if (this._isWinningCombination(2, 4, 6)) return this.board[2];
        if (this._isWinningCombination(2, 4, 6)) return this.board[2];
        if (this.board.includes(undefined)) return 'UNFINISHED';
        return 'DRAW';
    }

    _isWinningCombination(i1, i2, i3) {
        return this.board[i1] !== undefined &&
            this.board[i1] === this.board[i2] &&
            this.board[i2] === this.board[i3];
    }
}
