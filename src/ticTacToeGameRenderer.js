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
            box.addEventListener("mouseenter", () => this._handleMouseEnter(box));
            this._createBoxStateAttribute(box);
        });
        document.getElementById("reset-game").addEventListener("click", () => {
            this.game.reset();
            this._resetRenderer();
        });
        this._showElement(this._nextPlayerLabel());
        this._displayScore();
    }

    _nextPlayerLabel() {
        return this.game.nextPlayer === TicTacToeGamePlayers.X ? "playerX" : "playerO";
    }

    _createBoxStateAttribute(box) {
        const attr = document.createAttribute("data-box-state");
        attr.value = this._nextPlayerLabel();
        box.setAttributeNode(attr);
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
            this.boxRenderer.reset(box);
            for (const statusItems of document.getElementsByClassName("status")) {
                this._addClass(statusItems, "invisible");
            }
            this._createBoxStateAttribute(box);
        });
    }

    _handleMove(box) {
        if (this.game.status() !== TicTacToeGameStatus.STATUS_UNFINISHED) return;
        const currentPlayer = this.game.nextPlayer;
        if (this.game.move(this._getBoxPosition(box))) {
            if (currentPlayer === TicTacToeGamePlayers.X) {
                this._hideElement("playerX");
                this._showElement("playerO");
                this.boxRenderer.drawX(box);
            } else {
                this._hideElement("playerO");
                this._showElement("playerX");
                this.boxRenderer.drawO(box);
            }
            this._disableBox(box);
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
            this._iterateBoxes(box => this._disableBox(box));
            this._showWinningCombination();
        }
    }

    _disableBox(box) {
        box.setAttribute("data-box-state", "movingDisabled");
    }

    _displayScore() {
        this._dispalyValueInElement("scorePlayerX", this.score.scorePlayerX);
        this._dispalyValueInElement("scorePlayerO", this.score.scorePlayerO);
        this._dispalyValueInElement("numberOfDraws", this.score.numberOfDraws);
    }


    _handleMouseEnter(box) {
        if (this.game.status() !== TicTacToeGameStatus.STATUS_UNFINISHED) return;
        if (this.game.isPositionEmpty(this._getBoxPosition(box))) {
            box.setAttribute("data-box-state", this._nextPlayerLabel());
        } else {
            this._disableBox(box);
        }
    }

    _showWinningCombination() {
        const winningCombination = this.game.getWinningCombination();
        if (winningCombination) {
            this._iterateBoxes(box => {
                if (winningCombination.isWinningPosition(this._getBoxPosition(box))) {
                    box.setAttribute("data-box-state", "highlightAsWinningBox");
                }
            });
        }
    }

    _showElement(id) {
        this._removeClass(document.getElementById(id), "invisible");
    }

    _hideElement(id) {
        this._addClass(document.getElementById(id), "invisible");
    }

    _getBoxPosition(box) {
        return parseInt(box.getAttribute("data-position"));
    }

    _dispalyValueInElement(elementId, value) {
        document.getElementById(elementId).innerHTML = value;
    }

    _removeClass(item, className) {
        item.classList.remove(className);
    }

    _addClass(item, className) {
        item.classList.add(className);
    }
}