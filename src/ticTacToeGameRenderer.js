/*global TicTacToeGameStatus*/
/*global TicTacToeGamePlayers*/
/*global TicTacToeGameBoxRenderer*/

class TicTacToeGameRenderer {// eslint-disable-line no-unused-vars
    constructor(game, score, boxRenderer) {
        this.game = game;
        this.score = score;
        this.boxRenderer = boxRenderer;
        this.playerXLabel = "playerX";
        this.playerOLabel = "playerO";

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
        this._updateNextPlayerInfo();
        this._displayScore();
    }

    _nextPlayerIsX() {
        return this.game.nextPlayer === TicTacToeGamePlayers.X;
    }

    _nextPlayerLabel() {
        return this._nextPlayerIsX() ? this.playerXLabel : this.playerOLabel;
    }

    _updateNextPlayerInfo() {
        if (this._nextPlayerIsX()) {
            this._hideElement(this.playerOLabel);
            this._showElement(this.playerXLabel);
        } else {
            this._hideElement(this.playerXLabel);
            this._showElement(this.playerOLabel);
        }
    }

    _createBoxStateAttribute(box) {
        const attr = document.createAttribute("data-box-state");
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
        this._updateNextPlayerInfo();
        this._iterateBoxes((box) => {
            this.boxRenderer.reset(box);
            for (const statusItems of document.getElementsByClassName("status")) {
                this._addClass(statusItems, "invisible");
            }
            box.setAttribute("data-box-state", "");
        });
    }

    _handleMove(box) {
        if (this.game.status() !== TicTacToeGameStatus.STATUS_UNFINISHED) return;
        const currentPlayer = this.game.nextPlayer;
        if (this.game.move(this._getBoxPosition(box))) {
            if (currentPlayer === TicTacToeGamePlayers.X) {
                this.boxRenderer.drawX(box);
            } else {        
                this.boxRenderer.drawO(box);
            }
            this._disableBox(box);
            this._updateNextPlayerInfo();
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