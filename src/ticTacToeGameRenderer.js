/*global TicTacToeGameStatus*/
/*global TicTacToeGamePlayers*/
/*global TicTacToeGameBoxRenderer*/

class TicTacToeGameRenderer {// eslint-disable-line no-unused-vars
    constructor(game, score, boxRenderer) {
        this._game = game;
        this._score = score;
        this._boxRenderer = boxRenderer;
        this._playerXLabel = "playerX";
        this._playerOLabel = "playerO";
    }

    init() {
        this._iterateBoxes((box) => {
            box.addEventListener("click", () => this._handleMove(box));
            box.addEventListener("mouseenter", () => this._handleMouseEnter(box));
            this._createBoxStateAttribute(box);
        });
        document.getElementById("reset-game").addEventListener("click", () => {
            this._game.reset();
            this._resetRenderer();
        });
        this._updateNextPlayerInfo();
        this._displayScore();
    }

    _nextPlayerIsX() {
        return this._game.nextPlayer === TicTacToeGamePlayers.X;
    }

    _nextPlayerLabel() {
        return this._nextPlayerIsX() ? this._playerXLabel : this._playerOLabel;
    }

    _updateNextPlayerInfo() {
        if (this._nextPlayerIsX()) {
            this._hideElement(this._playerOLabel);
            this._showElement(this._playerXLabel);
        } else {
            this._hideElement(this._playerXLabel);
            this._showElement(this._playerOLabel);
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
            this._boxRenderer.reset(box);
            for (const statusItems of document.getElementsByClassName("status")) {
                this._addClass(statusItems, "invisible");
            }
            box.setAttribute("data-box-state", "");
        });
    }

    _handleMove(box) {
        if (this._game.status() !== TicTacToeGameStatus.STATUS_UNFINISHED) return;
        const currentPlayer = this._game.nextPlayer;
        if (this._game.move(this._getBoxPosition(box))) {
            if (currentPlayer === TicTacToeGamePlayers.X) {
                this._boxRenderer.drawX(box);
            } else {
                this._boxRenderer.drawO(box);
            }
            this._disableBox(box);
            this._updateNextPlayerInfo();
            this._handleStatus();
        }
    }

    _handleStatus() {
        const status = this._game.status();
        this._score.update(status);
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
        this._dispalyValueInElement("scorePlayerX", this._score.scorePlayerX);
        this._dispalyValueInElement("scorePlayerO", this._score.scorePlayerO);
        this._dispalyValueInElement("numberOfDraws", this._score.numberOfDraws);
    }


    _handleMouseEnter(box) {
        if (this._game.status() !== TicTacToeGameStatus.STATUS_UNFINISHED) return;
        if (this._game.isPositionEmpty(this._getBoxPosition(box))) {
            box.setAttribute("data-box-state", this._nextPlayerLabel());
        } else {
            this._disableBox(box);
        }
    }

    _showWinningCombination() {
        const winningCombination = this._game.getWinningCombination();
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