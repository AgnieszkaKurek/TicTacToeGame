/*global TicTacToeGameStatus*/
/*global TicTacToeGamePlayers*/

class TicTacToeGameRenderer {// eslint-disable-line no-unused-vars
    constructor(game, score) {
        this.game = game;
        this.score = score;
        this.canvasInitialSize = 150;
        this.lineWithdth = 10;
    }

    init() {
        this._interateBoxes((box) => {
            box.addEventListener("click", () => this._handleMove(box));
        });
        document.getElementById("reset-game").addEventListener("click", () => {
            this.game.reset();
            this._resetRenderer();
        });
        this._showElement(this.game.nextPlayer === TicTacToeGamePlayers.X ? "playerX" : "playerO");
        this._displayScore();
    }

    _interateBoxes(handler) {
        const boxes = document.getElementsByClassName("box");
        for (const box of boxes) {
            handler(box);
        }
    }

    _resetRenderer() {
        this._showElement("playerInfo");
        this._interateBoxes((box) => {
            const canvas = this._getCanvasFromBox(box);
            canvas.width = canvas.height = this.canvasInitialSize;
            for (const statusItems of document.getElementsByClassName("status")) {
                statusItems.classList.add("invisible");
            }
        });
    }

    _drawX(box) {
        const ctx = this._initDrawing(box);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(this.canvasInitialSize, this.canvasInitialSize);
        ctx.moveTo(0, this.canvasInitialSize);
        ctx.lineTo(this.canvasInitialSize, 0);
        ctx.strokeStyle = '#388e3c';
        ctx.stroke();
    }

    _drawO(box) {
        const ctx = this._initDrawing(box);
        ctx.arc(this.canvasInitialSize / 2, this.canvasInitialSize / 2,
            this.canvasInitialSize / 2 - 2 * this.lineWithdth, 0, 2 * Math.PI, false);
        ctx.strokeStyle = '#ff3399';
        ctx.stroke();
    }

    _getCanvasFromBox(box) {
        return box.children[0];
    }

    _initDrawing(box) {
        const canvas = this._getCanvasFromBox(box);
        const ctx = canvas.getContext("2d");
        ctx.lineWidth = this.lineWithdth;
        return ctx;
    }

    _handleMove(box) {
        if (this.game.status() !== TicTacToeGameStatus.STATUS_UNFINISHED) return;
        const position = box.getAttribute("data-position");
        const currentPlayer = this.game.nextPlayer;
        if (this.game.move(position)) {
            if (currentPlayer === TicTacToeGamePlayers.X) {
                this._hideElement("playerX");
                this._showElement("playerO");
                this._drawX(box);
            } else {
                this._hideElement("playerO");
                this._showElement("playerX");
                this._drawO(box);
            }
            this._handleStatus();
        }
    }

    _handleStatus() {
        const status = this.game.status();
        this.score.update(status);
        let gameEndId = status === TicTacToeGameStatus.STATUS_X_WINS ? "winnerX" :
            status === TicTacToeGameStatus.STATUS_O_WINS ? "winnerO" :
                status === TicTacToeGameStatus.STATUS_DRAW ? "draw" : undefined;
        if (gameEndId) {
            this._showElement(gameEndId);
            this._showElement("reset-game");
            this._hideElement("playerInfo");
            this._displayScore();
        }
    }

    _showElement(id) {
        document.getElementById(id).classList.remove("invisible");
    }

    _hideElement(id) {
        document.getElementById(id).classList.add("invisible");
    }

    _displayScore() {
        this._dispalyValueInElement("scorePlayerX", this.score.scorePlayerX);
        this._dispalyValueInElement("scorePlayerO", this.score.scorePlayerO);
        this._dispalyValueInElement("numberOfDraws", this.score.numberOfDraws);
    }

    _dispalyValueInElement(elementId, value) {
        document.getElementById(elementId).innerHTML = value;
    }
}