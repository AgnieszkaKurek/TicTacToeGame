/*global TicTacToeGameStatus*/
/*global TicTacToeGamePlayers*/
/*global TicTacToeGameBoxRenderer*/

class TicTacToeGameRenderer {// eslint-disable-line no-unused-vars
    constructor(game, score, boxRenderer) {
        this.game = game;
        this.score = score;
        this.boxRenderer = boxRenderer;
    }

    init() {
        this._iterateBoxes((box) => {
            box.addEventListener("click", () => this._handleMove(box));
        });
        document.getElementById("reset-game").addEventListener("click", () => {
            this.game.reset();
            this._resetRenderer();
        });
        this._showElement(this.game.nextPlayer === TicTacToeGamePlayers.X ? "playerX" : "playerO");
        this._displayScore();
    }

    _iterateBoxes(handler) {
        const boxes = document.getElementsByClassName("box");
        for (const box of boxes) {
            handler(box);
        }
    }

    _resetRenderer() {
        this._showElement("playerInfo");
        this._iterateBoxes((box) => {
            box.classList.remove("endGame");
            this.boxRenderer.reset(box);
            for (const statusItems of document.getElementsByClassName("status")) {
                statusItems.classList.add("invisible");
            }
        });
    }

    _handleMove(box) {
        if (this.game.status() !== TicTacToeGameStatus.STATUS_UNFINISHED) return;
        const position = box.getAttribute("data-position");
        const currentPlayer = this.game.nextPlayer;
        if (this.game.move(position)) {
            if (currentPlayer === TicTacToeGamePlayers.X) {
                this._hideElement("playerX");
                this._showElement("playerO");
                this.boxRenderer.drawX(box);
            } else {
                this._hideElement("playerO");
                this._showElement("playerX");
                this.boxRenderer.drawO(box);
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
            this._iterateBoxes(box => box.classList.add("endGame"));
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