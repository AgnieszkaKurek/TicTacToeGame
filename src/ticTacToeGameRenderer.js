/*global TickTackToGameStatus*/
/*global TickTackToGamePlayers*/

class TicTacToeGameRenderer {// eslint-disable-line no-unused-vars
    constructor(game) {
        this.game = game;
        this.canvasInitialSize = 150;
        this.lineWithdth = 10;
    }

    appendToActions() {
        const boxes = document.getElementsByClassName("box");
        for (const box of boxes) {
            box.addEventListener("click", () => this._handleMove(box));
        }
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

    _initDrawing(box) {
        const canvas = box.childNodes[0];
        const ctx = canvas.getContext("2d");
        ctx.lineWidth = this.lineWithdth;
        return ctx;
    }

    _handleMove(box) {
        const position = box.getAttribute("data-position");
        const currentPlayer = this.game.next;
        if (this.game.move(position)) {
            if (currentPlayer === TickTackToGamePlayers.X) {
                this._drawX(box);
            } else {
                this._drawO(box);
            }
            this._handleStatus();
        }
    }

    _handleStatus() {
        let affectedItemId;
        const status = this.game.status();
        if (status === TickTackToGameStatus.STATUS_X_WINS) {
            affectedItemId = "winnerX";
        } else if (status === TickTackToGameStatus.STATUS_O_WINS) {
            affectedItemId = "winnerO";
        } else if (status === TickTackToGameStatus.STATUS_DRAW) {
            affectedItemId = "draw";
        }
        if (affectedItemId) {
            const element = document.getElementById(affectedItemId);
            element.classList.remove("invisible");
            element.classList.add("changeStatusDisplay");
        }
    }
}